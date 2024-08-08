import React from "react";

const SkillCard = ({ handleEdit }) => {
  return (
    <div className=" flex bg-white p-6 rounded-lg border border-gray rounded-base my-2 w-full">
      <div className="flex items-center w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1920px-HTML5_logo_and_wordmark.svg.png"
          alt="html"
          className="w-12 h-12"
        />
        <div>
          <div className="text-base font-bold ml-5">
            Hyper Text Markup Language
          </div>
          <div className="text-sm font-light text-gray-800 ml-5 ">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </div>
        </div>
      </div>

      <div>
        <button
          className="bg-blue-950 rounded-lg p-3 text-white font-semibold"
          onClick={handleEdit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
