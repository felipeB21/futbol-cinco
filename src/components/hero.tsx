import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export default function HeroPage() {
  return (
    <section className="flex justify-between">
      <div className="w-[480px]">
        <h1 className="text-4xl font-bold uppercase">
          Júntate con un par de amigos y desafía a otros equipos para jugar un{" "}
          <span className="bg-gradient-to-r from-green-600 to-green-400 inline-block text-transparent bg-clip-text">
            fútbol5
          </span>
          .
        </h1>
      </div>
      <div className="border border-neutral-800"></div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl max-w-40 font-bold uppercase">
              Arma el equipo
            </h2>
            <Link href="/create-team">
              <Button>Crear Equipo</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl max-w-40 font-bold uppercase">
              Unite a un equipo
            </h2>
            <Link href="/join-team">
              <Button>Unirte a Equipo</Button>
            </Link>
          </div>
        </div>
        <p className="text-sm text-neutral-300">
          Domina la tabla y gana recompensas con tu equipo!
        </p>
      </div>
    </section>
  );
}
