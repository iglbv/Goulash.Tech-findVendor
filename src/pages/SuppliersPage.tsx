import { useStore } from "../app/store";
import { filterSuppliers } from "../features/suppliers/filters";

import { SupplierCard } from "../features/suppliers/SupplierCard";
import { FiltersPanel } from "../features/suppliers/FiltersPanel";

import { SupplierModal } from "../features/suppliers/SupplierModal";
import { AddSupplierModal } from "../features/suppliers/AddSupplierModal";
import { CompareSuppliersModal } from "../features/suppliers/CompareSuppliersModal";

export const SuppliersPage = () => {
  const {
    filters,
    suppliers,
    openAddModal,
    openCompareModal,
  } = useStore();

  const filtered = filterSuppliers(suppliers, filters);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Поиск поставщиков
      </h1>

      {/* actions */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={openAddModal}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Добавить
        </button>

        <button
          onClick={() => {
            if (suppliers.length < 2) {
              alert("Нужно минимум 2 поставщика");
              return;
            }
            openCompareModal();
          }}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Сравнить
        </button>
      </div>

      <FiltersPanel />

      {filtered.length === 0 ? (
        <p className="text-gray-500 mt-4">
          Ничего не найдено
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((supplier) => (
            <SupplierCard
              key={supplier.id}
              supplier={supplier}
            />
          ))}
        </div>
      )}

      <SupplierModal />
      <AddSupplierModal />
      <CompareSuppliersModal />
    </div>
  );
};