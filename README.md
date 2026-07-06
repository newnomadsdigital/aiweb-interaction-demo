# NOMAD BUILD — AI веб харилцан үйлчлэлийн демо

"NOMAD BUILD" барилгын менежментийн лэндинг хуудасны статик Next.js
хэрэгжилт бөгөөд [Figma](https://www.figma.com/design/VITeKdA9ofn2MXsF0sLghy)
загвар дээр үндэслэн, вэб хуудсанд хөдөлгөөн (motion) нэмэхийг AI-аар
prompt хийж сургах хичээлд зориулав.

## Технологи

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- `framer-motion` суулгагдсан ч **одоогоор хаана ч ашиглагдаагүй** — энэ нь
  зориудын зүйл.

## Эхлэх нь

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) хаягаар нээнэ үү.

## Хичээлийн зорилго

[components/sections/](components/sections/) доторх бүх хэсэг статик,
хөдөлгөөнгүй байдлаар зурагдана. Даалгавар бол суулгасан `framer-motion`
сан ашиглан хуудас ачаалах шилжилт, гүйлгэх үеийн гарч ирэлт, hover
төлөв, tab/FAQ нээгдэх-хаагдах шилжилтүүд зэрэг хөдөлгөөнийг AI
кодлогч туслахаар prompt хийлгэн нэмүүлэх явдал юм.

Туршиж болох эхлэлийн prompt-ууд:

- "Hero хэсгийн гарчиг, товчнуудыг ачаалах үед fade/slide хийж гарч ирэх
  болго."
- "Дрон агшнуудын галерейн зургууд гүйлгэх үед дараалан (stagger) гарч
  ирэх анимаци нэм."
- "FAQ аккордионы нээх-хаах шилжилтийг `AnimatePresence`-ээр анимацит
  болго."
- "Технологийн давхаргын tab солиход зөөлөн шилжилт нэм."

### Жишээ: Hero-гийн 3D Motion Spec-ийг Framer Motion-оор хийх

Figma загвар дээрх "3D MOTION SPEC — 4B · Digital Twin" тэмдэглэл нь
Spline ашигласан бодит 3D камер, орбит нислэг тодорхойлдог. Манай Hero
зураг бол хавтгай SVG дүрслэл тул Framer Motion үнэн 3D камер хөдөлгөж
чадахгүй — гэхдээ spec-ийн санааг 2D transform-оор ойролцоогоор дуурайж
болно. Доорх prompt-ыг ашиглан туршиж үзээрэй:

```
components/sections/Hero.tsx доторх "3D Stage · Digital Twin" зурагт
Framer Motion ашиглан хөдөлгөөн нэм. Энэ бол хавтгай SVG дүрслэл тул
бодит 3D/Spline биш — spec-ийн камер/орбит санааг доорх 2D transform-
уудаар дуурай:

1. Idle: зургийн контейнер зогсонги үедээ "амьд" мэт санагдахаар — маш
   зөөлөн, тасралтгүй хөвөх хөдөлгөөн (translateY ±6px, ease-in-out,
   ойролцоогоор 4 секундийн давталт, repeat: Infinity,
   repeatType: "mirror").

2. Орбит: барилгын дээгүүр тойрог замаар 12 секундэд нэг тойрог хийж
   эргэх жижиг цэг/тэмдэг нэм (linear easing, repeat: Infinity) —
   энэ нь spec-ийн дрон орбитын орлуулагч.

3. Hover: Hero доторх DataChip бүр ("КРАН №2 · 78%", "ЦУТГАЛТ · LIVE",
   "ДРОН · 4К СКАН") hover хийхэд whileHover ашиглан бага зэрэг томорч
   (~1.08), сүүдэр нь гүнзгийрэх ёстой — статик шошго биш, бодит
   цагийн үзүүлэлт мэт харагдахын тулд.

4. Скролл: Hero хэсгийг зорилтот болгож useScroll + useTransform
   ашиглан, хэрэглэгч скролл хийхэд зургийн контейнерийн хэмжээ
   (1 → 0.94) багасаж, бага зэрэг эргэх (0 → -2deg) хөдөлгөөн нэм —
   камер холдож, платформ эргэж буй мэт дуурайлт. DataChip шошгууд
   зурагтай хамт хөдлөх ёстой.

5. useReducedMotion() ашиглан хэрэглэгч хөдөлгөөн багасгах тохиргоотой
   бол idle хөвөлт, орбит давталт, скролл transform-ыг унтраа —
   статик хувилбарыг харуул.

Одоо байгаа layout, өнгө, текстийг өөрчлөхгүй — зөвхөн анимаци нэм.
```

## Трэнд хөдөлгөөнүүд — аль section-д тохирох вэ

Одоо түгээмэл хэрэглэгддэг 7 motion trend-ийг манай сайтын аль хэсэгт
хэрэглэвэл хамгийн зохимжтой, гоё харагдахыг доор жагсаав. Тус бүрийн
доорх prompt-ыг шууд хуулж ашиглаж болно.

### 1. Magnetic Button → Header-ийн "Демо үзэх" товч

Байнга харагдах, дан ганц CTA товч дээр magnetic эффект хамгийн
илэрхий санагдана.

```
components/sections/Header.tsx доторх "Демо үзэх" (variant="coral")
товчинд magnetic button эффект нэм: хулганы заагч товчны эргэн тойрны
тодорхой радиус (~60px) дотор орж ирэхэд товч заагч руу бага зэрэг
(хамгийн ихдээ ~10-12px) татагдаж шилжинэ, заагч гараад явахад
useSpring ашиглан зөөлөн бөмбөлөгддөг байдлаар анхны байрандаа буцаж
ор. useMotionValue-ээр x/y координатыг хөтөл, mousemove event дээр
товчны төвөөс зайг тооцоолж transform-д онооно. useReducedMotion үед
энэ эффектийг унтраа.
```

### 2. Spotlight Hover Effect → Tracker-ийн статистик карт 3

`components/sections/Tracker.tsx`-ийн `StatCard`-ууд (НИЙТ ЯВЦ /
ТӨСВИЙН ГҮЙЦЭТГЭЛ / ХУГАЦАА) цагаан хатуу карт тул spotlight гэрэл
хамгийн тод ялгарна.

```
components/sections/Tracker.tsx доторх StatCard компонентод spotlight
hover эффект нэм: хулганы байрлалыг mousemove дээр useMotionValue-ээр
(mouseX, mouseY) хөтөлж, картын background дээр тухайн координатыг
төв болгосон radial-gradient (жишээ нь
`rgba(255,90,72,0.15)` өнгөтэй, ~250px радиустай) motion style-аар
давхарла. Хулгана картнаас гарахад spotlight opacity 0 болж алга
болно. Гурван картны алийг ч зэрэг hover хийхэд бие даан ажиллах
ёстой (тус бүрдээ өөрийн mouse position state). useReducedMotion
идэвхтэй үед spotlight-ыг бүрэн унтраа.
```

### 3. Morphing Tabs & Shared Layout → Technology-ийн tab-ууд

Энэ бол хамгийн шууд тохирох trend — `components/sections/Technology.tsx`
доторх 4 tab (BIM загвар / Дрон скан / IoT мэдрэгч / AI тайлан) яг
ийм эффектэд зориулагдсан UI pattern.

```
components/sections/Technology.tsx доторх tab жагсаалтад Framer
Motion-ы layoutId ашиглан morphing/shared-layout эффект нэм: идэвхтэй
tab-ыг тэмдэглэдэг цагаан background (`bg-card border border-border`)-ыг
тусад нь <motion.div layoutId="active-tab-pill"> болгож гарга, ингэснээр
хэрэглэгч өөр tab дээр дарахад pill background нь тухайн tab руу
зөөлөн шилжиж (морф) шинэ байрлал руу автоматаар анимацилагдана
(layout transition, spring: stiffness ~300, damping ~30). Мөн доод
талын panel контентыг (`active.title`, `active.description`,
`active.checks`) AnimatePresence mode="wait"-аар tab солигдох үед
fade+slight-slide хийж cross-fade хийлгэ. useReducedMotion үед layout
шилжилтийг instant болго.
```

### 4. 3D Tilt Cards → Дрон агшнуудын галерейн зургууд

`components/sections/DroneGallery.tsx`-ийн зургууд том, тодорхой
хэмжээтэй тул tilt эффект (гүнзгийрэл, гэрэлтэлт) хамгийн үр дүнтэй
харагдана.

```
components/sections/DroneGallery.tsx доторх зураг бүрийн frame-д 3D
tilt card эффект нэм: parent-д perspective (~800px) тохируулж, зураг
дээр хулгана хөдлөхөд хулганы байрлалыг картын төвөөс хазайлтаар
тооцож rotateX/rotateY (хамгийн ихдээ ±8deg) болгон
useMotionValue + useSpring-ээр хөтлөх. Мөн бага зэрэг scale (1 →
1.03) болон зурган дээгүүр нимгэн gradient glare (гэрэлтэлт) хулганы
байрлалын дагуу шилждэг байх. Хулгана гараад явахад бүх утга 0 руу
зөөлөн буцна (spring). Мобайл/touch төхөөрөмж дээр идэвхгүй байлга
(mousemove л ажиллуулах). useReducedMotion үед бүрэн унтраа.
```

### 5. Seamless Button Loading States → Hero-ийн үндсэн CTA товч

`components/sections/Hero.tsx`-ийн "Демо үзэх" товч бол хэрэглэгчийн
хамгийн их дардаг цэг тул loading/success шилжилт хамгийн утга учиртай
энд харагдана.

```
components/sections/Hero.tsx доторх үндсэн "Демо үзэх" (variant="coral")
товчинд seamless loading state нэм: товчийг дарахад idle → loading →
success гэсэн 3 төлөвийг AnimatePresence mode="wait"-аар солиулж
харуул. Loading үед текстийг спиннер icon-оор сольж, товчны өргөнийг
(width) motion-оор зөөлөн өөрчил (текст урттай тааруулж). ~1.2 секундийн
дараа success төлөвт шилжиж товч дотор check icon + "Бэлэн боллоо"
гэсэн текст fade+scale-ин гарч ирнэ, дараа нь ~1.5 секундийн дараа
идэвхтэй idle төлөв рүү буцаадаг байх. Товчийг loading үед disabled
болго. useReducedMotion үед энгийн instant солилт хийж animation-гүй
харуул.
```

### 6. Staggered Text Scramble / Reveal → Hero-ийн гарчиг

Site-ийн IBM Plex Mono дата-chip readout-уудтай төстэй "терминал"
өнгө аясанд Hero-ийн гол гарчиг staggered scramble reveal-д хамгийн
тохиромжтой.

```
components/sections/Hero.tsx доторх H1 гарчиг ("Барилгын талбай —
бодит цагийн удирдлагад")-д staggered text reveal нэм: үгсийг (эсвэл
үсэг бүрийг) тусад нь <motion.span>-ээр render хийж, хуудас
ачаалагдах үед үг/үсэг бүр 20-30мс зөрүүтэй (stagger) доороос дээш
(y: 12px → 0) fade-in хийж гарч ирдэг болго. Нэмэлтээр эхний ~0.4
секундэд тухайн үг/үсгийг санамсаргүй тэмдэгтүүдээр (жишээ нь
IBM Plex Mono фонтоор) "scramble" хийж, аажмаар зөв тэмдэгт рүү
тогтоох боломжтой бол нэм (useEffect дотор setInterval-аар
тэмдэгтүүдийг санамсаргүй сольж, аажмаар зөв индекс рүү шилжүүлэх).
Доод талын paragraph, товчнууд гарчгийн дараа бага зөрүүтэй fade/slide
хийж дагуулан гарч ир. useReducedMotion идэвхтэй үед scramble-гүйгээр
энгийн instant fade хийж харуул.
```

### 7. Progressive / Smooth Scroll Progress → Бүх хуудасны дээд тал

Энэ эффект аль нэг тодорхой section-д биш, бүхэл хуудасны скроллд
хамаарах тул Header-ийн дээгүүр (эсвэл бүх layout-ийн хамгийн дээд
түвшинд) global progress bar болгож нэмэх нь хамгийн зөв.

```
app/layout.tsx (эсвэл шинэ components/ui/ScrollProgress.tsx компонент
үүсгэж Header-ийн өмнө импортлож) дотор бүхэл хуудасны scroll progress
bar нэм: fixed, top-0, left-0, өндөр нь 3px, өргөн 100vw, z-index
хамгийн өндөр давхаргад байх нимгэн зурвас гарга. Framer Motion-ы
useScroll()-оос scrollYProgress авч, түүнийг тухайн зурвасны
transform: scaleX-д шууд онооно (transform-origin: left), брэндийн
өнгө bg-brand (#ff5a48) ашигла. Скролл хийхэд зурвас 0-ээс 1 хүртэл
зөөлөн (spring эсвэл stiffness/damping тохируулсан) томордог байх.
useReducedMotion идэвхтэй үед spring-гүй шууд scrollYProgress-ыг
ашигла (animation биш, зөвхөн утга дагасан).
```

