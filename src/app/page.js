import Image from "next/image";
import pic from "../../public/anuj-pic.png";
import finPic from "../../public/finance.svg";
import presPic from "../../public/presentation.svg";
import techPic from "../../public/technology.svg";
import blogPic from "../../public/blog.svg";
import commPic from "../../public/community.svg";
import progPic from "../../public/programming.svg";

const girdStyle = "border rounded-lg bg-slate-400  hover:drop-shadow-xl h-16 w-52 hover:tracking-wide px-12 py-4 font-medium";
const cardsStyle = "mt-8 ml-10 w-72 h-84 rounded-lg bg-zinc-200 shadow-2xl drop-shadow-xl backdrop-blur-sm backdrop-opacity-20";
const cardTitleStyle = "my-6 ml-4 font-semibold text-lg tracking-wide"; 
const cardParaStyle = "mx-4 mt-8 mb-2"

const cardContent = [
                      "Finance inclined me the most, that why I doing CA along with Commerce in undergraduate. I always want to know mostly how things works in the business and startup world. VC, PE, IB, HF so called bulged bracket. Skill set I have MS Excel, Financial Valuation, Accounting, Taxation, Economics etc",
                      "I self-taught programming, learn python first programming language. Html, JavaScript, Css but mostly use TailwindCss instead for plain Css. I build projects as hobbies but that impact in real world. Website Terminal apps, Desktop apps, all done as small project.",
                      "Technology  like programming, new software, AI, ML etc. I follow them a lot have always watch closely as they change the world. I believe that people have great opportunity  to work in the field harness the enormous unchartered world.",
                      "Writing to any form means sharing, it can change world. It is about learning new things and then share to community so, it beneficial to whole humanity. That how we envelop . Blog post is new form interaction with world. Sharing gain knowledge and sharing the journey to inspired peoples. ",
                      "We are social creature. We share belief, help those who have less. That life all about. It all about sharing and caring to our community. Join some NGO do great work. It make you and them both happy.",
                      "Presentation it not limited to MS PowerPoint or business sales pitch. It about how well we explain our taught, plan and idea to other. It required great communication skill, verbal and non-verbal communication personality and some charm"
                    ]

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

      {/* Above mid secation of my profile  */}
      <div>
        <div>

        </div>
        <div className="mt-10 mx-72 font-bold text-2xl underline decoration-4 decoration-sky-400"><h1 className="mx-64 ">Quick View</h1></div>
        <div className="mx-72 font-medium text-sm"><span className="mx-60">there are quick overview</span></div>

        {/* Gird Design */}
        <ul className="grid grid-cols-3 gap-6 my-10 ml-24">
          <li className={girdStyle}><p>Finance</p></li>
          <li className={girdStyle}><p>Programming</p></li>
          <li className={girdStyle}><p>Technology</p></li>
          <li className={girdStyle}><p>Community</p></li>
          <li className={girdStyle}><p>Writing</p></li>
          <li className={girdStyle}><p>Presentation</p></li>
          
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

      <div className="grid grid-cols-3 gap-10 ">
        <div className={cardsStyle}>
          <Image className="my-4 ml-4 w-12 h-8" src={finPic} alt='Finance Icon'></Image>
          <h2 className={cardTitleStyle}>Finance</h2>
          <p className={cardParaStyle}>{cardContent[0]} </p>
        </div>

        <div className={cardsStyle}>
        <Image className="my-4 ml-4 w-12 h-8" src={progPic} alt='Programming Icon'></Image>
          <h2 className={cardTitleStyle}>Programming</h2>
          <p className={cardParaStyle}>{cardContent[1]} </p>
        </div>

        <div className={cardsStyle}>
        <Image className="my-4 ml-4 w-12 h-8" src={techPic} alt='Tech Icon'></Image>
          <h2 className={cardTitleStyle}>Technology</h2>
          <p className={cardParaStyle}>{cardContent[2]} </p>
        </div>

        <div className={cardsStyle}>
        <Image className="my-4 ml-4 w-12 h-8" src={blogPic} alt='blog icon'></Image>
          <h2 className={cardTitleStyle}>Writing</h2>
          <p className={cardParaStyle}>{cardContent[3]} </p>
        </div>

        <div className={cardsStyle}>
          <Image className="my-4 ml-4 w-12 h-8" src={commPic} alt='community icon'></Image>
          <h2 className={cardTitleStyle}>Community</h2>
          <p className={cardParaStyle}>{cardContent[4]} </p>
        </div>

        <div className={cardsStyle}>
          <Image className="my-4 ml-4 w-12 h-8" src={presPic} alt='presentation icon'></Image>
          <h2 className={cardTitleStyle}>Presentation</h2>
          <p className={cardParaStyle}>{cardContent[5]} </p>
        </div>

      </div>
    </div>
    </>
  );

}

