import React from 'react'

export const GetCompanyName = () => {
  const company = "Google";

  return (
    <div className="bg-violet-400 w-full h-40 p-10">
      <h2 className="text-2xl text-center mb-5">Array Rendering</h2>
      <div className="bg-amber-200 h-10 w-70 flex justify-center items-center mx-auto">
        <p>{company}</p>
      </div>
    </div>
  );
}