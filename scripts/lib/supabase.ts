import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

/**
 * Supabase client instance.
 */
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);
