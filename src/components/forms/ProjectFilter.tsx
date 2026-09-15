import type {
  Category,
  SortField,
  SortOrder,
} from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: {
  value: Category | "all";
  label: string;
}[] = [
  { value: "all", label: "All Projects" },
  { value: "mobile", label: "Mobile" },
  { value: "fullstack", label: "Full Stack" },
  {
    value: "machine-learning",
    label: "Machine Learning",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
  },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        <input
          type="text"
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search projects or technologies..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900"
          aria-label="Search projects"
        />
      </div>

      <div className="mt-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Project category filter"
        >
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                onCategoryChange(item.value)
              }
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                category === item.value
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
              aria-pressed={category === item.value}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={sortField}
            onChange={(event) =>
              onSortFieldChange(
                event.target.value as SortField
              )
            }
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            aria-label="Sort projects by"
          >
            <option value="year">Sort by year</option>
            <option value="title">Sort by title</option>
          </select>

          <button
            type="button"
            onClick={() =>
              onSortOrderChange(
                sortOrder === "asc" ? "desc" : "asc"
              )
            }
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {sortOrder === "asc"
              ? "↑ Ascending"
              : "↓ Descending"}
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Showing{" "}
        <span className="font-bold text-slate-700 dark:text-slate-200">
          {resultCount}
        </span>{" "}
        of {totalCount} projects
      </p>
    </div>
  );
}