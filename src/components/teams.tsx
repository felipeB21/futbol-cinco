import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TeamCard from "./team-card";

export default async function Teams() {
  const supabase = createServerComponentClient({ cookies });
  const { data: teams } = await supabase
    .from("teams")
    .select("*, users(name, avatar_url)");
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold uppercase">Equipos</h2>
      {teams?.map((team) => {
        const { id, team_name: teamName } = team;
        return <TeamCard key={team.id} teamName={teamName} />;
      })}
    </section>
  );
}
