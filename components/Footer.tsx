import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-5 border-t px-3">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Logo />
        <span className="text-neutral-800/70">
          © 2023 Made by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/rudy-genave/"
            className="text-neutral-700 font-medium"
          >
            Rudy
          </Link>{" "}
          | All Rights Reversed.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
