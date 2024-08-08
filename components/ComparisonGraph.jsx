"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ComparisonGraph = ({ skillData }) => {
  const data = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70],
    datasets: [
      {
        label: "No of Students",
        data: [0, 20, 30, 50, 90, 70, 60, 65],
        fill: false,
        borderColor: "lightblue",
        tension: 0.1,
        pointRadius: 3,
        pointBackgroundColor: "lightblue",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray rounded-base my-2  w-full ">
      <h3 className="text-lg font-medium mb-2">Comparison Graph</h3>
      <p className="text-sm text-gray-500 mb-4">
        You scored {skillData.percentile}% percentile which is lower than the
        average percentile 72% of all the engineers who took this assessment.
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;
