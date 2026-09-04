import FadeIn from "./FadeIn";

export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% -10%, rgba(193,80,46,0.3), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 0%, rgba(87,105,117,0.22), transparent 60%)",
        }}
      />
      <div className="wrap relative py-14 md:py-16">
        <FadeIn>
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
              {eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl">
              {title}
            </h1>
            {children && <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">{children}</p>}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
