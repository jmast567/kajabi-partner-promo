-- May 2026 Partner Promo Leaderboard
-- Run this in your Supabase SQL editor

create table if not exists public.leaderboard (
  id uuid default gen_random_uuid() primary key,
  rank integer not null unique,
  partner_name text not null,
  gsas integer not null default 0,
  tier text not null check (tier in ('elite', 'mid_field', 'milestone')),
  prize_name text,
  updated_at timestamptz default now() not null
);

-- Public read access (no auth required for the landing page)
alter table public.leaderboard enable row level security;

create policy "Public read access"
  on public.leaderboard
  for select
  using (true);

-- Enable real-time on this table
-- (Also enable via Supabase Dashboard > Database > Replication > leaderboard)
alter publication supabase_realtime add table public.leaderboard;

-- Seed with placeholder data (replace with real data as it comes in)
insert into public.leaderboard (rank, partner_name, gsas, tier, prize_name) values
  (1,  'Partner A', 0, 'elite',     'Tesla Model Y 2026'),
  (2,  'Partner B', 0, 'elite',     'Dream Trip for 2'),
  (3,  'Partner C', 0, 'elite',     'Luxury Sauna'),
  (4,  'Partner D', 0, 'elite',     'La Marzocco Setup'),
  (5,  'Partner E', 0, 'elite',     'Cold Plunge Pro'),
  (6,  'Partner F', 0, 'mid_field', 'MacBook Pro 16" M4 Max'),
  (7,  'Partner G', 0, 'mid_field', 'MacBook Pro 16" M4 Max'),
  (8,  'Partner H', 0, 'mid_field', 'MacBook Pro 16" M4 Max'),
  (9,  'Partner I', 0, 'mid_field', 'MacBook Pro 16" M4 Max'),
  (10, 'Partner J', 0, 'mid_field', 'MacBook Pro 16" M4 Max')
on conflict do nothing;
