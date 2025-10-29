import React from "react";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import plan3 from "../assets/plan3.svg";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Plan = () => {
  return (
    <div className="bg-[#FFFAF8]">
      <div className="max-w-[1220px] mx-auto px-[16px] py-[60px] lg:px-0">
        <h2 className="text-[35px]/[40px] md:text-[58px]/[61px] font-bold text-center">
          Choose your flexible plan.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          <div className="bg-white w-full md:w-[350px] h-[400px] rounded-[12px] border-1 border-[#F5F5F5] py-[30px] px-[30px] flex flex-col justify-between">
            <img src={plan1} alt="plan1" className="w-[24px]" />
            <h3 className="text-[24px] font-semibold">Starter Plan</h3>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <div>
              <p className="text-light">
                <span className="text-[20px] font-semibold text-black">
                  $9.99/
                </span>
                year
              </p>
              <p className="text-light">up to 3 user + 1.99 per user</p>
            </div>
            <div>
              <button className="flex items-center gap-[15]0px] text-primary border border-primary rounded-[8px] py-[10px] px-[25px] cursor-pointer hover:bg-primary hover:text-white duration-300 gap-[10px]">
                Get this <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="bg-white w-full md:w-[350px] h-[400px] rounded-[12px] border-1 border-[#F5F5F5] py-[30px] px-[30px] flex flex-col justify-between">
            <img src={plan3} alt="plan3" className="w-[24px]" />
            <h3 className="text-[24px] font-semibold">Sliver Plan</h3>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <div>
              <p className="text-light">
                <span className="text-[20px] font-semibold text-black">
                  $19.99/
                </span>
                year
              </p>
              <p className="text-light">up to 3 user + 1.99 per user</p>
            </div>
            <div>
              <button className="flex items-center gap-[15]0px] text-primary border border-primary rounded-[8px] py-[10px] px-[25px] cursor-pointer hover:bg-primary hover:text-white duration-300 gap-[10px]">
                Get this <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="bg-white w-full md:w-[350px] h-[400px] rounded-[12px] border-1 border-[#F5F5F5] py-[30px] px-[30px] flex flex-col justify-between">
            <img src={plan2} alt="plan2" className="w-[24px]" />
            <h3 className="text-[24px] font-semibold">Diamond Plan</h3>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <p className="flex items-center gap-[6px]">
              <FaCheck />
              Store unlimited data
            </p>
            <div>
              <p className="text-light">
                <span className="text-[20px] font-semibold text-black">
                  $29.99/
                </span>
                year
              </p>
              <p className="text-light">up to 3 user + 1.99 per user</p>
            </div>
            <div>
              <button className="flex items-center gap-[15]0px] text-primary border border-primary rounded-[8px] py-[10px] px-[25px] cursor-pointer hover:bg-primary hover:text-white duration-300 gap-[10px]">
                Get this <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
