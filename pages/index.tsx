import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgba(8,14,44)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My portfolio</title>
      </Head>

      {/* header  */}
      <Header />

      {/* hero  */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experiences */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* skills */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
