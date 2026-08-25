import NavbarComponent from "@/components/NavbarComponent"

const pageHighlights = [
    { label: "Saved items", value: "24" },
    { label: "Recent activity", value: "08" },
    { label: "Profile completion", value: "92%" },
]

export default function HomePage() {
    return (
        <main className="min-h-screen bg-amber-50 text-slate-900">
            <NavbarComponent />

            <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
                <div className="max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                        Your personal space
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Welcome back.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Keep track of the things you love and pick up right where
                        you left off.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {pageHighlights.map((highlight) => (
                        <article
                            key={highlight.label}
                            className="border border-amber-200 bg-white/70 p-5 shadow-sm"
                        >
                            <p className="text-sm text-slate-500">{highlight.label}</p>
                            <p className="mt-3 text-3xl font-bold text-slate-900">
                                {highlight.value}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="border-t border-amber-200 pt-8">
                    <h2 className="text-xl font-semibold">A fresh start</h2>
                    <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                        Your dashboard is ready for whatever comes next. Explore,
                        save, and make this space your own.
                    </p>
                </div>
            </section>
        </main>
    )
}
