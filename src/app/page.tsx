import HeroPage from "@/components/hero";
import Players from "@/components/player";

export default function Home() {
  return (
    <main className="w-[900px] mx-auto mt-14">
      <HeroPage />
      <Players />
    </main>
  );
}
