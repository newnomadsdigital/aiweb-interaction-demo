import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { ProgressBar } from "@/components/ui/ProgressBar";

const FEATURES = [
  "Өдөр бүрийн явцын фото тайлан",
  "Төлбөрийн хуваарь, нэхэмжлэх",
  "Гэрээ, зөвшөөрлийн архив",
  "Инженертэй шууд холбогдох чат",
];

export function AppPreview() {
  return (
    <section className="flex w-full items-center gap-16 p-16">
      <div className="flex shrink-0 flex-col items-start rounded-[36px] bg-ink p-2.5">
        <div className="flex w-[260px] flex-col items-start gap-3 rounded-[28px] bg-page px-4 py-[18px]">
          <div className="flex w-full items-start gap-2">
            <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-ink">
              09:41
            </p>
            <div className="h-[10px] flex-1" />
            <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
              LTE ▮▮▮
            </p>
          </div>

          <p className="text-[19px] leading-[1.34] font-semibold whitespace-nowrap text-ink">
            Сайн уу, Болд 👋
          </p>

          <div className="flex w-full flex-col items-start gap-2 rounded-[12px] border border-border bg-card px-3.5 py-3">
            <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
              ТАНЫ БАЙР · ЯВЦ
            </p>
            <p className="text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] whitespace-nowrap text-brand">
              62%
            </p>
            <ProgressBar percent={62} />
          </div>

          <div className="flex w-full flex-col items-start gap-1.5 rounded-[12px] border border-border bg-card px-3.5 py-3">
            <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
              ӨНӨӨДРИЙН ФОТО · 6
            </p>
            <div className="flex items-start gap-1.5">
              {["/images/drone-1.jpg", "/images/drone-2.jpg", "/images/tech-viewport.jpg"].map(
                (src) => (
                  <div
                    key={src}
                    className="relative h-12 w-[66px] shrink-0 overflow-hidden rounded-[6px]"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex w-full items-center gap-2 rounded-[12px] bg-brand-tint px-3.5 py-3 text-brand">
            <p className="flex-1 text-[15px] leading-[1.5]">Инженертэй чатлах</p>
            <p className="text-[19px] leading-[1.34] font-semibold">→</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start gap-4">
        <h2 className="w-[460px] max-w-full text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] text-ink">
          Захиалагчийн апп — талбай таны гарт
        </h2>
        <p className="w-[440px] max-w-full text-[17px] leading-[1.56] text-secondary">
          Явцын фото, төлбөрийн хуваарь, баримт бичиг, инженертэй шууд чат —
          бүгд нэг аппад.
        </p>
        {FEATURES.map((feature) => (
          <CheckItem key={feature} label={feature} />
        ))}
        <div className="flex items-start gap-3 pt-2">
          <Button variant="ink">App Store</Button>
          <Button variant="ghost">Google Play</Button>
        </div>
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-muted">
          QR КОД — ДЕМО ХАНДАЛТ 7 ХОНОГ ҮНЭГҮЙ
        </p>
      </div>
    </section>
  );
}
