"use client";
import React, { useState } from "react";
import SkillCard from "../../components/SkillCard";
import SkillStatus from "../../components/SkillStatus";
import ComparisonGraph from "../../components/ComparisonGraph";
import QuestionAnalysis from "../../components/QuestionAnalysis";
import SyllabusWiseAnalysis from "../../components/SyllabusWiseData";
import EditPopUp from "../../components/EditPopUp";

const Page = () => {
  const [skillData, setSkillData] = useState({
    rank: 1,
    percentile: 50,
    score: 10,
    total: 20,
  });
  const [showEdit, setShowEdit] = useState(false);

  const handleInputChange = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      {showEdit && (
        <EditPopUp
          skillData={skillData}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
        />
      )}
      <div className="mx-4">
        <h2 className="text-base font-normal text-gray-800">Skill Test</h2>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-2 overflow-hidden">
        <div className="m-3 min-w-[300px] md:w-7/12">
          <SkillCard handleEdit={handleEdit} />
          <SkillStatus skillData={skillData} />
          <ComparisonGraph skillData={skillData} />
        </div>
        <div className="m-3 min-w-[300px] md:w-5/12 xs:mb-10">
          <SyllabusWiseAnalysis />
          <QuestionAnalysis skillData={skillData} />
        </div>
      </div>
    </>
  );
};

export default Page;
