/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutOurStory = () => {
  return (
    <div>
      <div className="sectionGap">
        <div className="">
          <p className="ourStorySmallAbout">Our Story</p>

          <p className="ourServicePara pb-[15px] 2xl:pb-[25px]">We are a group of enthusiastic, affectionate and trained personnel to accompany you in your journey of life. Our team looks forward to being with you, by you, like a family member. The greatest happiness comes from knowing that there is someone to rely on</p>

          <div className="w-full h-[222px] 2xl:h-[1043px]">
            <img className=" " src="./graph.png" alt="" />
          </div>

          <h3 className="ourStoryTitle pt-[60px] 2xl:pt-[200px]">
            what has been the impetus behind emopract?{" "}
          </h3>
        </div>
      </div>

      {/* --- doctors card =------ */}
      <div className="bg-[#7EA254] relative mt-[187px] 2xl:mt-[300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className=" flex justify-center w-full absolute top-[-127px] 2xl:top-[-200px] ">
              <div className="flex justify-center  ">
                <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg")] bg-no-repeat bg-cover bg-center h-[231px] w-[274px] lg:w-[300px] lg:h-[250px] 2xl:w-[498px] 2xl:h-[366px] rounded-[10px]'>
                  <div className="flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName">Gourab Nath Ghosh</h4>
                      <p className="storyDoctorDes">
                        <i>paffectionately - GG</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center hidden md:block md:pl-[20px] 2xl:pl-[40px] ">
                <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg")] bg-no-repeat bg-cover bg-center h-[231px] w-[274px] rounded-[10px] lg:w-[300px] lg:h-[250px] 2xl:w-[498px] 2xl:h-[366px]'>
                  <div className="flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName">Gourab Nath Ghosh</h4>
                      <p className="storyDoctorDes">
                        <i>paffectionately - GG</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center pt-[135px] md:hidden ">
                <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg")] bg-no-repeat bg-cover bg-center h-[231px] w-[274px] rounded-[10px] '>
                  <div className="flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName">Gourab Nath Ghosh</h4>
                      <p className="storyDoctorDes">
                        <i>paffectionately - GG</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-[25px] px-[53px] md:pt-[180px] 2xl:pt-[250px] 2xl:px-[200px]">
          <p className="ourStoryPara">
            Both GG and Suvo (as they are addressed affectionately) believe in a
            positive and empowered work environment, creating true corporate
            social impact. The fruitful fusion of arts, culture, social causes,
            livelihood opportunities, and a spontaneous joie de vivre brings us
            together. Team Emopract is built specifically to serve elders. It
            comprises a group of gender diverse talented young professionals.
            These handpicked and meticulously trained individuals manage
            finance, human assets, social media, marketing innovations,
            blogging, technology integration, creative event management…a host
            of factors to ensure wellness and joys of living for senior citizens
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurStory;
