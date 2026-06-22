import { useStore } from "../../app/store";
import { useState } from "react";

export const FiltersPanel = () => {
  const { filters, setFilter } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const clearFilters = () => {
    setFilter("category", "");
    setFilter("city", "");
    setFilter("minOrder", 0);
    setSearchQuery("");
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setFilter("search", value); // Добавим новое поле в фильтры
  };

  return (
    <div className="flex gap-4 mb-6 flex-wrap items-center">
      {/* Поиск по названию */}
      <input
        type="text"
        placeholder="Поиск по названию..."
        className="border p-2 rounded min-w-[200px]"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={filters.category}
        onChange={(e) => setFilter("category", e.target.value)}
      >
        <option value="">Категория</option>
        <option value="Овощи и фрукты">Овощи и фрукты</option>
        <option value="Мясо и птица">Мясо и птица</option>
        <option value="Молочная продукция">Молочная продукция</option>
        <option value="Рыба и морепродукты">Рыба и морепродукты</option>
        <option value="Бакалея">Бакалея</option>
        <option value="Упаковка">Упаковка</option>
      </select>

      <select
        className="border p-2 rounded"
        value={filters.city}
        onChange={(e) => setFilter("city", e.target.value)}
      >
        <option value="">Город</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Челябинск">Челябинск</option>
      </select>

      <input
        type="number"
        placeholder="Мин. заказ (₽)"
        className="border p-2 rounded w-[150px]"
        value={filters.minOrder || ""}
        onChange={(e) =>
          setFilter("minOrder", Number(e.target.value))
        }
      />

      {/* Кнопка очистки */}
      <button
        onClick={clearFilters}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
      >
        Очистить фильтры
      </button>
    </div>
  );
};