import { NextResponse } from 'next/server'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDQeaW05ez9OzVproXXg_m2kqfvf2hMYElUy7n1RpJNCXOrx4K4PIHL0BEgd1Ix-fRiNSE2xivu1Uj/pub?gid=1098523292&single=true&output=csv'

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') { inQuotes = !inQuotes }
    else if (c === ',' && !inQuotes) { result.push(cur.trim()); cur = '' }
    else { cur += c }
  }
  result.push(cur.trim())
  return result
}

export async function GET() {
  const res = await fetch(CSV_URL, { redirect: 'follow', next: { revalidate: 60 } })
  const text = await res.text()
  const lines = text.trim().split('\n').slice(1)

  const totals = new Map<string, number>()
  for (const line of lines) {
    const cols = parseCsvLine(line)
    const name = cols[0]
    const n    = parseInt(cols[3] || '0', 10)
    if (name && name.toLowerCase() !== 'total') totals.set(name, (totals.get(name) ?? 0) + n)
  }

  const rows = [...totals.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([partner_name, gsas], i) => ({ rank: i + 1, partner_name, gsas }))

  return NextResponse.json(rows)
}
