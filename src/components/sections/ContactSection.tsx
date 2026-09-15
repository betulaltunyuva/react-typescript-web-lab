import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-24 dark:bg-slate-950 sm:px-6"
    >
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Contact
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Let&apos;s connect and build something useful.
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
            You can explore my source code, follow my learning journey,
            and reach me through my GitHub profile.
          </p>

          <a
            href="https://github.com/betulaltunyuva"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-white">
                GitHub
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                github.com/betulaltunyuva
              </p>
            </div>

            <span className="text-xl text-blue-600">→</span>
          </a>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950">
                ✓
              </span>
              Open to learning and collaboration
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                📍
              </span>
              Based in Türkiye
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8">
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Contact Form Demo
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              This form demonstrates validation and interaction states.
              It does not send information to a backend service.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}