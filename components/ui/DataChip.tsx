export function DataChip({
  label,
  className = "",
  dotClassName = "bg-brand",
}: {
  label: string;
  className?: string;
  dotClassName?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-[7px] rounded-[6px] border border-border bg-card px-[10px] py-[5px] shadow-[0px_8px_12px_rgba(34,37,43,0.06)] ${className}`}
    >
      <span className={`size-[6px] shrink-0 rounded-full ${dotClassName}`} />
      <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-ink">
        {label}
      </p>
    </div>
  );
}
