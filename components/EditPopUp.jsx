import React from "react";

const EditPopUp = ({ skillData, handleInputChange, handleEdit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-10/12 sm:w-1/2 lg:w-1/3">
        <h3 className="text-lg font-semibold mb-4">Update Scores</h3>
        <div className="flex mb-4">
          <label className="block text-sm font-medium text-gray-700 w-3/4">
            Update Your Rank
          </label>
          <div>
            <input
              type="text"
              value={skillData.rank}
              name="rank"
              required
              onChange={(e) => handleInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {skillData.rank === "" && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>
        </div>
        <div className="flex mb-4">
          <label className="block text-sm font-medium text-gray-700  w-3/4">
            Update Your Percentile
          </label>
          <div>
            <input
              type="text"
              required
              name="percentile"
              value={skillData.percentile}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
            />
            {skillData.percentile === "" && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>
        </div>
        <div className="flex mb-4">
          <label className="block text-sm font-medium text-gray-700  w-3/4">
            Update Your Correct Answers (out of {skillData.total})
          </label>
          <div>
            <input
              type="text"
              name="score"
              required
              value={skillData.score}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {skillData.score === "" && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            disabled={
              skillData.rank === "" ||
              skillData.percentile === "" ||
              skillData.score === ""
            }
            onClick={handleEdit}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            disabled={
              skillData.rank === "" ||
              skillData.percentile === "" ||
              skillData.score === ""
            }
            onClick={handleEdit}
            className="bg-blue-950 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;
