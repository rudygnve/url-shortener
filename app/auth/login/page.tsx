"use client";

import React, { useEffect, useState } from "react";
import { userAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginPage = () => {
  const { googleSignIn, user, logIn } = userAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleLoginWithGoogle = async () => {
    await googleSignIn();
  };

  const handleLoginWithEmail = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      if (password.length > 6) {
        try {
          setIsDisabled(true);
          setLoading(true);
          await logIn(email, password);
          router.push("/");
        } catch (error) {
          toast.error("Something went wrong!");
        } finally {
          setIsDisabled(false);
          setLoading(false);
        }
      } else {
        toast.error("Password must be at 6 characters");
      }
    } else {
      toast.error("Please provide the required information");
    }
  };

  return (
    <main className="w-full min-h-screen h-full grid place-items-center px-3">
      <div className="max-w-sm w-full mx-auto p-5 sm:p-8 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 flex flex-col">
        <a href="/" className="self-center mb-4">
          <img src="/assets/images/logo-png.png" className="w-12" alt="Logo" />
        </a>
        <h3 className="text-center text-2xl font-bold text-neutral-800 mb-3">
          Login to your account
        </h3>
        <p className="text-neutral-800/80 text-center mb-5">
          Enter your email address and password to continue.
        </p>
        <form
          onSubmit={handleLoginWithEmail}
          className="w-full flex flex-col gap-3"
        >
          <div className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md overflow-hidden flex items-center">
            <div className="px-2.5">
              <img src="/assets/icons/user.svg" className="w-5" alt="" />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full h-full bg-transparent outline-none pr-2.5 flex-1"
              placeholder="Email Address*"
            />
          </div>
          <div className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md overflow-hidden flex items-center">
            <div className="px-2.5">
              <img src="/assets/icons/password.svg" className="w-5" alt="" />
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full h-full bg-transparent outline-none pr-2.5 flex-1"
              placeholder="Password*"
            />
          </div>
          <button
            disabled={isDisabled}
            className="h-12 bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {loading ? (
              <img
                src="/assets/icons/loading-dark.svg"
                className="w-8 animate-spin"
              />
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <div className="w-full py-5 flex items-center gap-3">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-neutral-300 font-semibold">
            OR LOGIN WITH
          </span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <div className="flex flex-col w-full gap-3 mb-6">
          <button
            onClick={handleLoginWithGoogle}
            className="h-12 flex items-center justify-center font-semibold border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md transition-all duration-200 active:scale-95"
          >
            <img
              src="/assets/icons/google.svg"
              className="w-9"
              alt="Google Icon"
            />
            Sign in with Google
          </button>
        </div>
        <span className="text-center text-neutral-800 flex items-center gap-2 justify-center">
          New here?
          <a
            href="/auth/sign-up"
            className="underline underline-offset-2 font-semibold"
          >
            Sign Up
          </a>
        </span>
      </div>
    </main>
  );
};

export default LoginPage;
