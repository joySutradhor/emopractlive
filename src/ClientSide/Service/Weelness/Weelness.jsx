/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const joyItems = [
    {
        link: "/joy-card-one",
        imgSrc: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg",
        title: "Regular work",
        subtitle: "The mundane matters of everyday life take up a lot of time and energy"
    },
    {
        link: "/joy-card-two",
        imgSrc: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg",
        title: "Healthy Living",
        subtitle: "Maintaining a healthy lifestyle with regular exercise and proper diet"
    },
    {
        link: "/joy-card-three",
        imgSrc: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg",
        title: "Social Interaction",
        subtitle: "Engaging in social activities to stay connected and mentally active"
    },
    {
        link: "/joy-card-four",
        imgSrc: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg",
        title: "Hobbies and Interests",
        subtitle: "Pursuing hobbies and interests to enrich life experiences"
    }
];

const Weelness = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 450, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1536, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='sectionGap pt-[35px] md:pt-[60px]'>
            <div>
                <h3 className='joysTitle'>wellness</h3>
                <p className='joysPara'>Staying healthy is certainly the major component of a happy life. But it is certainly not the only one. Someone might be perfectly fit, yet may not be fine. We do not live by bread alone, and this is true for the basics of our existence. Once the primary needs of health and safety are met, there still remains the key component of staying well and living well – an aspect that is very often overlooked when it comes to our senior citizens. They have the time, but no one to spend it with; they have the means, but no motivation to utilize them fully. We can call this component the Joys of Life – the so-called trivialities and intangibles that add up to constitute a rich and full life. What might these be !! Here at Emopract we plan to address this and create smiles all around for the elders -- " Joys of Living "</p>
            </div>

            {/* ======== slider cards ========= */}
            <div className="slider-container">
                <Slider {...settings}>
                    {joyItems.map((item, index) => (
                        <Link to={item.link} key={index} className='px-2'>
                            <div>
                                <div className='joysSliderImgParent'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src={item.imgSrc} alt={item.title} />
                                </div>
                                <div className='text-center'>
                                    <h3 className='joysFirstSliderTitle'>{item.title}</h3>
                                    <p className='joysFirstSliderSubtitle'>{item.subtitle}</p>
                                    <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Weelness;
