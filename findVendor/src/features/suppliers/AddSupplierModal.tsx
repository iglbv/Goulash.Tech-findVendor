import { useState } from "react";
import { useStore } from "../../app/store";

export const AddSupplierModal = () => {
  const { isAddModalOpen, closeAddModal, addSupplier } = useStore();

  const [form, setForm] = useState({
    name: "",
    category: "",
    city: "",
    minOrder: "",
    phone: "",
    email: "",
    website: "",
    source: "",
  });

  if (!isAddModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addSupplier({
      id: "",
      name: form.name,
      category: form.category,
      city: form.city,
      minOrder: Number(form.minOrder),
      rating: 4.5,
      phone: form.phone,
      email: form.email,
      website: form.website,
      source: form.source,
    });

    setForm({
      name: "",
      category: "",
      city: "",
      minOrder: "",
      phone: "",
      email: "",
      website: "",
      source: "",
    });

    closeAddModal();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={closeAddModal}
    >
      <div
        className="bg-white text-black p-6 rounded-xl w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">
          Добавить поставщика
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            placeholder="Название"
            className="border border-gray-300 p-2 rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <select
            className="border border-gray-300 p-2 rounded"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          >
            <option value="">Выберите категорию</option>
            <option value="Овощи и фрукты">Овощи и фрукты</option>
            <option value="Мясо и птица">Мясо и птица</option>
            <option value="Молочная продукция">Молочная продукция</option>
            <option value="Рыба и морепродукты">Рыба и морепродукты</option>
            <option value="Бакалея">Бакалея</option>
            <option value="Упаковка">Упаковка</option>
          </select>

          <input
            placeholder="Город"
            className="border border-gray-300 p-2 rounded"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Мин. заказ (₽)"
            className="border border-gray-300 p-2 rounded"
            value={form.minOrder}
            onChange={(e) =>
              setForm({ ...form, minOrder: e.target.value })
            }
            required
          />

          <input
            placeholder="Телефон"
            className="border border-gray-300 p-2 rounded"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <input
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Сайт"
            className="border border-gray-300 p-2 rounded"
            value={form.website}
            onChange={(e) =>
              setForm({ ...form, website: e.target.value })
            }
          />

          <input
            placeholder="Источник информации"
            className="border border-gray-300 p-2 rounded"
            value={form.source}
            onChange={(e) =>
              setForm({ ...form, source: e.target.value })
            }
          />

          <button className="bg-black text-white py-2 rounded hover:opacity-90">
            Сохранить
          </button>
        </form>

        <button
          className="mt-4 text-sm text-gray-500 hover:text-black"
          onClick={closeAddModal}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};