"use client";

import Lottie from "react-lottie";
import animationData from "@/lotties/earth-lottie.json";

export default function Earth() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full col-span-3 flex items-center justify-center lg:order-last order-1">
      <Lottie isClickToPauseDisabled options={defaultOptions} />
    </div>
  );
}
