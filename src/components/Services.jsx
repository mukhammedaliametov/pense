import React from 'react';
import Services1 from '../assets/services_icon1.svg';
import Services2 from '../assets/services_icon2.svg';
import Services3 from '../assets/services_icon3.svg';

const Services = () => {
    return (
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0'>
            <div>
                <div className='flex items-center flex-col md:flex-row justify-between'>
                    <h2 className="text-[35px]/[40px] md:text-[78px]/[81px] font-bold w-full md:w-[730px]">The Product we work with.</h2>
                <p className='text-light text-light text-[20px] w-full md:w-[350px]'>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    <div className='w-[320px] h-[320px] rounded-[12px] flex justify-center items-center flex-col'>
                        <div className='w-[64px] h-[64px] flex justify-center items-center bg-[#FFBD740D] rounded-[50%]'>
                            <img src={Services1} alt="services1" />
                        </div>
                        <h3 className='py-[5px] font-semibold text-[25px]'>Cross platform</h3>
                        <p className='text-light w-[250px] text-center'>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div className='w-[320px] h-[320px] rounded-[12px] flex justify-center items-center flex-col'>
                        <div className='w-[64px] h-[64px] flex justify-center items-center bg-[#E2598B0D] rounded-[50%]'>
                            <img src={Services2} alt="services1" />
                        </div>
                        <h3 className='py-[5px] font-semibold text-[25px]'>Cloud server</h3>
                        <p className='text-light w-[250px] text-center'>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div className='w-[320px] h-[320px] rounded-[12px] flex justify-center items-center flex-col'>
                        <div className='w-[64px] h-[64px] flex justify-center items-center bg-[#4D12EE0D] rounded-[50%]'>
                            <img src={Services3} alt="services1" />
                        </div>
                        <h3 className='py-[5px] font-semibold text-[25px]'>Pure Javascript</h3>
                        <p className='text-light w-[250px] text-center'>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;