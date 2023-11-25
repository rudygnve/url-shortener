import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 mr-16">
      <img src="/assets/images/logo-png.png" alt="Logo" className="w-10" />
      <span className="text-3xl font-semibold text-neutral-800">qiklnk</span>
    </Link>
  );
};

export default Logo;
