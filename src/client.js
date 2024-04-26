import { createClient } from '@supabase/supabase-js'

const URL = 'https://sfnsoxzblqiujosnbfwe.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmbnNveHpibHFpdWpvc25iZndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MzIxOTgsImV4cCI6MjAyODUwODE5OH0.ru7NXgiHvMn4fTK4qC4Z_mTxJlj8ev4hszTYPbPUQ2Y'

export const supabase = createClient(URL, API_KEY);