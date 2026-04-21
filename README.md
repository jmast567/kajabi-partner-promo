# Kajabi Partner Championship — May 2026

External affiliate landing page with live leaderboard. Built with Next.js + Supabase. Deploy to Vercel.

## Setup

### 1. Supabase

1. Create a new Supabase project at supabase.com
2. Open the SQL editor and run `supabase/schema.sql`
3. In **Database > Replication**, enable the `leaderboard` table for realtime
4. Copy your **Project URL** and **anon public** key from **Settings > API**

### 2. Local development

```bash
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

npm install
npm run dev
```

### 3. Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in Vercel
3. Add the two environment variables under **Settings > Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## Updating the leaderboard

Edit the `leaderboard` table directly in Supabase (Table Editor or SQL). The page updates live in all open browsers via realtime subscriptions — no redeployment needed.

Update frequency: every Friday during the live promo window.

## Key dates the page handles automatically

| Date | Behavior |
|---|---|
| Before May 18 | Leaderboard shows "Opens May 18" |
| May 18 6AM PST | Leaderboard goes live, nav shows affiliate status |
| May 19 | Cart open badge updates |
| Jun 5 | Final close |
