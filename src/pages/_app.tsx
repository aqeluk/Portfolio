import React from "react";
import "../styles/globals.css";
import RoundFive from "../components/background/RoundFive";
import RoundFour from "../components/background/RoundFour";
import RoundOne from "../components/background/RoundOne";
import RoundThree from "../components/background/RoundThree";
import RoundTwo from "../components/background/RoundTwo";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Component {...pageProps} />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
};

export default MyApp;
