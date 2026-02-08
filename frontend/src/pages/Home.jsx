import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import AboutSection from "../components/Home/AboutSection";
import ProgramsSection from "../components/Home/ProgramsSection";
import AchievementSection from "../components/Home/AchievementSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AchievementSection/>
      <AboutSection />
      <ProgramsSection />
    </>
  );
}