
const SUPABASE_URL = "https://grfyaznglffrapkgbvsq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZnlhem5nbGZmcmFwa2didnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODc2ODYsImV4cCI6MjA4MjE2MzY4Nn0.qhrOjP1SQ1ifwpAVipR71lvAdtC2SF2NKDB3v92zYew";


const { createClient } = supabase;


const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Supabase initialized");

