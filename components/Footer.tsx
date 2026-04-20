const footerColumns = [
  {
    title: "Company Info",
    items: ["About us", "Store accessibility", "Policies", "Real-time support"],
  },
  {
    title: "Help & Support",
    items: ["Shipping info", "Returns", "Track order", "Size guide"],
  },
  {
    title: "Customer Care",
    items: ["Contact us", "Virtual fit", "Store pickup", "Styling"],
  },
];

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d1d1d] text-[12px] font-bold text-[#1d1d1d] transition duration-300 hover:bg-[#1d1d1d] hover:text-white">
      {label}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e5ddd1] bg-[#f6f2ec] pt-12 text-[#242424]">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr_1fr]">
          <div>
            <a
              href="#"
              className="font-display text-[28px] font-semibold tracking-[0.14em]"
            >
              FITZO
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#70685f]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-3 text-[13px] text-[#3d3a36]">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition duration-300 hover:text-black">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#70685f]">
                Socials
              </p>
              <div className="mt-4 flex items-center gap-3">
                <SocialIcon label="f" />
                <SocialIcon label="p" />
                <SocialIcon label="ig" />
                <SocialIcon label="x" />
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#70685f]">
                Newsletter
              </p>
              <p className="mt-3 text-[13px] leading-6 text-[#4e4a45]">
                Join FitZo updates for faster drops, city launches, and weekly
                styling picks.
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-11 min-w-0 flex-1 border border-[#d7cfc3] bg-white px-4 text-[13px] outline-none transition duration-300 placeholder:text-[#9b958e] focus:border-[#1d1d1d]"
                />
                <button
                  type="submit"
                  className="h-11 border border-[#1d1d1d] bg-[#1d1d1d] px-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-white transition duration-300 hover:bg-transparent hover:text-[#1d1d1d]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2d9cd] py-7 text-[12px] text-[#5d564f]">
          <p>Copyright 2026 All rights reserved</p>
          <div className="flex flex-wrap gap-2">
            {[
              "mc",
              "visa",
              "amex",
              "gpay",
              "paypal",
              "upi",
              "apple",
              "paytm",
            ].map((item) => (
              <span
                key={item}
                className="payment-swatch flex h-7 min-w-10 items-center justify-center px-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#333]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
