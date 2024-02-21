import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABSE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABSE_ANON_KEY!;

//↑の?がついているはundefindの時に使える

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY,{
    auth: {
        persistSession: false,
    }
})