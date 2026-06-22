export interface Supplier {
  id: string;
  name: string;
  category: string;
  city: string;
  minOrder: number;
  rating: number;

  phone?: string;
  email?: string;
  website?: string;
  source?: string;

  delivery?: string;
  certificates?: string[];
}

export interface SupplierFilters {
  category: string;
  city: string;
  minOrder: number;
  search: string;
}