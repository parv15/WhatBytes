import React from "react";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <img
          src="https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png"
          alt="logo"
          className="w-25 h-6"
        />
      </div>
      <div className="flex items-center space-x-2 border border-gray p-2 rounded-md">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
          alt="user"
          className="w-5 h-6 rounded-full object-contain" // Ensures the image respects the set width and height
        />
        <div className="text-xs font-semibold">Rahil Siddique</div>
      </div>
    </div>
  );
};

export default MainHeader;
