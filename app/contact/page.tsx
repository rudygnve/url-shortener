"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { userAuth } from "@/context/UserAuthContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// export const metadata: Metadata = {
//   title: "Contact Us - QikLnk",
// };

const ContactPage = () => {
  const { user } = userAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmitMessage = async (e: any) => {
    e.preventDefault();
    setIsDisabled(true);
    setLoading(true);
    if (fullName && email && message) {
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email,
            phone: phoneNo,
            message,
          }),
        });
        toast.success("Message successfully sent!");
        setEmail("");
        setFullName("");
        setPhoneNo("");
        setMessage("");
      } catch {
        toast.error("Something went worng!");
      } finally {
        setIsDisabled(false);
        setLoading(false);
      }
    } else {
      toast.error("Please provide the required information");
    }
  };

  useEffect(() => {
    if (fullName && email && message) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [fullName, email, message]);

  return (
    <main className="w-full min-h-screen h-full flex flex-col">
      <Header />
      <section className="w-full max-w-7xl mx-auto grow items-center justify-center flex-col flex py-12 md:py-16 sm:mb-0 px-3">
        <div className="w-full max-w-lg flex flex-col">
          <h1 className="text-2xl sm:text-4xl font-bold text-neutral-800 text-center mb-4">
            Contact Us
          </h1>
          <span className="text-lg sm:text-2xl text-center leading-8 sm:leading-10 font-medium text-neutral-700 mb-8">
            Any queries? Just us know about them.
          </span>
          <form
            onSubmit={handleSubmitMessage}
            className="w-full flex flex-col gap-3"
          >
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
              placeholder="Full Name*"
            />
            <div className="grid-rows-1 sm:grid-cols-2 grid gap-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
                placeholder="Email Address*"
              />
              <input
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                type="text"
                className="h-12 w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md px-3"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-2 border-neutral-800 border-b-4 border-r-4 rounded-md p-3 h-40"
              placeholder="Message*"
            ></textarea>
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
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
