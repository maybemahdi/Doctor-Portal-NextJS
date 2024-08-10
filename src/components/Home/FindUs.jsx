"use client";
import Image from "next/image";
import React from "react";
import clock from "../../../public/assets/icons/clock.svg";
import marker from "../../../public/assets/icons/marker.svg";
import phone from "../../../public/assets/icons/phone.svg";

const FindUs = () => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      <div
        style={{
          background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          transition: "background 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#3A4256")} // secondary color
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)")
        }
        className="duration-300 flex gap-5 items-center justify-center px-6 rounded-[14px] h-[190px]"
      >
        <div>
          <Image alt="Clock" src={clock} />
        </div>
        <div>
          <h5 className="text-[20px] font-bold">Opening Hours</h5>
          <p className="text-base mt-[5px]">
            Lorem Ipsum is simply dummy text of the pri
          </p>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          transition: "background 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#3A4256")} // secondary color
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)")
        }
        className="duration-300 flex gap-5 items-center justify-center px-6 rounded-[14px] h-[190px]"
      >
        <div>
          <Image alt="Clock" src={marker} />
        </div>
        <div>
          <h5 className="text-[20px] font-bold">Visit our location</h5>
          <p className="text-base mt-[5px]">
          Brooklyn, NY 10036, United States
          </p>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          transition: "background 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#3A4256")} // secondary color
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)")
        }
        className="duration-300 flex gap-5 items-center justify-center px-6 rounded-[14px] h-[190px]"
      >
        <div>
          <Image alt="Clock" src={phone} />
        </div>
        <div>
          <h5 className="text-[20px] font-bold">Contact us now</h5>
          <p className="text-base mt-[5px]">
          +000 123 456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
