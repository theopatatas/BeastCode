import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#030712_0%,#07142b_42%,#0b1d45_100%)] text-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <Hero />
      </div>
    </main>
  );
}
