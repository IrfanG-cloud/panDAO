import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import CoreCourse from "./components/CoreCourse";
import ProgramParticipant from "./components/ProgramParticipant";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cities />
      <CoreCourse />
      <ProgramParticipant />
   
    </div>
  );
}
