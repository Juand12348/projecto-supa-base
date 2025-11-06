// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hgzcvkdpdaokqbbvtkwq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnemN2a2RwZGFva3FiYnZ0a3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDk2NTEsImV4cCI6MjA3ODAyNTY1MX0.xcaGN82ml-NEXjMhCQwt1y6uRLTIq7QkVGTcj3eR_VY';
export const supabase = createClient(supabaseUrl, supabaseKey);