import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import ProjectIcon from "./Icons/ProjectIcon";
import TaskIcon from "./Icons/TaskIcon";
import MessageIcon from "./Icons/MessageIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import SupportIcon from "./Icons/SupportIcon";

export default function Section({ name }) {
  let component;

  switch (name) {
    case "Home":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <HomeIcon className="group-hover:text-purple-200 "></HomeIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <HomeIcon className="group-hover:text-purple-800"></HomeIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
    case "Projects":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <ProjectIcon className="group-hover:text-purple-200 "></ProjectIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <ProjectIcon className="group-hover:text-purple-800"></ProjectIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
    case "Tasks":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <TaskIcon className="group-hover:text-purple-200 "></TaskIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <TaskIcon className="group-hover:text-purple-800"></TaskIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
    case "Messages":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <MessageIcon className="group-hover:text-purple-200 "></MessageIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <MessageIcon className="group-hover:text-purple-800"></MessageIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
    case "Settings":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <SettingsIcon className="group-hover:text-purple-200 "></SettingsIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <SettingsIcon className="group-hover:text-purple-800"></SettingsIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
    case "Support":
      component = (
        <>
          <div className="lg:hidden border border-gray-50 rounded-[4px] group py-1 flex justify-center">
            <SupportIcon className="group-hover:text-purple-200 "></SupportIcon>
          </div>
          <button className="lg:flex gap-4 items-center hover:bg-purple-200 py-1 px-3 border border-gray-50 rounded-[4px] group hidden">
            <SupportIcon className="group-hover:text-purple-800"></SupportIcon>
            <span className="font-semibold group-hover:text-purple-800">
              {name}
            </span>
          </button>
        </>
      );
      break;
  }
  return component;
}
