import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-full">
      <Header />
      <section className="w-full realtive py-12 md:py-20 px-3">
        <div className="background absolute inset-0 z-[-10]"></div>
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center justifay-center text-center">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-[140%] text-neutral-800 font-extrabold capitalize mb-5 md:mb-8">
            From messy links to <span className="text-primary">short</span>,
            <span className="text-primary">readable</span> links
          </h1>
          <p className="text-lg sm:text-2xl leading-8 sm:leading-10 font-medium text-neutral-700 sm:mb-10 mb-5">
            Use qiklnk in your online journey to create concise, beautiful,
            readable, and usable short links for better appealing.
          </p>
          <form className="w-full sm:gap-0 gap-3 p-2 rounded-lg border-0 sm:border-2 border-neutral-800 sm:flex-row flex-col flex items-center sm:border-b-4 sm:border-r-4 mb-5">
            <input
              type="text"
              className="sm:h-12 h-14 sm:border-none border-2 border-r-4 border-b-4 border-neutral-800 sm:rounded-none rounded-lg bg-transparent flex-auto w-full sm:w-auto sm:flex-1 px-4 text-lg"
              placeholder="Shorten a link..."
            />
            <button className="h-12 w-full sm:w-auto px-8 text-lg font-semibold text-]text-neutral-800 bg-primary rounded-lg">
              Shorten
            </button>
          </form>
          <span className="text-neutral-500">
            By clicking 'Shorten' you agree to our Terms and Conditions.
          </span>
        </div>
      </section>
      <section className="w-full mx-auto max-w-7xl py-8 sm:py-18 md:py-28 px-3">
        <div className="w-full flex flex-col sm:grid md:grid-cols-2 items-center gap-6 md:gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="sm:text-4xl text-3xl md:text-start text-center md:text-5xl capitalize font-extrabold text-neutral-800 leading-[140%] md:leading-[130%]">
              We provide the best features for free.
            </h3>
            <p className="mb-4 text-lg text-center md:text-start sm:text-xl md:text-2xl leading-8 md:leading-10 font-medium text-neutral-700">
              Be amaze with what we provide to you for free to ease your life.
              We offer features that you don't have to pay for.
            </p>
            <a
              href="/"
              className="md:block hidden py-2.5 px-5 bg-primary text-neutral-800 font-semibold rounded-lg border-neutral-800 border-b-4 border-r-4 border-2 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] w-[fit-content]"
            >
              Learn More
            </a>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col md:grid grid-rows-2 gap-6 md:gap-8">
              <div className="w-full p-5 h-[250px] text-center border-2 border-neutral-800 border-b-4 border-r-4 rounded-xl flex items-center flex-col justify-center">
                <img
                  src="/assets/images/qr-code.png"
                  className="w-20 mb-4"
                  alt=""
                />
                <span className="text-xl font-semibold mb-4 text-neutral-800">
                  QR Codes
                </span>
                <span className="text-lg text-neutral-800">
                  Generate QR Codes from your shorten links.
                </span>
              </div>
              <div className="w-full p-5 h-[250px] text-center border-2 border-neutral-800 border-b-4 border-r-4 rounded-xl flex items-center flex-col justify-center bg-primary">
                <img
                  src="/assets/images/creativity.png"
                  className="w-20 mb-4"
                  alt=""
                />
                <span className="text-xl font-semibold mb-4 text-neutral-800">
                  Link Customization
                </span>
                <span className="text-lg text-neutral-800">
                  Have the option to change the back-end of the links.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-rows-2 gap-6 md:gap-8 translate-y-0 md:translate-y-14">
              <div className="w-full p-5 h-[250px] text-center border-2 border-neutral-800 border-b-4 border-r-4 rounded-xl flex items-center flex-col justify-center bg-primary order-1 md:order-[-1]">
                <img
                  src="/assets/images/analytics.png"
                  className="w-20 mb-4"
                  alt=""
                />
                <span className="text-xl font-semibold mb-4 text-neutral-800">
                  Link Analytics
                </span>
                <span className="text-lg text-neutral-800">
                  Get realtime data about all your links.
                </span>
              </div>
              <div className="w-full p-5 h-[250px] text-center border-2 border-neutral-800 border-b-4 border-r-4 rounded-xl flex items-center flex-col justify-center">
                <img
                  src="/assets/images/website.png"
                  className="w-20 mb-4"
                  alt=""
                />
                <span className="text-xl font-semibold mb-4 text-neutral-800">
                  Custom Domains
                </span>
                <span className="text-lg text-neutral-800">
                  Connect your own domain name.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 sm:py-18 md:py-24 px-3">
        <div className="w-full max-w-xl mx-auto flex items-center text-center flex-col">
          <h2 className="sm:text-4xl text-3xl md:text-5xl text-neutral-800 capitalize leading-[140%] font-extrabold mb-6">
            start your online journey with us.
          </h2>
          <p className="sm:text-xl text-lg md:text-2xl md:mb-8 mb-6">
            Join us now and create your account for absolutely free from any
            cost.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-5">
            <Link
              href="/auth/sign-up"
              className="py-2.5 px-5 bg-primary text-neutral-800 font-semibold rounded-lg border-neutral-800 border-b-4 border-r-4 border-2 transition duration-200 active:scale-95"
            >
              Get Started For Free
            </Link>
            <Link
              href="/pricing"
              className="py-2.5 px-5 text-neutral-800 font-semibold rounded-lg border-neutral-800 border-b-4 border-r-4 border-2 transition duration-200 active:scale-95"
            >
              See our plans
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
