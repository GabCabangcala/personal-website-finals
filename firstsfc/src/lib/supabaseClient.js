import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://jetljrxscgdjyybofqqs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldGxqcnhzY2dkanl5Ym9mcXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NTIwMTQsImV4cCI6MjA1NDEyODAxNH0.ppZakANQuMsovBiJf-Tzbq_B-XlVmC6QS9oKI_8QCww')