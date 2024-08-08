import React from "react";
import { FaTrophy } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { BiCheckboxChecked } from "react-icons/bi";

const SkillStatus = ({ skillData }) => {
  return (
    // <div className="flex-grow p-2">

    <div className=" bg-white p-6 rounded-lg border border-gray rounded-base w-full my-2   ">
      <div className="text-base font-bold mb-2">Quick Statistics</div>
      <div className="flex justify-evenly flex-wrap md:flex-nowrap">
        <div className="flex items-center md:border-r md:border-gray p-2 xs:w-full md:pr-8">
          <div className="bg-gray-100 p-2 rounded-full mr-2">
            <FaTrophy style={{ color: "gold", fontSize: "1.5rem" }} />
          </div>
          <div>
            <div className="text-base font-bold">{skillData.rank}</div>
            <div className="text-sm font-normal text-gray-800">YOUR RANK</div>
          </div>
        </div>
        <div className="flex items-center md:border-r md:border-gray xs:w-full p-2 md:pr-8">
          <div className="bg-gray-100 p-2 rounded-full mr-2">
            <FaRegClipboard style={{ color: "gold", fontSize: "1.5rem" }} />
          </div>
          <div>
            <div className="text-base font-bold">{skillData.percentile}%</div>
            <div className="text-sm font-normal text-gray-800">PERCENTILE</div>
          </div>
        </div>
        <div className="flex items-center  p-2 xs:w-full">
          <div className="bg-gray-100 p-2 rounded-full mr-2">
            <BiCheckboxChecked style={{ color: "green", fontSize: "1.5rem" }} />
          </div>
          <div>
            <div className="text-base font-bold">
              {skillData.score}/{skillData.total}
            </div>
            <div className="text-sm font-normal text-gray-800">
              CORRET ANSWERS
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>/
  );
};

export default SkillStatus;
