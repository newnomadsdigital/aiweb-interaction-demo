import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Самбар", active: true },
  { label: "Технологи", active: false },
  { label: "Төслүүд", active: false },
  { label: "Тухай", active: false },
];

export function Header() {
  return (
    <header className="flex w-full items-center gap-6 overflow-hidden bg-card px-8 py-3.5">
      <div className="flex shrink-0 items-center gap-2.5">
        <div className="size-[26px] shrink-0 rounded-[8px] bg-brand" />
        <p className="text-[17px] font-semibold whitespace-nowrap text-ink">
          NOMAD BUILD
        </p>
        <div className="rounded-[4px] bg-brand-tint px-1.5 py-0.5">
          <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-brand">
            OS v3.2
          </p>
        </div>
      </div>

      <div className="h-[10px] flex-1" />

      <nav className="flex shrink-0 items-center gap-5">
        {NAV_LINKS.map((link) => (
          <div key={link.label} className="flex flex-col items-start gap-[5px]">
            <p
              className={`text-sm font-medium whitespace-nowrap ${
                link.active ? "text-ink" : "text-secondary"
              }`}
            >
              {link.label}
            </p>
            <div
              className={`h-[2px] w-full ${link.active ? "bg-brand" : ""}`}
            />
          </div>
        ))}
      </nav>

      <div className="h-[10px] flex-1" />

      <Button variant="ghost" className="shrink-0">
        Портал нэвтрэх
      </Button>
      <Button variant="coral" className="shrink-0">
        Демо үзэх
      </Button>
    </header>
  );
}
