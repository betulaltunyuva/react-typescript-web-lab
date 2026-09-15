const focusAreas = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Responsive and user-focused web applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences with Flutter",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    description: "Data-driven classification and computer vision projects",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description: "Network monitoring and rule-based threat detection",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-4 py-24 dark:bg-slate-900/50 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Learning, building, and turning ideas into software.
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I am a Software Engineering student who enjoys developing
              solutions across web, mobile, machine learning, and
              cybersecurity. I focus on transforming what I learn into
              practical and well-documented projects.
            </p>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              My projects include AI-powered mobile applications, network
              monitoring tools, computer vision systems, classification
              models, and responsive web interfaces. Each project helps me
              strengthen both my technical knowledge and problem-solving
              skills.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-2xl font-extrabold text-blue-600">6+</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  GitHub Projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-2xl font-extrabold text-violet-600">4</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Focus Areas
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-2xl font-extrabold text-emerald-600">
                  100%
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Curiosity
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.color} text-xl shadow-lg transition group-hover:scale-110`}
                >
                  {area.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}