export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface BookingInsert {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface BookingUpdate {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  service?: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
