
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";
import GradientCard from "@/Components/HomePage/GradientCard";
import ProjectileCarousel from "@/Components/HomePage/ProjectileCarousel";
import { logos } from "@/data/CarouselData";


export default function Home() {
  return (
    <>
      <div>
        <HomeHeroSection />
        <FormationandMeeting />
        {/* <ProjectileCarousel logos={logos} speed={0.8} /> */}
        <div className="flex items-center justify-center py-20 bg-black">
          <GradientCard />
        </div>
      </div>
    </>
  );
}
