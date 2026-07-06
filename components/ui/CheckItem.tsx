export function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-brand-tint">
        <span className="font-mono text-xs text-brand">✓</span>
      </span>
      <p className="text-[15px] text-ink">{label}</p>
    </div>
  );
}
