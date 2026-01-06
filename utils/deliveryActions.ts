import { createClient } from '@supabase/supabase-js';

// Define the Database Type (Optional but good for TS)
// For now, we will use 'any' for rapid development, or you can generate types.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
