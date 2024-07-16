// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoSend } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <div className='bg-[#D1D1D1] mt-[187px] 2xl:mt-[280px]  relative'>
            <div className='absolute  top-[-127px]  lg:top-[-80px] xl:top-[-110px] 2xl:top-[-150px] grid justify-center w-full '>
                <div className=' bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] rounded-[10px] shadow-xl lg:grid lg:grid-cols-2 justify-center items-center'>
                    <div className='footerTopSubParent'>
                        <div className='footerTopImg'>
                            <img className='h-full w-full object-cover rounded-full' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719344043/Emopract/footerTopImg_ldqzbq.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className='footerTopTitle'>we take care all your needs</h3>
                        </div>
                        <div>
                            <BsWhatsapp className='text-[30px] lg:text-[40px] 2xl:text-[70px] text-[#7EA254]' />
                        </div>
                        <div className=''>

                        </div>
                    </div>

                    <div className='flex justify-center items-center text-center border-t-[1px] border-[#7EA254] lg:border-none px-[32px]'>
                        <div className='text-center pt-[20px] md:pt-[40px]'>
                            <button className='footerTopBtn'>Request Call Back</button>
                            <h4 className='footerTopnumber'>+1800 78945 685</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* foooter content */}
            <div className='pt-[187px] md:pt-[250px] lg:pt-[200px] xl:pt-[300px] 2xl:pt-[350px]'>
                <div className='px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-[35px] gap-y-[35px]'>
                    <div>
                        <div className='footerLogoparent'>
                            <img className='h-full w-full object-cover ' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="" />
                        </div>
                        <p className='footerMenuText pt-[10px] pb-[15px] md:pt-[15px] md:pb-[20px] 2xl:pt-[40px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='flex space-x-[5px] md:space-x-[6px] '>
                            <FaFacebook className='footerSocailIcon' />
                            <FaLinkedinIn className='footerSocailIcon' />
                            <FaPinterest className='footerSocailIcon' />
                            <FaXTwitter className='footerSocailIcon' />
                            <BsWhatsapp className='footerSocailIcon' />
                            <FaInstagram className='footerSocailIcon' />
                        </div>
                    </div>

                    <div>
                        <h2 className='footerMenuTextTitle'>facilities</h2>
                        <p className='footerMenuText'>About Us</p>
                        <p className='footerMenuText'>Accommodations</p>
                        <p className='footerMenuText'>Causes Case</p>
                        <p className='footerMenuText'>Blog</p>
                        <p className='footerMenuText'>Contact Us</p>
                      
                        <p className='footerMenuText' ><Link to="/terms-of-use">Terms of Use</Link></p>
                        <p className='footerMenuText'><Link to="/privacy-policy">Privacy Policy</Link></p>
                    </div>

                    <div>
                        <h2 className='footerMenuTextTitle'>emopract pvt ltd</h2>
                        <p className='footerMenuText'>Anthony Benito 510 E Main </p>
                        <p className='footerMenuText'>Street Norwich CT 785478</p>
                        <p className='footerMenuText'>Mobile : +1 (2) 345 6789</p>
                        <p className='footerMenuText'>Fax : +1 (2) 345 6789</p>
                        <p className='footerMenuText'>contact@example.com</p>
                    </div>

                    <div>
                        <h2 className='footerMenuTextTitle'>newsletter</h2>
                        <p className='footerMenuText'>Nunc tincidunt mollis dui in tempor. Duis ultricies libero sit amet. </p>
                        <div className='relative inline-block'>
                            <input
                                type="text"
                                placeholder='enter your mail here'
                                className='text-[8px] md:text-[10px] font-Varela p-[10px] pr-[40px] font-normal w-full rounded-full outline-none mt-[15px]'
                            />
                            <div className='absolute right-2 top-1/2 transform -translate-y-1/4 h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center outline-none'>
                                <IoSend className='text-[#7EA254] text-[12px]' />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] '>
                    <div className='flex justify-between items-center space-x-[40px]'>
                        <p className='footerMenuText'>Copyright © Emopract 2024. Designed and Developed Ethically By <span><Link to="https://www.ethicalden.com/" target="_blank" className='underline'>Ethical Den</Link></span></p>
                        <p className='footerMenuText'>Terms & Conditions    Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;