
import React from "react";

const SyllabusWiseAnalysis = () => {
  const data = [
    { topic: "HTML Tools, Forms, History", percentage: 80 },
    { topic: "Tags & References in HTML", percentage: 60 },
    { topic: "Tables & References in HTML", percentage: 24 },
    { topic: "Tables & CSS Basics", percentage: 96 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray rounded-base w-full my-2 ">
      <h3 className="text-lg font-medium mb-4">Syllabus Wise Analysis</h3>
      {data.map((item, index) => (
        <div key={index} className="my-7">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              {item.topic}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {item.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                item.percentage >= 90
                  ? "bg-green-500"
                  : item.percentage >= 75
                  ? "bg-blue-500"
                  : item.percentage >= 50
                  ? "bg-orange-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusWiseAnalysis;
