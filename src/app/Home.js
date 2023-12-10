import Image from "next/image";
import pic from "../../public/anuj-pic.png";
import { girdStyle } from "./page";



export default function Home() {

  return (
    <>
      <div className="pt-10 flex bg-sky-200 w-full h-full">
        <div className="pl-44">
          <Image src={pic} alt="anuj " />
        </div>

        <div className="mt-10 pl-10">
          <h1 className="text-6xl font-bold underline pt-10 pl-20 pb-2">aK</h1>
          <h1 className="text-3xl font-bold tracking-wide mb-3">Its Me Anuj!</h1>

          <div className="mb-2 text-lg tracking-wide font-semibold">
            <p>Design  Built Think Delivered Outperform</p>
          </div>

          <div className="text-sm">
            <p>Im 19 year, Fresh Tech and Finance Enthusiastic. Enjoy learing new skills.</p>
            <p>Pursing Chartered Accountant or CA from ICAI along with Under Graduation</p>
            <p>B.Com Hon. in Accounts from PU or patliputra university.</p>
            <p>Complete 12th in Maths or PCM.</p>
            <p>Specialty in Tech and Finance Great Combination.</p>
          </div>


          <div className="mt-3">
            <p className="font-semibold">Eager to An Opportunity for intership/Job</p>
            <button className="mt-1 ml-16  w-32 h-8 border-2 tracking-wide font-semibold border-current hover:bg-black hover:text-white">
              Get resume
            </button>
          </div>
        </div>
      </div>

      {/* Above mid secation of my profile  */}
      <div>
        <div>

        </div>
        <div className="mt-10 mx-72 font-bold text-2xl underline decoration-4 decoration-sky-400"><h1 className="mx-64 ">Quick View</h1></div>
        <div className="mx-72 font-medium text-sm"><span className="mx-60">there are quick overview</span></div>

        {/* Gird Design */}
        <ul className="grid grid-cols-3 gap-6 my-10 ml-24">
          <li className={girdStyle}><p>Finance</p></li>
          <li className={girdStyle}><p>Technology</p></li>
          <li className={girdStyle}><p>AI/AGI</p></li>
          <li className={girdStyle}><p>Community</p></li>
          <li className={girdStyle}><p>Writing</p></li>
          <li className={girdStyle}><p>Sports</p></li>

        </ul>

        <div className="ml-72">
          <button className="ml-72 rounded-xl w-24 h-8 bg-sky-400 hover:bg-sky-500 font-medium ">
            View All
          </button>
        </div>
      </div>

      {/* mid section */}
      <div className="mt-24 mb-10">
        <div className="mt-10 mx-72 font-bold text-2xl underline decoration-4 decoration-sky-400"><h1 className="mx-64 ">Protofolio</h1></div>
        <div className="mx-72 font-medium text-sm"><span className="mx-52">click the cards to see my Protofoliorelated catagory</span></div>

        <div>
          <div className="w-36 h-52 bg-zinc-200 shadow-xl">
            <h1>A</h1>
            <h2>Header</h2>
            <p></p>
          </div>

        </div>
      </div>
    </>
  );

}
