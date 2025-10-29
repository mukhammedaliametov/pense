import React from "react";
import Image from "../assets/hero_img.png";
import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
  return (
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex flex-col-reverse gap-[50px] md:gap-0 md:flex-row items-center justify-between font-hind py-[50px]">
        <div className="w-auto md:w-[540px]">
          <h1 className="text-[35px]/[40px] md:text-[76px]/[81px] xl:text-[96px]/[101px] font-bold">
            Track your Expenses & Save Money
          </h1>
          <p className="text-light text-[18px] my-[5px]">
            Helps you to organize your income and expenses
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center my-[15px] gap-[10px]">
            <button className="flex items-center gap-[10px] bg-primary text-white opacity-80 border border-primary rounded-[8px] py-[15px] px-[25px] cursor-pointer hover:opacity-100 duration-300">
              Try free demo <FaAngleDown />
            </button>
            <a
              href="javascript:void(0)"
              className="text-light hover:text-primary duration-300"
            >
              — Web, iOS and Android
            </a>
          </div>
        </div>
        <div>
          <img src={Image} alt="image" />
        </div>
      </div>
  );
};

export default Hero;
