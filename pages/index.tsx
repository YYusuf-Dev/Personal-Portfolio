import { GetStaticProps } from "next";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";

// const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgba(8,14,44)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My portfolio</title>
      </Head>

      {/* header  */}
      <Header socials={socials} />

      {/* hero  */}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about */}

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* experiences */}
      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} />
      </section>

      {/* skills */}

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="hidden sm:block sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-start pl-5">
            <img
              className="h-12 w-12 rounded-full filter grayscale hover:grayscale-0
             cursor-pointer border border-gray-500"
              src="https://i.postimg.cc/26pbJKr7/Ready-Player-Me-Avatar-14.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // -when a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
