'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

interface ChatMessage {
  id: number
  created_at: string
  handle: string
  message: string
}

const COLORS = [
  '#D6A151', '#AD715C', '#5A8070', '#4A8FAA', '#8B6FA3',
  '#C17F5A', '#6A9E8A', '#5A7FA0', '#B07090', '#7A9060',
]

function colorForHandle(handle: string) {
  let hash = 0
  for (let i = 0; i < handle.length; i++) hash = handle.charCodeAt(i) + ((hash << 5) - hash)
  return COLORS[Math.abs(hash) % COLORS.length]
}

function initials(handle: string) {
  return handle.slice(0, 2).toUpperCase()
}

function timeLabel(iso: string) {
  const d = new Date(iso)
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function PartnerChat() {
  const [messages, setMessages]   = useState<ChatMessage[]>([])
  const [handle, setHandle]       = useState('')
  const [savedHandle, setSavedHandle] = useState('')
  const [draft, setDraft]         = useState('')
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState('')
  const [open, setOpen]           = useState(false)
  const [unread, setUnread]       = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback((smooth = true) => {
    bottomRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  const fetchMessages = useCallback(async () => {
    const { data } = await supabase
      .from('partner_chat')
      .select('*')
      .order('created_at', { ascending: true })
      .limit(200)
    if (data) setMessages(data)
  }, [])

  useEffect(() => {
    fetchMessages()
    const ch = supabase
      .channel('chat')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'partner_chat' }, (payload) => {
        setMessages(prev => [...prev, payload.new as ChatMessage])
        if (!open) setUnread(n => n + 1)
      })
      .subscribe()
    return () => { supabase.removeChannel(ch) }
  }, [fetchMessages, open])

  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => scrollToBottom(false), 50)
    }
  }, [open, scrollToBottom])

  useEffect(() => {
    if (open) scrollToBottom()
  }, [messages, open, scrollToBottom])

  async function send() {
    const text = draft.trim()
    if (!text || !savedHandle) return
    setSending(true)
    setError('')
    const { error: err } = await supabase
      .from('partner_chat')
      .insert({ handle: savedHandle, message: text })
    if (err) setError('Failed to send. Try again.')
    else setDraft('')
    setSending(false)
    inputRef.current?.focus()
  }

  function submitHandle(e: React.FormEvent) {
    e.preventDefault()
    const h = handle.trim()
    if (h.length < 2) return
    setSavedHandle(h)
  }

  return (
    <>
      {/* Floating toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#D6A151] hover:bg-[#c49040] shadow-2xl flex items-center justify-center transition-colors"
        aria-label="Partner chat"
      >
        {open ? (
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/>
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {unread > 0 && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[340px] max-w-[calc(100vw-24px)] flex flex-col rounded-[12px] overflow-hidden shadow-2xl border border-white/[0.12] bg-[#0f0f0f]" style={{ height: '460px' }}>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-white/[0.08] shrink-0">
            <div>
              <p className="text-[13px] font-bold text-white">Partner Chat</p>
              <p className="text-[11px] text-white/40">Connect with other partners in real time</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#2a2a2a #0f0f0f' }}>
            {messages.length === 0 && (
              <div className="text-center text-[12px] text-white/30 pt-6">
                No messages yet. Say hello!
              </div>
            )}
            {messages.map(m => (
              <div key={m.id} className="flex items-start gap-2.5">
                <div
                  className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-black mt-0.5"
                  style={{ background: colorForHandle(m.handle) }}
                >
                  {initials(m.handle)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-[12px] font-bold" style={{ color: colorForHandle(m.handle) }}>{m.handle}</span>
                    <span className="text-[10px] text-white/25">{timeLabel(m.created_at)}</span>
                  </div>
                  <p className="text-[13px] text-white/75 leading-snug break-words">{m.message}</p>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Handle setup or input */}
          <div className="shrink-0 border-t border-white/[0.08] bg-[#111111] px-4 py-3">
            {!savedHandle ? (
              <form onSubmit={submitHandle} className="flex gap-2">
                <input
                  value={handle}
                  onChange={e => setHandle(e.target.value.slice(0, 40))}
                  placeholder="Set a display name to join…"
                  className="flex-1 bg-white/[0.06] border border-white/[0.10] rounded-[6px] px-3 py-2 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-[#D6A151]/50"
                  maxLength={40}
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={handle.trim().length < 2}
                  className="px-3 py-2 bg-[#D6A151] hover:bg-[#c49040] disabled:opacity-40 text-black font-bold text-[12px] rounded-[6px] transition-colors"
                >
                  Join
                </button>
              </form>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={draft}
                    onChange={e => setDraft(e.target.value.slice(0, 500))}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }}}
                    placeholder="Message…"
                    className="flex-1 bg-white/[0.06] border border-white/[0.10] rounded-[6px] px-3 py-2 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-[#D6A151]/50"
                    disabled={sending}
                  />
                  <button
                    onClick={send}
                    disabled={!draft.trim() || sending}
                    className="px-3 py-2 bg-[#D6A151] hover:bg-[#c49040] disabled:opacity-40 text-black font-bold text-[12px] rounded-[6px] transition-colors"
                  >
                    ↑
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-400 mt-1.5">{error}</p>}
                <p className="text-[10px] text-white/25 mt-1.5">Chatting as <strong className="text-white/45">{savedHandle}</strong> · <button onClick={() => setSavedHandle('')} className="underline hover:text-white/50">change</button></p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
