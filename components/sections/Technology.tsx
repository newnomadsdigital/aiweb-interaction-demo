"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckItem } from "@/components/ui/CheckItem";

const TABS = [
  {
    label: "BIM загвар",
    title: "BIM — барилгын мэдээллийн загвар",
    description:
      "Барилгын бүх эд ангийг 3D загварт нэгтгэж, зөрчлийг урьдчилан илрүүлнэ. Гүйцэтгэл загвартай 1:1 тулгагдана.",
    checks: [
      "Зөрчил илрүүлэлт — автомат",
      "4D цагийн симуляци",
      "Тоо хэмжээний авто-гаргалт",
    ],
  },
  {
    label: "Дрон скан",
    title: "Дрон скан — 4К агаарын хяналт",
    description:
      "Долоо хоног бүр талбайг дроноор скан хийж, явцыг өмнөх долоо хоногтой автоматаар харьцуулна.",
    checks: [
      "Орбит камерын автомат нислэг",
      "Явцын хэмжилт ± 2 см нарийвчлалтай",
      "Он-цагийн архив хайх боломжтой",
    ],
  },
  {
    label: "IoT мэдрэгч",
    title: "IoT мэдрэгч — бодит цагийн өгөгдөл",
    description:
      "Кран, ор, температур, чийгшлийн мэдрэгчид секунд тутам дата дамжуулж, аюулгүй ажиллагааг хянана.",
    checks: [
      "Салхи, чичиргээний автомат сэрэмжлүүлэг",
      "Кран ачааллын бодит цагийн хяналт",
      "Офлайн үед орон нутгийн санах ойд хадгална",
    ],
  },
  {
    label: "AI тайлан",
    title: "AI тайлан — долоо хоног бүр автомат",
    description:
      "Бүх дата эх сурвалжийг нэгтгэж, менежментэд зориулсан тайланг AI автоматаар үүсгэнэ.",
    checks: [
      "Эрсдэлийг эрт илрүүлэх дүгнэлт",
      "Төсөв ба хуваарийн хазайлтын дүн шинжилгээ",
      "PDF/Excel экспортын дэмжлэгтэй",
    ],
  },
];

export function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TABS[activeIndex];

  return (
    <section className="flex w-full flex-col items-start gap-5 px-16 pt-6 pb-16">
      <h2 className="text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] whitespace-nowrap text-ink">
        Технологийн давхарга
      </h2>

      <div className="flex items-start gap-2 rounded-[10px] bg-track p-1.5">
        {TABS.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`rounded-[8px] px-[18px] py-[9px] text-sm font-medium whitespace-nowrap ${
              index === activeIndex
                ? "border border-border bg-card text-ink"
                : "text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex w-full items-center gap-10 rounded-[14px] border border-border bg-card px-10 py-9 shadow-[0px_8px_24px_0px_rgba(34,37,43,0.06)]">
        <div className="flex flex-1 flex-col items-start gap-3.5">
          <h3 className="text-[19px] leading-[1.34] font-semibold whitespace-nowrap text-ink">
            {active.title}
          </h3>
          <p className="w-[430px] max-w-full text-[17px] leading-[1.56] text-secondary">
            {active.description}
          </p>
          {active.checks.map((check) => (
            <CheckItem key={check} label={check} />
          ))}
        </div>
        <div className="relative h-[250px] w-[400px] shrink-0 overflow-hidden rounded-[12px]">
          <Image
            src="/images/tech-viewport.jpg"
            alt={active.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
