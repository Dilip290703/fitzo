const testimonials = [
  {
    name: "Mia Johnson",
    role: "Remote stylist",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    quote:
      "I picked three denim fits, tried them in my room, and only kept the pair that actually worked. The return pickup happened before I finished coffee.",
  },
  {
    name: "Aadhira Nair",
    role: "Weekend shopper",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    quote:
      "The curated looks felt personal, and the rider waited while I compared sizes. It felt like a boutique fitting room showed up at my apartment.",
  },
  {
    name: "Sana Ali",
    role: "Content creator",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    quote:
      "FitZo made a same-day event outfit possible. I tracked the order live, swapped one top instantly, and paid only for the final look.",
  },
];

function StarRow() {
  return (
    <div className="mt-3 flex items-center justify-center gap-1 text-[#f8c833]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fcfbf8] py-18">
      <div className="section-frame">
        <div className="mb-14 text-center">
          <h2 className="underlined-title font-display text-[36px] font-medium tracking-[-0.03em] text-black sm:text-[48px]">
            What Our Customers Say About Our Services
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid flex-1 gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="card-shadow overflow-hidden rounded-[12px] border border-[#ece7de] bg-[#f5f0e8] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_56px_rgba(24,24,28,0.12)]"
              >
                <div className="overflow-hidden rounded-[6px] bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[360px] w-full object-cover"
                  />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <h3 className="text-center text-[18px] font-extrabold text-[#111111]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-center text-[11px] uppercase tracking-[0.22em] text-[#756c62]">
                    {item.role}
                  </p>
                  <StarRow />
                  <p className="mt-4 text-[13px] leading-6 text-[#3f3c38]">
                    {item.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ddd7ce] text-[#7f776e] transition duration-300 hover:bg-white lg:flex"
            aria-label="More testimonials"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
