import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import CoreCourse from "./components/CoreCourse";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cities />
      <CoreCourse />
    </div>
  );
}
