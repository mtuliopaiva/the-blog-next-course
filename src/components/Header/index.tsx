// client component
"use client";

import clsx from "clsx";

export function Header() {
  console.log("Client -> HomePage rendered");
  return (
    <h1
      className={clsx(
        "text-xl",
        "font-bold",
        "text-blue-500",
        "hover:text-white",
        "transition-all",
        "duration-300",
        "cursor-pointer"
      )}
      onClick={() => alert("Clicou no h1")}
    >
      Texto no meu h1
    </h1>
  );
}
