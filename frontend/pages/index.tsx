import { useState, useEffect } from "react";
import "../styles/home_page.module.css";

// Define your component for the first part
const LandingPortion = () => {
  return (
    <div className="h-screen w-screen relative">
      <div
        className="bg-cover bg-center h-full w-full relative"
        style={{ backgroundImage: "url('/nilgiri.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-semibold text-6xl">Yearbook 2024</h1>
        </div>
      </div>
    </div>
  );
};

// Define your component for the second part
// Define your component for the second part
const MidPage = () => {
  // Your components for the second part go here
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-5">
            <div className="p-12 lg:p-16 border border-white rounded-5xl">
              <h2 className="mb-6 text-5xl tracking-5xl">Lorem Ipsum</h2>
              <p className="mb-24 lg:mb-56 text-lg text-opacity-80">
                Lorem Ipsum
              </p>
              <a className="group inline-flex items-center text-white" href="#">
                <span className="mr-3.5 font-medium underline">Learn more</span>
                <svg
                  className="transform group-hover:rotate-90 transition duration-300"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 0.75L1 11.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M11.5 10.3781V0.75H1.87187"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="p-12 lg:p-16 border border-white rounded-5xl">
              <h2 className="mb-6 text-5xl tracking-5xl">Lorem Ipsum</h2>
              <p className="mb-24 lg:mb-56 text-lg text-opacity-80">
                Lorem Ipsum
              </p>
              <a className="group inline-flex items-center text-white" href="#">
                <span className="mr-3.5 font-medium underline">Learn more</span>
                <svg
                  className="transform group-hover:rotate-90 transition duration-300"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 0.75L1 11.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M11.5 10.3781V0.75H1.87187"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define your component for the third part (FAQ)
const FrequentQuestions = () => {
  // Your FAQ content goes here
  return (
    <section className="pt-28 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-5xl font-bold font-heading tracking-px-n leading-none">
          Frequently Asked questions
        </h2>
        <div className="mb-8 md:max-w-5xl">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                <h3 className="mb-4 text-lg font-semibold leading-normal">
                  Lorem Ipsum
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                  Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                <h3 className="mb-4 text-lg font-semibold leading-normal">
                  Lorem Ipsum
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                  Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                <h3 className="mb-4 text-lg font-semibold leading-normal">
                  Lorem Ipsum
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                  Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                <h3 className="mb-4 text-lg font-semibold leading-normal">
                  Lorem Ipsum
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                  Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define your Home component
export default function Home() {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div className="full-page">
        <LandingPortion />
      </div>
      <div className="full-page">
        <MidPage />
      </div>
      <div
        className="full-page"
        // style={{ transform: `translateY(-${scrollY}px)` }}
      >
        <FrequentQuestions />
      </div>
    </>
  );
}
