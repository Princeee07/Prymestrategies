/**
 * Supabase database types
 *
 * Generate these types from your Supabase project:
 * npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.ts
 *
 * For now, this is a placeholder with the expected table structure.
 */

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          date: string;
          time: string;
          service: string;
          message: string | null;
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          date: string;
          time: string;
          service: string;
          message?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          date?: string;
          time?: string;
          service?: string;
          message?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
