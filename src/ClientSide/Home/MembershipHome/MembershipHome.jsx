// eslint-disable-next-line no-unused-vars
import React from "react";

const MembershipHome = () => {
  return (
    <div className="bg-[#EDEDED] mt-[60px]">
      <div className="py-[51px] px-[36px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Our Membership
          </p>
          <h3 className="homeMemberShipTitle  text-center">
            our most popular membership package
          </h3>
          <p className="membershipPara 2xl:px-[300px] xl:px-[250px] lg:px-[50px] md:px-[30px] 2xl:text-center xl:text-center lg:text-center md:text-center">
            Do you want to live in a place full of comfort and convenience,
            where electricity is produced by itself and you also save on it?
            With us it can come true faster than you.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-y-[15px] cursor-pointer
        2xl:grid-cols-3 2xl:gap-x-[60px] 2xl:pt-[50px]  xl:pt-[40px] lg:pt-[40px]  md:pt-[40px] xl:grid-cols-3 xl:gap-x-[52px]
        lg:grid-cols-3 lg:gap-x-[40px] md:grid-cols-3 md:gap-x-[20px] "
        >
          <button className="membershipbtnOne">Annual Plan</button>
          <button className="membershipbtnTwo">Annual Plan</button>
          <button className="membershipbtnThree">Annual Plan</button>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
