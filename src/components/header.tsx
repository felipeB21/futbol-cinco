import Link from "next/link";
import { AuthButtonServer } from "./auth-button-server";

const links = [
  { name: "Tabla", url: "/rank" },
  { name: "Partidos", url: "/games" },
  { name: "Equipos", url: "/teams" },
  { name: "Jugadores", url: "/players" },
] as const;

export default function Header() {
  return (
    <header className="py-3 border-b border-neutral-800">
      <div className="flex items-center justify-between w-[900px] mx-auto">
        <div>
          <Link
            className="text-xl flex items-center gap-2 font-medium uppercase text-green-200"
            href="/"
          >
            Futbol5{" "}
            <span className="text-sm text-neutral-500 lowercase">v 0.1</span>
          </Link>
        </div>
        <nav className="flex items-center gap-5">
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-neutral-200 hover:text-white"
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <AuthButtonServer />
        </nav>
      </div>
    </header>
  );
}
