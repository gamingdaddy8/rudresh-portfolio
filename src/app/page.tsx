import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialBar from "@/components/SocialBar";
import EmailBar from "@/components/EmailBar";
import Achievements from "@/components/Achievements";
import Exploring from "@/components/Exploring";
import Loader from "@/components/Loader";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] text-[#ccd6f6] overflow-x-hidden">

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#64ffda]/5 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full"></div>

  <div className="relative z-10">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <SocialBar />
    <EmailBar />
    <Achievements />
    <Exploring />
    <Loader />
    <AIAssistant />
    <Contact />
  </div>
</main>
  );
}