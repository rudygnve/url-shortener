import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen h-full flex flex-col">
      <Header />
      <section className="w-full max-w-7xl mx-auto grow py-16 px-3">
        <div className="max-w-5xl mx-auto w-full flex flex-col">
          <h1 className="text-2xl sm:text-4xl font-bold text-neutral-800 text-center mb-4">
            Pricing
          </h1>
          <span className="text-lg sm:text-2xl text-center leading-8 sm:leading-10 font-medium text-neutral-700 mb-8">
            We provide the best features at the best prices.
          </span>
          <div className="max-w-2xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="w-full p-6 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 flex flex-col">
              <h2 className="text-3xl font-bold text-neutral-800 text-center mb-2">
                Free
              </h2>
              <span className="text-center text-lg text-neutral-700 mb-5">
                Enjoy our free forever plan
              </span>
              <h2 className="text-5xl text-primary font-extrabold text-center mb-6">
                $0
                <span className="text-lg text-neutral-800 font-medium">
                  /month
                </span>
              </h2>
              <button className="h-12 bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md font-semibold transition-all duration-200 active:scale-95 mb-6">
                Get Started For Free
              </button>
              <div className="flex flex-col">
                <span className="text-neutral-800 mb-4">This includes:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      Up to 20 links
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      1 Custom Domain
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      3 QR Codes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border-2 border-r-4 border-b-4 border-neutral-800 flex flex-col">
              <h2 className="text-3xl font-bold text-neutral-800 text-center mb-2">
                Pro
              </h2>
              <span className="text-center text-lg text-neutral-700 mb-5">
                Become better with this plan
              </span>
              <h2 className="text-5xl text-primary font-extrabold text-center mb-6">
                $9
                <span className="text-lg text-neutral-800 font-medium">
                  /month
                </span>
              </h2>
              <button className="h-12 bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md font-semibold transition-all duration-200 active:scale-95 mb-6">
                Start 7-Day Trial
              </button>
              <div className="flex flex-col">
                <span className="text-neutral-800 mb-4">This includes:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      Unlimited links
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      3 Custom Domains
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/assets/icons/check.svg"
                      className="w-5"
                      alt="Check Icon"
                    />
                    <span className="text-neutral-800 font-medium">
                      Unlimited QR Codes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
