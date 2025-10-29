import React from 'react';
import wishers1 from '../assets/wishers1.png';
import wishers2 from '../assets/wishers2.png';
import wishers3 from '../assets/wishers3.png';

const Wishers = () => {
    return (
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 py-[50px]'>
            <h2 className='w-full md:w-[920px] mx-auto text-[35px]/[40px] md:text-[78px]/[81px] font-bold text-center py-[50px]'>We have millions of best wishers</h2>
            <div className='flex items-center justify-between overflow-x-scroll xl:overflow-x-visible'>
                <div className='w-[350px] flex-shrink-0 rounded-[10px] overflow-hidden border border-[#F5F5F5]'>
                <div className='h-[10px] w-full bg-[#FFBE21]'></div>
                <div className='px-[30px] py-[20px]'>
                    <p className='pb-[30px]'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</p>
                    <div className='flex items-center gap-[10px]'>
                        <img src={wishers1} alt="wishers1" />
                        <p><span className='font-semibold'>Cameron Williamson,</span> <span>CEO</span></p>
                    </div>
                </div>
            </div>
            <div className='w-[350px] flex-shrink-0 rounded-[10px] overflow-hidden border border-[#F5F5F5]'>
                <div className='h-[10px] w-full bg-[#4756DF]'></div>
                <div className='px-[30px] py-[20px]'>
                    <p className='pb-[30px]'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</p>
                    <div className='flex items-center gap-[10px]'>
                        <img src={wishers2} alt="wishers2" />
                        <p><span className='font-semibold'>Cameron Williamson,</span> <span>CEO</span></p>
                    </div>
                </div>
            </div>
            <div className='w-[350px] flex-shrink-0 rounded-[10px] overflow-hidden border border-[#F5F5F5]'>
                <div className='h-[10px] w-full bg-[#3EC1F3]'></div>
                <div className='px-[30px] py-[20px]'>
                    <p className='pb-[30px]'>Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.</p>
                    <div className='flex items-center gap-[10px]'>
                        <img src={wishers3} alt="wishers3" />
                        <p><span className='font-semibold'>Cameron Williamson,</span> <span>CEO</span></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Wishers;