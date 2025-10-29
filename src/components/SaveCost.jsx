import React from "react";
import SaveCostImg from "../assets/savecost_img.png";
import { FaArrowRight } from "react-icons/fa6";

const SaveCost = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] py-[40px] lg:px-0 flex flex-col md:flex-row-reverse gap-[20px] items-top justify-between">
      <div className="w-auto md:w-[540px]">
        <p className="text-light text-[18px] my-[5px] uppercase">
          Alwalys online
        </p>
        <h1 className="text-[35px]/[40px] md:text-[78px]/[81px] font-bold">
          Real-time support with cloud
        </h1>
        <p className="text-light text-[18px] my-[10px]">
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
        <a
          href="javascript:void(0)"
          className="text-primary flex items-center gap-[10px]"
        >
          Learn more <FaArrowRight />
        </a>
      </div>
      <div>
        <img src={SaveCostImg} alt="real-time-img" />
      </div>
    </div>
  );
};

export default SaveCost;
