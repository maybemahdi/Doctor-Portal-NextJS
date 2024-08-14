import React from "react";
import bgBlue from "../../../public/assets/images/appointment.png";
import Image from "next/image";
import doctor from "../../../public/assets/images/doctor-small.png";

const MakeAnAppointment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgBlue.src})`,
      }}
      className="flex justify-center items-center gap-8 h-[520px] px-6 my-20"
    >
      <div className="hidden md:block relative bottom-7">
        <Image alt="Banner Image" src={doctor} height={636} width={606} className="" />
      </div>
      <div className="flex flex-col gap-3 text-white flex-1">
        <h3 className="text-primary-gradient font-bold text-5xl w-full leading-normal md:w-3/4">
          Appointment
        </h3>
        <h4 className="font-normal text-4xl">Make an appointment Today</h4>
        <p className="md:w-3/4 my-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="px-3 py-3 bg-primary-gradient rounded-md w-fit text-sm text-white uppercase font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MakeAnAppointment;
