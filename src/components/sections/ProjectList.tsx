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
import Card from "../ui/Card";

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
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h2>

        <p className="mb-8 text-gray-600 dark:text-gray-400">
          A selection of projects I have developed and
          contributed to.
        </p>

        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Error">
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
          <div className="flex justify-center py-12">
            <div
              className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"
              role="status"
              aria-label="Loading projects"
            />
          </div>
        )}

        {!loading &&
          !error &&
          filteredProjects.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              No matching projects were found.
            </p>
          )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} title={project.title}>
              <div className="mb-3 flex h-40 items-center justify-center rounded bg-gradient-to-br from-blue-100 to-indigo-100 text-4xl opacity-70 dark:from-gray-700 dark:to-gray-600">
                💻
              </div>

              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-3 flex flex-wrap gap-1">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-gray-400">
                  {project.year} ·{" "}
                  {project.category.replace("-", " ")}
                  {project.featured ? " · Featured" : ""}
                </p>

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
