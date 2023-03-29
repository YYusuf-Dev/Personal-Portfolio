import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
      </Head>

      {/* header  */}
      <Header />

      {/* hero  */}

      {/* about */}

      {/* experiences */}

      {/* skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}
