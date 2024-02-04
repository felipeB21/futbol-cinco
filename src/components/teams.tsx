import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TeamCard from "./team-card";

export default async function Teams() {
  const supabase = createServerComponentClient({ cookies });
  const { data: teams } = await supabase.from("teams").select("*, users(*)");
  return (
    <div className="mt-10 w-[900px] mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase">Equipos</h2>
        <form>
          <input
            className="py-1 px-3 rounded-md bg-neutral-950 w-[340px]"
            type="text"
            name="search"
            placeholder="Buscar equipo..."
          />
        </form>
      </div>
      <section className="mt-3 grid grid-cols-4 gap-4">
        {teams?.map((team) => {
          const { id, team_name: teamName, users } = team;
          const usersCount = users.length;
          return (
            <TeamCard key={id} teamName={teamName} usersCount={usersCount} />
          );
        })}
      </section>
    </div>
  );
}
