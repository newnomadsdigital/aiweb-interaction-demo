export function Footer() {
  return (
    <footer className="flex w-full flex-col items-start bg-card">
      <div className="h-px w-full bg-border" />
      <div className="flex w-full items-center gap-7 px-16 py-7">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="size-5 shrink-0 rounded-[6px] bg-brand" />
          <p className="text-[17px] font-semibold whitespace-nowrap text-ink">
            NOMAD BUILD
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          © 2026
        </p>

        <div className="h-[10px] flex-1" />

        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          НУУЦЛАЛ
        </p>
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ
        </p>
        <div className="flex shrink-0 items-center gap-[7px]">
          <span className="size-[7px] shrink-0 rounded-full bg-ok" />
          <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-ok">
            СТАТУС: АЖИЛЛАЖ БАЙНА
          </p>
        </div>
      </div>
    </footer>
  );
}
