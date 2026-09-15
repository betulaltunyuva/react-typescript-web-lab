export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:py-28"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Software Engineering Student
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Building thoughtful software for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              real-world problems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Hi, I am Betül Altunyuva. I develop web, mobile, machine
            learning, and cybersecurity projects with a focus on useful
            solutions and clear user experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore My Projects
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://github.com/betulaltunyuva"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z" />
              </svg>
              GitHub Profile
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["React", "TypeScript", "Flutter", "Python", "Supabase"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl dark:border-slate-700">
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-500">
                developer.ts
              </span>
            </div>

            <div className="space-y-3 p-6 font-mono text-sm leading-7 sm:p-8">
              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">name</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-300">
                  "Betül Altunyuva"
                </span>
                <span className="text-slate-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">role</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-300">
                  "Software Engineer"
                </span>
                <span className="text-slate-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">focus</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-yellow-300">[</span>
              </p>

              <p className="pl-10 text-emerald-300">
                "Web Development",
              </p>
              <p className="pl-10 text-emerald-300">
                "Mobile Applications",
              </p>
              <p className="pl-10 text-emerald-300">
                "Machine Learning"
              </p>

              <p className="pl-5">
                <span className="text-yellow-300">]</span>
                <span className="text-slate-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">learning</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-orange-300">true</span>
              </p>

              <p>
                <span className="text-yellow-300">{"}"}</span>
                <span className="text-slate-400">;</span>
              </p>

              <p className="pt-3 text-slate-500">
                // Turning ideas into working projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}