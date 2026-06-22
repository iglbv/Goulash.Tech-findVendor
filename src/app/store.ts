import { create } from "zustand";
import type { Supplier, SupplierFilters } from "../features/suppliers/model";
import { suppliers as initialSuppliers } from "../features/suppliers/data";

interface Store {
  suppliers: Supplier[];

  filters: SupplierFilters;
  setFilter: (key: keyof SupplierFilters, value: any) => void;

  selectedSupplier: Supplier | null;
  setSelectedSupplier: (s: Supplier | null) => void;

  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  addSupplier: (s: Supplier) => void;

  isCompareModalOpen: boolean;
  openCompareModal: () => void;
  closeCompareModal: () => void;

  compareA: Supplier | null;
  compareB: Supplier | null;
  setCompareA: (s: Supplier | null) => void;
  setCompareB: (s: Supplier | null) => void;
}

export const useStore = create<Store>((set) => ({
  suppliers: initialSuppliers,

  filters: {
    category: "",
    city: "",
    minOrder: 0,
    search: "",
  },

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  selectedSupplier: null,
  setSelectedSupplier: (s) => set({ selectedSupplier: s }),

  isAddModalOpen: false,
  openAddModal: () => set({ isAddModalOpen: true }),
  closeAddModal: () => set({ isAddModalOpen: false }),

  addSupplier: (supplier) =>
    set((state) => ({
      suppliers: [
        ...state.suppliers,
        {
          ...supplier,
          id: Date.now().toString(),
        },
      ],
      isAddModalOpen: false,
    })),

  isCompareModalOpen: false,
  openCompareModal: () => set({ isCompareModalOpen: true }),
  closeCompareModal: () =>
    set({
      isCompareModalOpen: false,
      compareA: null,
      compareB: null,
    }),

  compareA: null,
  compareB: null,
  setCompareA: (s) => set({ compareA: s }),
  setCompareB: (s) => set({ compareB: s }),
}));