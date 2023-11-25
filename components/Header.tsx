"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { userAuth } from "@/context/UserAuthContext";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  const { user } = userAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <header className="h-20 border-b sticky top-0 z-[1000] bg-white px-3">
      <nav className="h-full max-w-7xl mx-auto w-full flex items-center justify-between relative">
        <div className="flex items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>

            <a href="/contact">Contact</a>
          </div>
        </div>
        {!loading ? (
          !user ? (
            <>
              <div className="hidden md:flex items-center gap-5">
                <a
                  href="/auth/login"
                  className="py-2.5 px-5 text-neutral-800 font-semibold rounded-lg border-neutral-800 border-2"
                >
                  Login
                </a>
                <a
                  href="/auth/sign-up"
                  className="py-2.5 px-5 bg-primary text-neutral-800 font-semibold rounded-lg border-neutral-800 border-2"
                >
                  Create account
                </a>
              </div>
              <div className="w-12 h-12 text-neutral-800 md:hidden flex items-center justify-center border-2 border-r-4 boder-b-4 rounded-md border-neutral-800 bg-primary">
                <Menu className="w-8" />
              </div>
            </>
          ) : (
            <UserMenu
              photoUrl={user?.photoURL}
              name={user?.displayName?.split(" ")[0]}
            />
          )
        ) : (
          <img
            src="/assets/icons/loading-primary.svg"
            className="w-8 animate-spin"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
