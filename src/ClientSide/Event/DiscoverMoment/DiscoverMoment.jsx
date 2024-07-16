// eslint-disable-next-line no-unused-vars
import React from "react";

const DiscoverMoment = () => {
  return (
    <div className="sectionGap ">
      <div className="">
        <p
          className="eventGallarySmall 2xl:text-center xl:text-center
        lg:text-center md:text-center"
        >
          Discover Moments
        </p>
        <h2
          className="eventGarlleryTitle 2xl:text-center xl:text-center
        lg:text-center md:text-center"
        >
          a visual journey through our gallery
        </h2>
      </div>

      <div
        className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[30px]  md:gap-x-[30px]"
      >
        <div className=" ">
          <div className="img1 w-full">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
              alt=""
            />
          </div>
          <div className="img2 w-full">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="img3 w-full">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="img4 w-full 2xl:pt-[15px] xl:pt-[15px] lg:pt-[15px]
      md:pt-[15px]"
      >
        <img
          className="h-full w-full  rounded-[10px]"
          src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719563524/Emopract/middleImg_seijua.jpg"
          alt=""
        />
      </div>

      <div>
        <button className="discoverKnowMore">Know More</button>
      </div>
    </div>
  );
};

export default DiscoverMoment;
