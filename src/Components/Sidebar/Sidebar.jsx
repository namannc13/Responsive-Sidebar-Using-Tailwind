import React from "react";
import EduStream from "./EduStream/EduStream";
import Search from "./Search/Search";
import Section from "./Section/Section";
import Profile from "./Profile/Profile";

export default function Sidebar() {
  return (
    <nav className="m-4 flex flex-col justify-between border rounded-xl bg-gray-50 shadow-md">
      <div className=" m-4 flex flex-col gap-4">
        <EduStream />
        <Search />
        <Section name="Home" />
        <Section name="Projects" />
        <Section name="Tasks" />
        <Section name="Messages" />
      </div>

      <div className=" m-4 flex flex-col gap-4">
        <Section name="Settings" />
        <Section name="Support" />
        <div className="border border-gray-300"></div>
        <Profile />
      </div>
    </nav>
  );
}
