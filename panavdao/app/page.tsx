import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import StudyProgram from "./components/StudyProgram";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cities />
      <StudyProgram />
    </div>
  );
}
