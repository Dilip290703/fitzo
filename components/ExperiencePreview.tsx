export function ExperiencePreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-frame">
        <div className="relative overflow-hidden rounded-[8px]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#8ec3f0_0%,#abd0ef_35%,transparent_35%,transparent_100%)] md:bg-[linear-gradient(90deg,#8ec3f0_0%,#abd0ef_42%,transparent_42%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.1))]" />
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1500&q=80"
            alt="Summer collection"
            className="h-[420px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 flex items-end px-6 py-8 md:px-10 md:py-10">
            <div className="max-w-[340px]">
              <p className="font-display text-[42px] leading-none font-medium tracking-[-0.03em] text-[#123f73] sm:text-[56px]">
                <span className="text-[#123f73]">Summer</span>{" "}
                <span className="text-[#f1484b]">Collections</span>
              </p>
              <a
                href="#featured-stores"
                className="mt-6 inline-flex h-11 items-center gap-2 bg-white px-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f1484b] transition duration-300 hover:-translate-y-0.5"
              >
                Shop now
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
