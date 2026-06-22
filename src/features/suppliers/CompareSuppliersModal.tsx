import { useStore } from "../../app/store";

export const CompareSuppliersModal = () => {
  const {
    isCompareModalOpen,
    closeCompareModal,
    suppliers,
    compareA,
    compareB,
    setCompareA,
    setCompareB,
  } = useStore();

  if (!isCompareModalOpen) return null;

  const winner =
    compareA && compareB
      ? compareA.minOrder < compareB.minOrder
        ? compareA
        : compareB
      : null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={closeCompareModal}
    >
      <div
        className="bg-white text-black p-6 rounded-xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">
          Сравнение поставщиков
        </h2>

        {/* Выбор A */}
        <select
          className="border p-2 rounded w-full mb-3"
          value={compareA?.id || ""}
          onChange={(e) =>
            setCompareA(
              suppliers.find((s) => s.id === e.target.value) || null
            )
          }
        >
          <option value="">Выберите первого</option>
          {suppliers.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* Выбор B */}
        <select
          className="border p-2 rounded w-full mb-4"
          value={compareB?.id || ""}
          onChange={(e) =>
            setCompareB(
              suppliers.find((s) => s.id === e.target.value) || null
            )
          }
        >
          <option value="">Выберите второго</option>
          {suppliers.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* Результат */}
        {compareA && compareB && (
          <div className="border rounded p-4 space-y-2">
            <p>
                <b>{compareA.name}</b> vs <b>{compareB.name}</b>
            </p>

            <p>Категория: {compareA.category} / {compareB.category}</p>
            <p>Город: {compareA.city} / {compareB.city}</p>
            <p>Мин заказ: {compareA.minOrder}₽ / {compareB.minOrder}₽</p>
            <p>Рейтинг: ⭐ {compareA.rating} / ⭐ {compareB.rating}</p>

            <div className="mt-3 font-semibold">
                Победитель: {winner?.name}
            </div>
          </div>
        )}

        <button
          onClick={closeCompareModal}
          className="mt-4 text-sm text-gray-500"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};