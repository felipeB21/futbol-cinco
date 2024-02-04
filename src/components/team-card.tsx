import { Button } from "./ui/button";

export default function TeamCard({
  teamName,
  usersCount,
}: {
  teamName: string;
  usersCount: number;
}) {
  return (
    <div className="mt-3">
      <div>
        <h2 className="text-lg font-bold uppercase">{teamName}</h2>
        <p className="text-neutral-300">
          {usersCount === 1 ? "1 Jugador" : `${usersCount} Jugadores`}
        </p>
      </div>
      <div className="mt-2">
        <Button>Requerir ingreso</Button>
      </div>
    </div>
  );
}
