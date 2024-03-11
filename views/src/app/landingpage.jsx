import Footer from "../components/Fragments/Footer/Footer";
import AlurPPDB from "../components/Fragments/LandingPage/AlurPPDB";
import HeroSection from "../components/Fragments/LandingPage/HeroSection";
import InfoPPDB from "../components/Fragments/LandingPage/InfoPPDB";
import SyaratPPDB from "../components/Fragments/LandingPage/SyaratPPDB";

export default function LandingPage() {
  return (
    <section>
      <HeroSection />
      <AlurPPDB />
      <InfoPPDB />
      <SyaratPPDB />
      <Footer />
    </section>
  );
}
