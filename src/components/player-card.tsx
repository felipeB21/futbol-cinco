import Image from "next/image";
import React from "react";

export default function PlayerCard({
  userName,
  avatarUrl,
  teamName,
}: {
  userName: string;
  avatarUrl: string;
  teamName: string;
}) {
  return (
    <div className="flex gap-2 mt-3">
      <Image
        className="w-auto h-auto rounded-full"
        src={avatarUrl}
        alt="avatar"
        width={50}
        height={50}
      />
      <div>
        <p className="font-medium text-lg">{userName}</p>
        <p className="text-neutral-300">
          {!teamName ? "Sin equipo" : teamName}
        </p>
      </div>
    </div>
  );
}
