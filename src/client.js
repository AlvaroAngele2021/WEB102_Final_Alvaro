import { createClient} from '@supabase/supabase-js'

const URL = 'https://mrjybxubahxbaatnxdzf.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yanlieHViYWh4YmFhdG54ZHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNTgxNzksImV4cCI6MjAyOTczNDE3OX0.7NXZWdCDPSiG8dMk1RpEemc6nqZ-n-zGb5rJuVT6bGs';

export const supabase = createClient(URL, API_KEY);