import Link from "next/link";
import React from "react";

const LeftSideBar = ({data}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F] mb-5">
        All Category
      </h2>
      <ul className="flex flex-col gap-3">
        {data.map((category) => (
          <li
            key={category.id}
            className="bg-slate-100 p-2 rounded-md font-bold text-center text-xl"
          >
            <Link href={`categories/${category.id}`} className="">{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
