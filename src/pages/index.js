import Image from "next/image";
import { Inter } from "next/font/google";
import DrumMachine from "@/components/DrumMachine";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DrumMachine />
    </main>
  );
}
