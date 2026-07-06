import { Button } from "@/components/ui/Button";
import { DataChip } from "@/components/ui/DataChip";

export function Hero() {
  return (
    <section className="flex w-full items-center gap-12 px-16 pt-12 pb-16">
      <div className="flex flex-1 flex-col items-start gap-[22px]">
        <DataChip label="ШИНЭ · AI ДОЛОО ХОНОГИЙН ТАЙЛАН" />
        <h1 className="w-[520px] max-w-full text-[54px] leading-[1.08] font-semibold tracking-[-0.54px] text-ink">
          Барилгын талбай — бодит цагийн удирдлагад
        </h1>
        <p className="w-[460px] max-w-full text-[17px] leading-[1.56] text-secondary">
          Кран, кемер, мэдрэгч, төсөв — бүгд нэг самбарт. Захиалагч та явцаа
          гар утаснаасаа хянана.
        </p>
        <div className="flex items-start gap-3.5 pt-1.5">
          <Button variant="coral">Демо үзэх</Button>
          <Button variant="ghost">Танилцуулга (PDF)</Button>
        </div>
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          12 КОМПАНИ · 340 ТӨСӨЛ · ISO 27001 СЕРТИФИКАТ
        </p>
      </div>

      <div className="relative h-[520px] w-[640px] shrink-0 overflow-hidden rounded-[20px] border border-border bg-card shadow-[0px_8px_12px_rgba(34,37,43,0.06)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG art, no optimization needed */}
        <img
          src="/images/hero-digital-twin.svg"
          alt="Барилгын дижитал ихэр загвар"
          className="absolute inset-0 size-full object-cover"
        />
        <DataChip label="КРАН №2 · 78%" className="absolute top-[95px] left-[59px]" />
        <DataChip
          label="ЦУТГАЛТ · LIVE"
          dotClassName="bg-ok"
          className="absolute top-[119px] left-[419px]"
        />
        <DataChip label="ДРОН · 4К СКАН" className="absolute top-[235px] left-[469px]" />
        <p className="absolute top-[481px] left-[31px] font-mono text-[10.5px] whitespace-nowrap text-muted">
          SPLINE · ДРОН-ОРБИТ КАМЕР · ТАГУУД БОДИТ ЦАГИЙН ӨГӨГДӨЛ
        </p>
      </div>
    </section>
  );
}
