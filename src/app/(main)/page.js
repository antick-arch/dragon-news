import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://dragon-news-omega-nine.vercel.app/categories.json",
  );
  const data = await res.json();

  return (
    <div className="grid grid-cols-12 container mx-auto my-20">
      <div className="col-span-3">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">All Category</h2>
        <ul className="flex flex-col gap-3">
          {
            data.map((category)=>(
              <li key={category.id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-xl">{category.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="col-span-6 bg-gray-400">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News Home</h2>
      </div>
      <div className="col-span-3 bg-red-300">
        <h2 className="text-xl font-bold text-[#403F3F] mb-5">Login With</h2>
      </div>
    </div>
  );
}
