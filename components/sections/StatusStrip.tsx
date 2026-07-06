export function StatusStrip() {
  return (
    <>
      <div className="h-px w-full bg-border" />
      <div className="flex w-full items-center gap-2 overflow-hidden py-2.5 pl-8">
        <span className="size-[7px] shrink-0 rounded-full bg-ok" />
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          СИСТЕМ АЖИЛЛАЖ БАЙНА · 12 ТӨСӨЛ LIVE · СҮҮЛИЙН СИНК 09:42
        </p>
      </div>
    </>
  );
}
