"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "Систем ямар төхөөрөмж дээр ажиллах вэ?",
    answer:
      "Вэб, iOS, Android — бүгд дээр. Талбайн мэдрэгчүүд LTE/LoRa сүлжээгээр холбогдоно. Интернэтгүй үед офлайн горимд бичиж, дараа нь синк хийнэ.",
  },
  {
    question: "Өгөгдлийн аюулгүй байдал хэрхэн хангагдах вэ?",
    answer:
      "Бүх дата шифрлэгдэж, ISO 27001 стандартын дагуу хадгалагдана. Хандалт зөвхөн эрх бүхий хэрэглэгчдэд нээлттэй.",
  },
  {
    question: "Хуучин төслөө системд оруулж болох уу?",
    answer:
      "Тийм. Хуучин төслийн файл, зураг төслийг импортлож, шинэ дашбоард дээр үргэлжлүүлэн ашиглах боломжтой.",
  },
  {
    question: "Үнэ ямар зарчмаар тооцогдох вэ?",
    answer:
      "Идэвхтэй төслийн тоо болон хэрэглэгчийн эрхийн түвшингээс хамааран сарын багц үнэлгээгээр тооцно.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-start gap-3.5 px-16 pt-4 pb-[72px]">
      <h2 className="text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] whitespace-nowrap text-ink">
        Түгээмэл асуулт
      </h2>

      {QUESTIONS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="flex w-full flex-col items-start gap-3 rounded-[12px] border border-border bg-card px-[26px] py-5"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-4 text-left font-semibold"
            >
              <p className="flex-1 text-[19px] leading-[1.34] text-ink">
                {item.question}
              </p>
              <p
                className={`shrink-0 text-[34px] leading-[1.16] tracking-[-0.17px] ${
                  isOpen ? "text-brand" : "text-muted"
                }`}
              >
                {isOpen ? "−" : "+"}
              </p>
            </button>
            {isOpen && (
              <>
                <div className="h-px w-full bg-border" />
                <p className="w-[1100px] max-w-full text-[17px] leading-[1.56] text-secondary">
                  {item.answer}
                </p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}
