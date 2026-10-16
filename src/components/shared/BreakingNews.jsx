import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
   const breakingNews = [
      {
        id: 1,
        title: "Bangladesh Announces New Education Policy",
      },
      {
        id: 2,
        title: "Technology Companies Introduce New AI Innovations",
      },
      {
        id: 3,
        title: "Global Markets See Major Changes Today",
      },
      {
        id: 4,
        title: "Scientists Make a Breakthrough in Medical Research",
      },
      {
        id: 5,
        title: "Bangladesh Cricket Team Prepares for Upcoming Series",
      },
      {
        id: 6,
        title: "Heavy Rainfall Expected in Several Parts of Bangladesh",
      },
      {
        id: 7,
        title: "New Smartphone Models Launch This Month",
      },
      {
        id: 8,
        title: "Government Announces New Digital Development Projects",
      },
      {
        id: 9,
        title: "World Leaders Meet to Discuss Climate Change",
      },
      {
        id: 10,
        title: "Cybersecurity Experts Warn About Online Scams",
      },
    ];
  
  return (
    <div className="container mx-auto flex justify-center items-center gap-3 bg-gray-200 p-2 mt-8">
        <div></div>
        <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee speed={100} pauseOnHover={true}>
        {
          breakingNews.map((news)=>(
            <span key={news.id} className="mx-2">{news.title}</span>
          ))
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
