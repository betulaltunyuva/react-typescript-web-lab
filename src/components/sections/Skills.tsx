const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    description: "Modern and responsive user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile & Backend",
    icon: "⚙️",
    description: "Cross-platform applications and data services",
    skills: [
      "Flutter",
      "Dart",
      "Supabase",
      ".NET Core",
      "SQL",
      "REST API",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "AI & Data",
    icon: "🧠",
    description: "Machine learning and computer vision solutions",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "YOLOv8",
      "OpenCV",
      "Matplotlib",
    ],
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Tools",
    icon: "🧰",
    description: "Development, testing, and collaboration tools",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "VS Code",
      "Google Colab",
      "Postman",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-4 py-24 dark:bg-slate-950 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Technologies I use to build my projects.
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            My technical toolkit continues to grow as I work on projects
            across different software engineering fields.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} text-xl shadow-lg`}
                >
                  {group.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm transition group-hover:border-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}