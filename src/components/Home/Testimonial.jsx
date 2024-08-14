import Image from "next/image";
import React from "react";
import people from "../../../public/assets/images/people1.png";

const Testimonial = () => {
  return (
    <div className="w-[90%] mx-auto my-10 flex flex-col items-center justify-center">
      <h3 className="text-primary-gradient text-[20px] font-bold text-center">
        Testimonial
      </h3>
      <p className="text-secondary text-4xl mt-3 text-center">
        What Our Patients Say
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary">
        <div className="transition-all duration-500 flex flex-col gap-5 justify-center px-6 rounded-[14px] h-[270px] shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <p className="text-base mt-[5px] text-black">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <Image
              className="rounded-full border-[3px] border-[#19D3AE] "
              alt="People"
              src={people}
              height={64}
              width={64}
            />
            <div className="flex flex-col">
              <h5 className="font-semibold text-secondary">Winson Herry</h5>
              <p className="text-black">California</p>
            </div>
          </div>
        </div>
        <div className="transition-all duration-500 flex flex-col gap-5 justify-center px-6 rounded-[14px] h-[270px] shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <p className="text-base mt-[5px] text-black">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <Image
              className="rounded-full border-[3px] border-[#19D3AE] "
              alt="People"
              src={people}
              height={64}
              width={64}
            />
            <div className="flex flex-col">
              <h5 className="font-semibold text-secondary">Winson Herry</h5>
              <p className="text-black">California</p>
            </div>
          </div>
        </div>
        <div className="transition-all duration-500 flex flex-col gap-5 justify-center px-6 rounded-[14px] h-[270px] shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <p className="text-base mt-[5px] text-black">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <Image
              className="rounded-full border-[3px] border-[#19D3AE] "
              alt="People"
              src={people}
              height={64}
              width={64}
            />
            <div className="flex flex-col">
              <h5 className="font-semibold text-secondary">Winson Herry</h5>
              <p className="text-black">California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
