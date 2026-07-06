import { Header } from "@/components/sections/Header";
import { StatusStrip } from "@/components/sections/StatusStrip";
import { Hero } from "@/components/sections/Hero";
import { Tracker } from "@/components/sections/Tracker";
import { Technology } from "@/components/sections/Technology";
import { DroneGallery } from "@/components/sections/DroneGallery";
import { Safety } from "@/components/sections/Safety";
import { AppPreview } from "@/components/sections/AppPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start bg-page">
      <Header />
      <StatusStrip />
      <Hero />
      <Tracker />
      <Technology />
      <DroneGallery />
      <Safety />
      <AppPreview />
      <FAQ />
      <Footer />
    </div>
  );
}
