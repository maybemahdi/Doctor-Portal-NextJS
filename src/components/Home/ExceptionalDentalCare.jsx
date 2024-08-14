import Image from "next/image";
import React from "react";
import img from "../../../public/assets/images/treatment.png";

const ExceptionalDentalCare = () => {
  return (
    <div className="md:px-8 w-[90%] mx-auto md:min-h-[calc(100vh-120px)] my-20 flex flex-col md:flex-row justify-between items-center gap-12">
    <div className="">
      <Image alt="Treatment Image" src={img} width={458} height={576} className="rounded-md" />
    </div>
    <div className="flex flex-col gap-3 flex-1">
      <h3 className="text-secondary font-bold text-5xl leading-[50px] md:leading-normal md:w-3/4">
        Exceptional Dental Care, on Your Terms
      </h3>
      <p className="text-gray-600 md:w-3/4">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
      </p>
      <button className="px-6 py-3 bg-teal-400 rounded-md w-fit text-sm text-white uppercase font-bold">
        Get Started
      </button>
    </div>
  </div>
  
  );
};

export default ExceptionalDentalCare;
