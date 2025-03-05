import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://drwnhrdppxlgtxgczjod.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyd25ocmRwcHhsZ3R4Z2N6am9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNzU3ODIsImV4cCI6MjA1Njc1MTc4Mn0.0hqpa8Psc9EVI-8TybfDAhBjSAA0-KOlcgET_-idlZ4'
export const supabase = createClient(supabaseUrl, supabaseKey)