"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ skillData }) => {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "# of Questions",
        data: [skillData.score, skillData.total - skillData.score],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // To create a ring/doughnut effect
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" bg-white p-6 rounded-lg border border-gray rounded-base my-2  w-full ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium mb-2">Question Analysis</h3>
        <h3 className="text-lg font-medium mb-2 text-blue-800">
          {skillData.score}/{skillData.total}
        </h3>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        <span className="text-sm text-gray-800 font-semibold">
          You scored {skillData.score} questions correct out of{" "}
          {skillData.total}.
        </span>{" "}
        However, it still needs some improvements.
      </p>
      <div className="flex justify-center m-3">
        <div className="w-5/12">
          {" "}
          {/* Set custom size */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
