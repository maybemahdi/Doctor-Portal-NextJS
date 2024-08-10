import Image from "next/image";
import React from "react";
import bannerImg from "../../../public/assets/images/chair.png";

const Banner = () => {
  return (
    <div
      className="md:min-h-[calc(100vh-120px)] mt-10 md:mt-0 flex flex-col-reverse md:flex-row justify-between items-center gap-6"
    >
      <div className="basis-1/2 flex flex-col gap-3">
        <h3 className="text-secondary font-bold text-5xl w-full md:w-[90%] leading-normal">
          Your New Smile Starts Here
        </h3>
        <p>
          Progressively disintermediate enabled deliverables before efficient
          communities. Enthusiastically reintermediate backend opportunities
          through.
        </p>
        <button className="px-3 py-3 bg-primary-gradient rounded-md w-fit text-sm text-white uppercase font-bold">
          Get Started
        </button>
      </div>
      <div className="basis-1/2 w-full">
        <Image alt="Banner Image" src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
