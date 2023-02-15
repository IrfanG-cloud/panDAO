import Link from "next/link";
import React from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "How It Work",
    page: "howwork",
    href: "/pages/howitwork",
  },
  {
    label: "Apply",
    page: "apply",
    href: "/auth/register",
  },
  {
    label: "Available Programs",
    page: "availableprogram",
    href: "/pages/availableprogram",
  },
  {
    label: "WIT",
    page: "wit",
    href: "/pages/wit",
  },
  {
    label: "Contact Us",
    page: "/pages/contactus",
    href: "/pages/contactus",
  },
];

export default function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full mx-auto fixed top-0 px-12">
      <div className="justify-between items-center flex ">
        <Link href="/">
          <Image src="/logo.png" width={120} height={70} alt="logo" />
        </Link>
        <div className="flex gap-7 text-[16px] text-[#fff] ">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link
                href={`${item.href}`}
                key={idx}
                className="color-white hover:animate-bounce hover:text-[red]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2">
          <div>
            <button className="w-30 h-12 bg-outline text-[#ffffff] font-bold px-5 border-none rounded-md text-1xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ...">
              <Link href="/auth/login">Login</Link>
            </button>
          </div>
          <div>
            <button className="w-30 h-12 bg-red-600 text-white px-5 font-bold border-none rounded-md text-1x1 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 ...">
              <Link href="/auth/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
