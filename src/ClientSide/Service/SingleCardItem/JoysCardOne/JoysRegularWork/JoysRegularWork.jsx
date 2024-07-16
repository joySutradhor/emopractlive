/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoysRegularWork = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='sectionGap'>
            <div>
                <div className='joysRegularWorkImgParent'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                </div>
                <h3 className='joysTitle'>Regular Work</h3>

                <p className='joysPara'>The mundane matters of everyday life take up a lot of time and energy Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years.

                    <br /> <br />
                    Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. </p>
            </div>

            {/* ======== slider cards ========= */}

            <div className="slider-container">
                <Slider {...settings}>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Regular work</h3>
                            <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Regular work</h3>
                            <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Regular work</h3>
                            <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Regular work</h3>
                            <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default JoysRegularWork;