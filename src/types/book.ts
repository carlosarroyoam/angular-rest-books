export interface Book {
  id: number;
  title: string;
  isbn: string;
  price: number;
  is_available_online: boolean;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}
