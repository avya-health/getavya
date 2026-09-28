import { ThemeSwitcher } from './theme-switcher'

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" aria-label="Avya home" className="rounded-sm font-serif text-3xl font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            avya
          </a>
          <ThemeSwitcher />
        </nav>
      </header>
      <section id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="max-w-xl">
          <h1 className="font-serif text-6xl leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl lg:text-[6.5rem]">
            Personal health, <span className="text-primary">reimagined.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            Avya helps you understand what works for your body, so everyday health decisions feel simpler.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-secondary shadow-2xl shadow-primary/10">
            <img src="/gdm-hero.png" alt="Pregnant woman resting her hands on her belly" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <footer id="about" className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-border px-6 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-serif text-base font-semibold text-foreground">Avya Health</p>
        <p>© 2026 Avya Health</p>
      </footer>
    </main>
  )
}
