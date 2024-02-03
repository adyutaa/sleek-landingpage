import Navbar from "@/components/Navbar/Navbar";
import Hero from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondSection />
      <ThirdSection />
   </div>
  );
}
