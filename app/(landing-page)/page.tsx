import Navbar from "@/components/Navbar/Navbar";
import Hero from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
   </div>
  );
}
