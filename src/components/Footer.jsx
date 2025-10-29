import React from "react";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="max-w-[1220px] mx-auto font-hind">
      <div className="grid grid-cols-1 gap-[20px] px-[16px] lg:px-0 sm:flex items-top justify-between">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex items-top gap-[40px]">
            <div className="flex flex-col gap-[10px]">
          <p className="font-semibold uppercase text-[20px]">Links</p>
          <a href="#" className="font-semibold">Home</a>
          <a href="#" className="font-semibold">About us</a>
          <a href="#" className="font-semibold">Carrers</a>
          <a href="#" className="font-semibold">Pricing</a>
          <a href="#" className="font-semibold">Features</a>
          <a href="#" className="font-semibold">Blog</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold uppercase text-[20px]">Legal</p>
          <a href="#" className="font-semibold">Terms of use</a>
          <a href="#" className="font-semibold">Terms of conditions</a>
          <a href="#" className="font-semibold">Privecy policy</a>
          <a href="#" className="font-semibold">Cookie policy</a>
        </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold uppercase text-[20px]">Newsletter</p>
          <p className="pt-[10px] text-light">Over 25000 people have subscribed</p>
          <div className="flex items-center border border-[#292830] py-[4px] pl-[10px] pr-[4px] rounded-[10px]">
            <input type="text" placeholder="Enter your email" className="w-full outline-none pr-2" />
            <button className="p-[10px] rounded-[10px] bg-primary text-white cursor-pointer">Subscribe</button>
          </div>
          <p className="text-light">We don’t sell your email and spam</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row items-center justify-between border-t border-[#BDBDBD33] mt-[10px] pt-[20px] pb-[90px]">
        <div className="flex items-center gap-[30px]">
          <a href="#">Privacy & Terms</a>
          <a href="#">Contact Us</a>
        </div>
        <p>Copyright @ 2022 xpence</p>
        <div className="flex items-center gap-[20px]">
          <a href="#">
            <img src={Facebook} alt="facebook-logo" />
          </a>
          <a href="#">
            <img src={Twitter} alt="facebook-logo" />
          </a>
          <a href="#">
            <img src={Linkedin} alt="facebook-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
