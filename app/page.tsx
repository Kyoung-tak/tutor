import { AccountsSection } from "@/components/AccountsSection";
import { CalendarSection } from "@/components/CalendarSection";
import { ContactSection } from "@/components/ContactSection";
import { CountdownSection } from "@/components/CountdownSection";
import { CoupleIntroSection } from "@/components/CoupleIntroSection";
import { DirectionsSection } from "@/components/DirectionsSection";
import { EventInfoSection } from "@/components/EventInfoSection";
import { FooterSection } from "@/components/FooterSection";
import { GallerySection } from "@/components/GallerySection";
import { GreetingSection } from "@/components/GreetingSection";
import { HeroSection } from "@/components/HeroSection";
import { MusicToggle } from "@/components/MusicToggle";
import { QuickNav } from "@/components/QuickNav";
import { weddingData } from "@/data/wedding";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <QuickNav links={weddingData.quickLinks} />
      <MusicToggle />
      <HeroSection />
      <GreetingSection />
      <CoupleIntroSection />
      <EventInfoSection />
      <CountdownSection />
      <CalendarSection />
      <GallerySection />
      <DirectionsSection />
      <AccountsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
