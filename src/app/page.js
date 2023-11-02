import Image from "next/image";
import pic from "../../public/anuj-pic.png";


export default function Home() {
 
  return (
    <>
      <div className="pt-10 flex bg-sky-200 w-full h-full">
        <div className="pl-44">
            <Image src={pic} alt="anuj "/>
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
    </>
  );

}

