import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PlayerCard from "./player-card";

export default async function Players() {
  const supabase = createServerComponentClient({ cookies });
  const { data: users } = await supabase
    .from("users")
    .select("*, team:teams(*)");
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold uppercase">Jugadores</h2>
      {users?.map((user) => {
        const { id, name: userName, avatar_url: avatarUrl, team } = user;
        const { team_name: teamName } = team;
        return (
          <PlayerCard
            key={user.id}
            userName={userName}
            avatarUrl={avatarUrl}
            teamName={teamName}
          />
        );
      })}
    </section>
  );
}
