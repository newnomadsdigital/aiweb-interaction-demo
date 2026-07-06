export function ProgressBar({
  percent,
  className = "",
}: {
  percent: number;
  className?: string;
}) {
  return (
    <div
      className={`h-[8px] w-full overflow-hidden rounded-full bg-track ${className}`}
    >
      <div
        className="h-full rounded-full bg-brand"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
