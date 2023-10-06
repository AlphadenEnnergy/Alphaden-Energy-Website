import Image from "next/image";
import Subnav from "@/components/subnav";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between px-24">
    <main className="flex min-h-screen flex-col justify-between ">
      <nav>
        <Subnav />
        <Navbar />
      </nav>
      

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hekko
      </div>
    </main>
  );
}
