import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import fluoride from "../../../public/assets/images/fluoride.png";
import cavity from "../../../public/assets/images/cavity.png";
import whitening from "../../../public/assets/images/whitening.png";

const Services = () => {
  return (
    <div className="mt-20 mb-10 flex flex-col items-center justify-center">
      <h3 className="text-primary-gradient text-[20px] font-bold text-center">
        OUR SERVICES
      </h3>
      <p className="text-secondary text-4xl mt-3 text-center">
        Services We Provide
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary">
        <div className="transition-all duration-500 flex flex-col gap-5 items-center justify-center px-6 rounded-[14px] h-[310px] shadow-lg">
          <div>
            <Image alt="Fluoride" src={fluoride} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-[20px] font-bold text-center">
              Fluoride Treatment
            </h5>
            <p className="text-base mt-[5px] text-center">
              Synergistically e-enable low-risk high-yield alignments before
              multifunctional e-commerce. Globally scale ethical.
            </p>
          </div>
        </div>
        <div className="transition-all duration-500 flex flex-col gap-5 items-center justify-center px-6 rounded-[14px] h-[310px] shadow-lg">
          <div>
            <Image alt="Cavity" src={cavity} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-[20px] font-bold text-center">
              Cavity Filling
            </h5>
            <p className="text-base mt-[5px] text-center">
              Efficiently mesh prospective deliverables vis-a-vis extensible
              internal or "organic" sources. Interactively.
            </p>
          </div>
        </div>
        <div className="transition-all duration-500 flex flex-col gap-5 items-center justify-center px-6 rounded-[14px] h-[310px] shadow-lg">
          <div>
            <Image alt="Whitening" src={whitening} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-[20px] font-bold text-center">
              Teeth Whitening
            </h5>
            <p className="text-base mt-[5px] text-center">
              Assertively matrix world-class testing procedures via synergistic
              e-business. Competently predominate world-class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
