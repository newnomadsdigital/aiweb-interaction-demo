import { DataChip } from "@/components/ui/DataChip";
import { ProgressBar } from "@/components/ui/ProgressBar";

const WEEK_ITEMS = [
  { label: "9 давхрын хавтан цутгалт", date: "ЛХА 07.08", dot: "bg-ok" },
  { label: "Лифтний хонгилын хэв", date: "ПҮР 07.10", dot: "bg-ok" },
  { label: "Цахилгааны кабель татах", date: "БАА 07.12", dot: "bg-warn" },
];

const RISK_ITEMS = [
  "Цемент нийлүүлэлт — 2 хоногийн хоцролт, нөөц эх үүсвэр идэвхжсэн.",
  "Салхины хурд 14 м/с — кран №1 түр зогссон (авто-мэдэгдэл).",
];

function StatCard({
  label,
  value,
  hint,
  hintClassName = "text-ok",
  children,
}: {
  label: string;
  value: string;
  hint: string;
  hintClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-2.5 rounded-[14px] border border-border bg-card px-6 py-[22px] shadow-[0px_8px_24px_0px_rgba(34,37,43,0.06)]">
      <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
        {label}
      </p>
      <p className="text-[40px] leading-[1.06] font-semibold tracking-[-0.4px] whitespace-nowrap text-ink">
        {value}
      </p>
      <p
        className={`font-mono text-xs tracking-[0.48px] whitespace-nowrap ${hintClassName}`}
      >
        {hint}
      </p>
      {children}
    </div>
  );
}

export function Tracker() {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-16 pt-6 pb-14">
      <div className="flex w-full items-center gap-4">
        <h2 className="flex-1 text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] text-ink">
          Төслийн самбар — жишээ харагдац
        </h2>
        <DataChip label="DEMO ӨГӨГДӨЛ" />
      </div>

      <div className="flex w-full items-start gap-4">
        <StatCard label="НИЙТ ЯВЦ" value="62%" hint="+2.4% ЭНЭ САРД">
          <ProgressBar percent={62} />
        </StatCard>
        <StatCard
          label="ТӨСВИЙН ГҮЙЦЭТГЭЛ"
          value="₮4.9 / 8.4 тэрбум"
          hint="ТӨЛӨВЛӨГӨӨНД БАЙНА"
        />
        <StatCard
          label="ХУГАЦАА"
          value="214 / 340 хоног"
          hint="ҮЛДСЭН: 126"
          hintClassName="text-muted"
        />
      </div>

      <div className="flex w-full items-start gap-4">
        <div className="flex flex-1 flex-col items-start gap-3.5 rounded-[14px] border border-border bg-card px-6 py-[22px] shadow-[0px_8px_24px_0px_rgba(34,37,43,0.06)]">
          <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
            ЭНЭ ДОЛОО ХОНОГ
          </p>
          {WEEK_ITEMS.map((item) => (
            <div key={item.label} className="flex w-full items-center gap-2.5">
              <span className={`size-2 shrink-0 rounded-full ${item.dot}`} />
              <p className="flex-1 text-[15px] leading-[1.5] text-ink">
                {item.label}
              </p>
              <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col items-start gap-3.5 rounded-[14px] border border-border bg-card px-6 py-[22px] shadow-[0px_8px_24px_0px_rgba(34,37,43,0.06)]">
          <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-warn">
            АНХААРУУЛГА · 2
          </p>
          {RISK_ITEMS.map((text) => (
            <div key={text} className="flex items-start gap-2.5">
              <span className="h-9 w-[3px] shrink-0 rounded-[2px] bg-warn" />
              <p className="w-[430px] max-w-full text-[15px] leading-[1.5] text-secondary">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
