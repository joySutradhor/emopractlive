// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EventGallery = () => {
  return (
    <div className="sectionGap">
      {/* mobile screen */}
      <div className="block md:hidden">
        <p className="eventGallarySmall">Events</p>
        <h2 className="eventGarlleryTitle">Trending events</h2>

        <div className="flex justify-between gap-x-[15px]">
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="img4">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719563524/Emopract/middleImg_seijua.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
            <div className="text-white">
              <p className="dateEvent">Date: 05-05-1998</p>
            </div>
            <div className="text-white">
              <h4 className="hoverTitleGallery">A non-profit organization</h4>
              <div className="flex items-center locationTextGallelry">
                <FaLocationDot className="mr-2" />
                <p>Contrary to popular belief, is not</p>
              </div>
              <button className="ParticipateBtn">Participate</button>
            </div>
          </div>
        </div>

        <div className="flex space-x-[15px]">
          <div>
            <div className="relative">
              <div className="img5">
                <img
                  className="h-full w-full  rounded-[10px] object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719350004/Emopract/img4_jysbzu.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="img6">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="right5">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="right6">
                <img
                  className="h-full w-full  rounded-[10px] object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719350004/Emopract/img4_jysbzu.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= four row ================ */}

        <div className="flex justify-between gap-x-[15px] ">
          <div className="relative">
            <div className="img3">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">Date: 05-05-1998</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">A non-profit organization</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>Contrary to popular belief, is not</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-[15px] pt-[15px]">
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349378/Emopract/image_1_ydzyp5.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349631/Emopract/imgtow_s3zhi8.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719349784/Emopract/img3_y7z7gq.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">Date: 05-05-1998</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">
                    A non-profit organization
                  </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="exploreMemberShip">Explore Membership </button>
      </div>

      {/* big screen */}
      <div className="hidden md:block">
        <p className="eventGallarySmall text-center">Events</p>
        <h2 className="eventGarlleryTitle text-center">Trending events</h2>

        <div
          className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px] "
        >
          {/*1,2,3 pic */}
          <div
            className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
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

          <div>
            {/* 4 and  5 pic */}
            <div
              className="flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px]"
            >
              <div className="w-1/3  2xl:h-[242px] xl:h-[242px] lg:h-[212px] md:h-[212px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/09rzDjL/image-1.png"
                  alt=""
                />
              </div>

              <div className=" w-2/3 2xl:h-[242px] xl:h-[242px] lg:h-[212px] md:h-[212px] ">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/ckKkGG2/image-2.png"
                  alt=""
                />
              </div>
            </div>

            {/* 6 and 7 pic */}
            <div
              className="flex 2xl:gap-x-[30px]  2xl:my-[30px]
            xl:gap-x-[30px]  xl:my-[30px] lg:gap-x-[15px]  lg:mt-[15px]
            md:gap-x-[15px]  md:mt-[15px]"
            >
              <div className="w-1/3  2xl:h-[478px] xl:h-[478px] lg:h-[448px] md:h-[448px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/VDY8ywF/image-3.png"
                  alt=""
                />
              </div>
              <div className="  w-2/3 2xl:h-[478px] xl:h-[478px] lg:h-[448px] md:h-[448px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/3srckzj/image-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* 8 pic */}
        <div className="2xl:h-[750px] xl:h-[750px] lg:h-[675px] md:h-[675px] 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px]">
          <img
            className="h-full w-full  rounded-[10px]"
            src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719563524/Emopract/middleImg_seijua.jpg"
            alt=""
          />
        </div>
        <div
          className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px] "
        >
          {/*1,2,3 pic */}
          <div
            className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
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

          <div>
            {/* 4 and  5 pic */}
            <div
              className="flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px]"
            >
              <div className="w-1/3  2xl:h-[242px] xl:h-[242px] lg:h-[212px] md:h-[212px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/09rzDjL/image-1.png"
                  alt=""
                />
              </div>

              <div className=" w-2/3 2xl:h-[242px] xl:h-[242px] lg:h-[212px] md:h-[212px] ">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/ckKkGG2/image-2.png"
                  alt=""
                />
              </div>
            </div>

            {/* 6 and 7 pic */}
            <div
              className="flex 2xl:gap-x-[30px]  2xl:my-[30px]
            xl:gap-x-[30px]  xl:my-[30px] lg:gap-x-[15px]  lg:mt-[15px]
            md:gap-x-[15px]  md:mt-[15px]"
            >
              <div className="w-1/3  2xl:h-[478px] xl:h-[478px] lg:h-[448px] md:h-[448px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/VDY8ywF/image-3.png"
                  alt=""
                />
              </div>
              <div className="  w-2/3 2xl:h-[478px] xl:h-[478px] lg:h-[448px] md:h-[448px]">
                <img
                  className="h-full w-full  rounded-[10px]"
                  src="https://i.ibb.co/3srckzj/image-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <button className="exploreMemberShip">Explore Membership </button>
      </div>
    </div>
  );
};

export default EventGallery;
