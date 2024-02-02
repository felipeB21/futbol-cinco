import HeroPage from "@/components/hero";
import Teams from "@/components/teams";

export default function Home() {
  return (
    <main className="w-[900px] mx-auto mt-14">
      <HeroPage />
      <Teams />
    </main>
  );
}
