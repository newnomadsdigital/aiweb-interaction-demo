import Image from "next/image";

const COLUMNS = [
  [
    { src: "/images/drone-1.jpg", height: 300, date: "06.22 · 08:00" },
    { src: "/images/drone-2.jpg", height: 180, date: "06.23 · 08:00" },
  ],
  [
    { src: "/images/drone-3.jpg", height: 220, date: "06.24 · 08:00" },
    { src: "/images/drone-4.jpg", height: 260, date: "06.25 · 08:00" },
  ],
  [
    { src: "/images/drone-5.jpg", height: 180, date: "06.26 · 08:00" },
    { src: "/images/drone-6.jpg", height: 300, date: "06.27 · 08:00" },
  ],
];

export function DroneGallery() {
  return (
    <section className="flex w-full flex-col items-start gap-6 px-16 pt-2 pb-16">
      <div className="flex w-full items-center gap-4">
        <h2 className="flex-1 text-[34px] leading-[1.16] font-semibold tracking-[-0.17px] text-ink">
          Дрон агшнууд — явцын архив
        </h2>
        <p className="font-mono text-xs tracking-[0.48px] whitespace-nowrap text-brand">
          БҮГД →
        </p>
      </div>

      <div className="flex w-full items-start gap-4">
        {COLUMNS.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-1 flex-col items-start gap-4"
          >
            {column.map((photo) => (
              <div
                key={photo.src}
                className="relative w-full overflow-hidden rounded-[12px]"
                style={{ height: photo.height }}
              >
                <Image
                  src={photo.src}
                  alt={`Дрон агшин ${photo.date}`}
                  fill
                  className="object-cover"
                />
                <p className="absolute top-3 left-3.5 font-mono text-xs tracking-[0.48px] whitespace-nowrap text-white [text-shadow:0px_1px_4px_rgba(0,0,0,0.55)]">
                  {photo.date}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
