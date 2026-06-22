import type { Supplier } from "./model";
import { useStore } from "../../app/store";

interface Props {
  supplier: Supplier;
}

export const SupplierCard = ({ supplier }: Props) => {
  const { setSelectedSupplier } = useStore();

  return (
    <div
      onClick={() => setSelectedSupplier(supplier)}
      className="border rounded-xl p-4 bg-white hover:shadow-md cursor-pointer"
    >
      <div className="font-semibold text-lg">
        {supplier.name}
      </div>

      <div className="text-sm text-gray-500">
        {supplier.category} • {supplier.city}
      </div>

      <div className="text-sm mt-2">
        Мин. заказ: {supplier.minOrder} ₽
      </div>

      <div className="text-sm">
        ⭐ {supplier.rating}
      </div>

      {/* contacts */}
      <div className="mt-2 text-sm text-gray-600 space-y-1">
        {supplier.phone && <div>📞 {supplier.phone}</div>}
        {supplier.email && <div>✉️ {supplier.email}</div>}
        {supplier.website && <div>🌐 сайт</div>}
        {supplier.source && <div>📌 {supplier.source}</div>}
      </div>
    </div>
  );
};