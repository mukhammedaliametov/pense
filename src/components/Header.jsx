import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "Features", link: "/" },
    { name: "About us", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Feedback", link: "/" },
  ];
  return (
    <div className="sticky top-0 py-[20px] md:py-[30px] font-hind bg-white z-999">
      <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between'>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav className='hidden md:flex items-center gap-[40px]'>
          {navItems.map((itm, idx) => {
            return (
              <a key={idx} href={itm.link} className="hover:text-primary duration-300">
                {itm.name}
              </a>
            );
          })}
        </nav>
        <button className="hidden md:block text-primary border border-primary rounded-[8px] py-[10px] px-[25px] cursor-pointer hover:bg-primary hover:text-white duration-300">Request a demo</button>
        <div className="block md:hidden text-[30px]" onClick={handleClick}>
            {nav ? <IoClose /> : <IoMenu />}
        </div>
        <nav className={`absolute bg-white shadow-md top-[70px] w-full flex flex-col px-[16px] py-[25px] gap-[30px] -z-10 duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
          {navItems.map((itm, idx) => {
            return (
              <a key={idx} href={itm.link} className="text-[18px]">
                {itm.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
