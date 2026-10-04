"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Books",
      href: "/books",
    },
    {
      name: "Listed Books",
      href: "/listed-books",
    },
    {
      name: "Pages to Read",
      href: "/pages-read",
    },
  ];

  const isActive = (href:string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="navbar min-h-[80px] px-0 lg:min-h-[96px]">

          {/* Left */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle mr-1"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown */}
              <div
                tabIndex={-1}
                className="dropdown-content z-50 mt-3 w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl"
              >
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-4 py-3 font-medium transition-all ${
                          isActive(link.href)
                            ? "border border-[#23BE0A] text-[#23BE0A]"
                            : "border border-transparent text-[#131313]/80 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Auth Buttons */}
                <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 sm:hidden">
                  <Link
                    href="/signin"
                    className="flex h-11 items-center justify-center rounded-lg bg-[#23BE0A] font-semibold text-white"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="flex h-11 items-center justify-center rounded-lg bg-[#59C6D2] font-semibold text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="whitespace-nowrap text-xl font-bold text-[#131313] sm:text-2xl lg:text-[28px]"
            >
              Book Vibe
            </Link>
          </div>

          {/* Center Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex min-h-[52px] items-center justify-center rounded-lg border px-5 text-base font-medium transition-all duration-200 xl:px-6 ${
                      isActive(link.href)
                        ? "border-[#000] text-[#000]"
                        : "border-transparent text-[#131313]/80 hover:border-[#23BE0A]/30 hover:text-[#23BE0A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end gap-2 sm:gap-4">
            <Link
              href="/signin"
              className="hidden h-[52px] items-center justify-center rounded-lg bg-[#23BE0A] px-5 font-medium text-black transition hover:bg-[#1fa80a] sm:flex lg:px-7"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="hidden h-[52px] items-center justify-center rounded-lg bg-[#59C6D2] px-5 font-medium text-black transition hover:bg-[#48b4c0] sm:flex lg:px-7"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;