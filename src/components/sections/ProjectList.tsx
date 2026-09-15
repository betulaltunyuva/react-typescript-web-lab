import { useEffect, useMemo, useState } from "react";
import type {
  Category,
  Project,
  SortField,
  SortOrder,
} from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Alert from "../ui/Alert";

interface ProjectVisual {
  icon: string;
  label: string;
  gradient: string;
  shadow: string;
}

const projectVisuals: Record<string, ProjectVisual> = {
  NetWatch: {
    icon: "🛡️",
    label: "Network Security",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    shadow: "shadow-blue-500/20",
  },
  "AI BiBite": {
    icon: "🥗",
    label: "AI Nutrition Assistant",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    shadow: "shadow-emerald-500/20",
  },
  PatiMap: {
    icon: "🐾",
    label: "Animal Welfare Platform",
    gradient: "from-orange-400 via-rose-500 to-pink-600",
    shadow: "shadow-rose-500/20",
  },
  "YOLOv8 Person Counting": {
    icon: "👁️",
    label: "Computer Vision",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    shadow: "shadow-violet-500/20",
  },
  "Breast Cancer Classification": {
    icon: "🔬",
    label: "Machine Learning",
    gradient: "from-pink-500 via-rose-500 to-red-600",
    shadow: "shadow-rose-500/20",
  },
  "Wine Classification": {
    icon: "🍷",
    label: "Data Classification",
    gradient: "from-red-500 via-rose-700 to-violet-800",
    shadow: "shadow-red-500/20",
  },
};

const defaultVisual: ProjectVisual = {
  icon: "💻",
  label: "Software Project",
  gradient: "from-blue-500 to-violet-600",
  shadow: "shadow-blue-500/20",
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<Category | "all">("all");
  const [sortField, setSortField] =
    useState<SortField>("year");
  const [sortOrder, setSortOrder] =
    useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchProjects();
        setProjects(data);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "An unknown error occurred."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects = useMemo(
    () =>
      applyFilters(
        projects,
        search,
        category,
        sortField,
        sortOrder
      ),
    [
      projects,
      search,
      category,
      sortField,
      sortOrder,
    ]
  );

  return (
    <section
      id="projects"
      className="bg-slate-50 px-4 py-24 dark:bg-slate-900/50 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Selected Work
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Projects built through learning and experimentation.
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Explore my projects across mobile development, machine
            learning, full-stack applications, and cybersecurity.
          </p>
        </div>

        {error && (
          <div className="mb-8">
            <Alert variant="error" title="Projects could not be loaded">
              {error}
            </Alert>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filteredProjects.length}
            totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-20">
            <div
              className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"
              role="status"
              aria-label="Loading projects"
            />
          </div>
        )}

        {!loading &&
          !error &&
          filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center dark:border-slate-700 dark:bg-slate-950">
              <p className="text-4xl">🔍</p>
              <p className="mt-4 font-semibold text-slate-700 dark:text-slate-200">
                No matching projects were found.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or category.
              </p>
            </div>
          )}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const visual =
              projectVisuals[project.title] ?? defaultVisual;

            return (
              <article
                key={project.id}
                className="group flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex w-full flex-col">
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${visual.gradient}`}
                  >
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
                    <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-white/10" />
                    <div className="absolute right-5 top-5 h-12 w-12 rounded-full border border-white/20" />

                    {project.featured && (
                      <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                        Featured
                      </span>
                    )}

                    <div className="relative text-center">
                      <div
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-4xl shadow-xl ${visual.shadow} backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        {visual.icon}
                      </div>

                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                        {visual.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <span className="shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                      <span className="text-xs font-semibold capitalize text-slate-400">
                        {project.category.replace("-", " ")}
                      </span>

                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3 hover:text-violet-600 dark:text-blue-400"
                        >
                          View Project
                          <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}