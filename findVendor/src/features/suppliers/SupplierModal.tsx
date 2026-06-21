import { useStore } from "../../app/store";

export const SupplierModal = () => {
  const { selectedSupplier, setSelectedSupplier } = useStore();

  if (!selectedSupplier) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
      onClick={() => setSelectedSupplier(null)}
    >
      <div
        className="bg-white p-6 rounded-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-2">
          {selectedSupplier.name}
        </h2>

        <p className="text-gray-500 mb-2">
          {selectedSupplier.category} • {selectedSupplier.city}
        </p>

        <p>Мин. заказ: {selectedSupplier.minOrder} ₽</p>

        {selectedSupplier.delivery && (
          <p>Доставка: {selectedSupplier.delivery}</p>
        )}

        {selectedSupplier.certificates && (
          <p>Сертификаты: {selectedSupplier.certificates.join(", ")}</p>
        )}

        {selectedSupplier.rating && (
          <p>Рейтинг: ⭐ {selectedSupplier.rating}</p>
        )}

        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          onClick={() => setSelectedSupplier(null)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};