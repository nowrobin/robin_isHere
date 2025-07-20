import Header from '@/components/layers/header';
import Hero from '@/components/layers/hero';
import Projects from '@/components/layers/projects';
import Skills from '@/components/layers/skills';
import About from '@/components/layers/about';
import Experience from '@/components/layers/experience';
import Footer from '@/components/layers/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
