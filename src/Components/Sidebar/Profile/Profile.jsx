import React from "react";

export default function Profile() {
  return (
    <>
      <img
        src="/cutepfp.jpg"
        alt=""
        className="h-8 w-8 border rounded-full lg:hidden"
      />

      <div className="lg:flex items-center gap-4 hidden">
        <img
          src="/cutepfp.jpg"
          alt=""
          className="h-12 w-12 border rounded-full"
        />
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-sm">Pichkari Kumar</span>
          <span className="text-xs">pichkari@gmail.com</span>
        </div>
      </div>
    </>
  );
}
