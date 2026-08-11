const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...YOUR_ANON_KEY";

async function initSupabase() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

function redirect(path) {
  window.location.href = path;
}
