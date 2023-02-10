import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="flex 
            bg-gradient-to-tr
         from-gray-800
        to-gray-600
        h-[150px]
        text-white
        text-1xl
        px-[50px]
        justify-between
        py-[40px]
">
      <Link href="/">
        <Image src="/logo.png" width={120} height={50} alt="logo" />
      </Link>

      <p>© 2023 Panaveasre DAO. All rights reserved</p>
    </div>
  );
}
