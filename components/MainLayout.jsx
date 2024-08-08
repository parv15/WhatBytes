"use client";

import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineContactPage } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <MainHeader />
      <hr />

      <div className="flex  ">
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 md:hidden">
          <ul className="flex justify-around p-2">
            <li className="flex flex-col items-center hover:text-blue-800">
              <VscGraph className="text-2xl" />
              <Link href="/">DashBoard</Link>
            </li>
            <li className="flex flex-col items-center hover:text-blue-800">
              <SlBadge className="text-2xl" />
              <Link href="/">Skill Test</Link>
            </li>
            <li className="flex flex-col items-center hover:text-blue-800">
              <MdOutlineContactPage className="text-2xl" />
              <Link href="/">Internships</Link>
            </li>
          </ul>
        </div>

        {/* Sidebar for Desktop */}
        <div className="hidden md:flex md:flex-col md:w-1/6 md:border-r md:border-gray-300 md:h-full">
          <ul className="space-y-2 p-4">
            <li className="flex items-center p-2 hover:bg-gray-100 hover:text-blue-800 rounded-r-xl">
              <VscGraph className="mr-2" />
              <Link href="/">DashBoard</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 hover:text-blue-800 rounded-r-xl">
              <SlBadge className="mr-2" />
              <Link href="/skillTest">Skill Test</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 hover:text-blue-800 rounded-r-xl">
              <MdOutlineContactPage className="mr-2" />
              <Link href="/">Internships</Link>
            </li>
          </ul>
        </div>
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
