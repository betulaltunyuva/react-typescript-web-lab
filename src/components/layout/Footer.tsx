export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 dark:border-slate-800 dark:bg-slate-950 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-slate-900 dark:text-white">
            Betül Altunyuva
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Built with React, TypeScript, Tailwind CSS, and curiosity.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/betulaltunyuva"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
          >
            GitHub
          </a>

          <a
            href="#hero"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Betül Altunyuva. All rights reserved.
      </p>
    </footer>
  );
}