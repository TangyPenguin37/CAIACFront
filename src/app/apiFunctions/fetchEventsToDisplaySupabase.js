import { supabase } from "@/lib/supabaseClient";


export async function fetchEventsToDisplaySupabase() {
  
  
let { data: event, error } = await supabase
.from('event')
.select('*')
        
  

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
