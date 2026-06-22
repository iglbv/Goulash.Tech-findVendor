import type { Supplier, SupplierFilters } from "./model";

export const filterSuppliers = (
  list: Supplier[],
  filters: SupplierFilters
) => {
  return list.filter((s) => {
    // Фильтр по категории
    if (filters.category && s.category !== filters.category) return false;
    
    // Фильтр по городу
    if (filters.city && s.city !== filters.city) return false;
    
    // Фильтр по минимальному заказу
    if (filters.minOrder && (s.minOrder || 0) < filters.minOrder) return false;
    
    // Поиск по названию (регистронезависимый)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const nameLower = s.name.toLowerCase();
      if (!nameLower.includes(searchLower)) return false;
    }

    return true;
  });
};