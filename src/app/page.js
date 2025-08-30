import Header from "@/components/header"
import About from "./about/About"
import Hero from "./hero/Hero"
import Projects from "./projects/Projects"
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Finalcta from "./finalcta/Finalcta";
export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services/>
      <Testimonials/>
      <Finalcta/>
    </div>
  );
}
