const BADGES = ["ISO 45001", "MNS 5002", "ХАБЭА · А ЗЭРЭГЛЭЛ"];

export function Safety() {
  return (
    <section className="flex w-full items-center gap-10 bg-ink px-16 py-11">
      <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
        <p className="text-[64px] leading-none font-semibold tracking-[-0.96px] text-inverse">
          247
        </p>
        <div className="font-mono text-xs leading-[1.3] tracking-[0.48px] text-ok">
          <p>ӨДӨР ОСОЛГҮЙ</p>
          <p>АЖИЛЛАЖ БАЙНА</p>
        </div>
      </div>

      <div className="h-[10px] flex-1" />

      <div className="flex shrink-0 items-start gap-3">
        {BADGES.map((badge) => (
          <div
            key={badge}
            className="rounded-[8px] border border-inverse px-3.5 py-2"
          >
            <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-inverse">
              {badge}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
