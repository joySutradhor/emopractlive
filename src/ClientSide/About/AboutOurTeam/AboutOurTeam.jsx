/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Kyle Macdonald",
    title: "Medical Specialist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "Jane Doe",
    title: "Nursing Supervisor",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
];

const teamMembers2xL = [
  {
    name: "Kyle Macdonald",
    title: "Medical Specialist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "Jane Doe",
    title: "Nursing Supervisor",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
];

const AboutOurTeam = () => {
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const largeSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  const largeXLSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const large2XLSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };

  return (
    <div className="sectionGap">
      <div className="lg:text-center md:text-center xl:text-center 2xl:text-center">
        <p className="ourServiceSmall">Our Team</p>
        <h3 className="ourServiceTitle">Most Expert People</h3>
        <div className="ourServieParaTextParent">
          <p className="ourServicePara">
            Do you want to live in a place full of comfort and convenience,
            where electricity is produced by itself and you also save on it?
            With us, it can come true faster than you think.
          </p>
        </div>
      </div>

      {/* ======== slider cards mobile ========= */}
      <div className="slider-container pt-[35px] md:pb-[60px] lg:hidden">
        <Slider {...mobileSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="">
              <div className="joysSliderImgParent relative">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <div className="absolute bottom-0">
                  <div className="teamContentParent">
                    <h3 className="joysFirstSliderTitle">{member.name}</h3>
                    <p className="aboutTeamSubtitle">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ======== slider cards large ========= */}
      <div className="slider-container pt-[35px] md:pb-[60px] hidden lg:block xl:hidden">
        <Slider {...largeSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2 pb-[20px]">
              <div className="joysSliderImgParent relative">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <div className="absolute bottom-0">
                  <div className="teamContentParent">
                    <h3 className="joysFirstSliderTitle">{member.name}</h3>
                    <p className="aboutTeamSubtitle">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ======== slider cards xl ========= */}
      <div className="slider-container pt-[35px] md:pb-[60px] hidden lg:hidden xl:block 2xl:hidden">
        <Slider {...largeXLSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2 pb-[30px]">
              <div className="joysSliderImgParent relative">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <div className="absolute bottom-0">
                  <div className="teamContentParent">
                    <h3 className="joysFirstSliderTitle">{member.name}</h3>
                    <p className="aboutTeamSubtitle">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ======== slider cards 2xl ========= */}
      <div className="slider-container pt-[35px] md:pb-[60px] hidden lg:hidden xl:hidden 2xl:block">
        <Slider {...large2XLSettings}>
          {teamMembers2xL.map((member, index) => (
            <div key={index} className="px-2 pb-[50px]">
              <div className="joysSliderImgParent relative">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <div className="absolute bottom-0">
                  <div className="teamContentParent">
                    <h3 className="joysFirstSliderTitle">{member.name}</h3>
                    <p className="aboutTeamSubtitle">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutOurTeam;
