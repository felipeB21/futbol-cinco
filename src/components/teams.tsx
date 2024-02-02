import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Teams() {
  const supabase = createServerComponentClient({ cookies });
  const { data: teams } = await supabase
    .from("teams")
    .select("*, users(name, avatar_url)");
  return (
    <section className="mt-20">
      <h2>Equipos</h2>
      <pre>{JSON.stringify(teams, null, 2)}</pre>;
    </section>
  );
}
