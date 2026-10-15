import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container mx-auto flex justify-center items-center gap-3 bg-gray-200 p-2 mt-8">
        <div></div>
        <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
