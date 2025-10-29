import React from 'react';
import ProductImg from '../assets/Product.png';
import Logo1 from '../assets/image_1.svg';
import Logo2 from '../assets/image_2.svg';
import Logo3 from '../assets/image_3.svg';
import Logo4 from '../assets/image_4.svg';
import Logo5 from '../assets/image_5.svg';

const Product = () => {
    return (
        <div className='flex items-center justify-center flex-col w-[100%] mx-auto'>
            <img src={ProductImg} alt="product-img" />
            <div className='w-full xl:w-[1030px] flex gap-[40px] px-[20px] xl:px-0 justify-between items-center overflow-x-scroll xl:overflow-x-visible pt-[40px] mb-[40px]'>
                <img src={Logo1} alt="logo1" className='w-[120px] md:w-[200px]' />
                <img src={Logo2} alt="logo2" className='w-[120px] md:w-[200px]' />
                <img src={Logo3} alt="logo3" className='w-[120px] md:w-[200px]' />
                <img src={Logo4} alt="logo4" className='w-[120px] md:w-[200px]' />
                <img src={Logo5} alt="logo5" className='w-[120px] md:w-[200px]' />
            </div>
        </div>
    );
};

export default Product;