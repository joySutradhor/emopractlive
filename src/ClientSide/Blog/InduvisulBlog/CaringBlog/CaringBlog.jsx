// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaringBlog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='sectionGap'>
            <p className='caringBlogSmall'>22nd Mar 2024</p>
            <div>
                <div className='h-[284px] md:h-[350px] lg:h-[550px] 2xl:h-[850px]'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                </div>
                <h3 className='caringTitle'>Caring for Geriatric Patients</h3>
                <p className='caringParaText'>Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. <br /> <br />

                    Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall </p>
            </div>

            <div className="slider-container pt-[60px] md:pt-[80px] lg:pt-[100xp]  xl:pt-[100px] 2xl:pt-[100px] ">
                <Slider {...settings} >
                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1  pb-[30px] '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]'>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of  life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 pl-[10px] '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Slider>
            </div>

            {/* for mobile devices */}
            <div className='pt-[70px] md:pt-[80px] lg:pt-[100xp]  xl:hidden'>
                <div className='lg:text-center'>
                    <h3 className='ourBlogTitle'>Trending Blog</h3>
                </div>
                <div className="slider-container  ">
                    <Slider {...settings} >
                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1  pb-[30px] '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]'>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of  life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 pl-[10px] '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Slider>
                </div>
            </div>

            <div className='xl:block xl:pt-[100px] 2xl:pt-[200px] hidden'>
                <div className='lg:text-center'>
                    <h3 className='ourBlogTitle'>Trending Blog</h3>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-x-[20px] lg:gap-y-[30px]'>
                    <Link to="/induvisual-blog">
                        <div className='  '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=''>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className='  '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* video  */}
            <div className='pt-[60px] md:pt-[80px] xl:pt-[100px] 2xl:pt-[200px] md:h-[450px] 2xl:h-[794px]'>
                <div className='w-full h-[410px] md:pb-[50px] md:h-[450px] lg:h-[600px] 2xl:h-[764px]'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719386257/Emopract/video_zrgrnw.jpg" alt="" />
                </div>
            </div>
        </div >
    );
};

export default CaringBlog;