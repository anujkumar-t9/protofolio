import pic from "../../../public/anuj-pic2.png";
import Image from "next/image";


const h1Style = " my-1 py-1 text-lg font-bold text-grey"
const spanStyle = "text-xs "
const ulSytle = "list-disc  list-inside my-1"
export default function About(){
    
    return (

        <>
            <h1 className="py-20 ml-20 pl-5 text-4xl text-pink font-bold">About Me</h1>

            <div className="ml-20 mb-20">

                <div className="mx-auto border-2 border-pink w-40 h-50 rounded-full">
                    <Image src={pic} className="border-2  border-pink rounded-full"></Image>
                </div>
                    <div className="mx-auto px-2 py-2 text-grey font-semiold text-lg">
                        <p>Finance & Tech Enthusiast | Creative Mind </p>
                    </div>
                <div  className="mt-10 w-4/5 border-black border-2 h-0 ">
                </div>

                <div className="mt-">
                    <h1 className={h1Style} >Aadamic</h1>
                    <ul className={ulSytle}>
                        <li>CA Aspirant</li>
                        <li>Purinsing Under Grad</li>
                        <span className={spanStyle}>Purinsing BCom Hons in Accounts</span>
                        <li>Class 12th </li>
                        <span className={spanStyle}>BESB 57%, Maths,PCM </span>
                        <li>Class 10th</li>
                        <span className={spanStyle}>CBSC 77% </span>
 
                    </ul>
                </div>

                <div  className="mt-10 w-4/5 border-black border-2 h-0 ">
                </div>

                <div className="mt">
                    <h2 className={h1Style}>Skills</h2>
                        <p>Progamming & Techology</p>
                        <ul className={ulSytle}>
                            <li> Htmls & CSS</li>
                            <li>Python </li>
                            <span className={spanStyle}>Framwork like: Django, Flask</span>
                            <li>Javascript</li>
                            <span  className={spanStyle}>Framwork like React, Vue, Nextjs, Nodejs</span>
                            <li>Some Baisc of C, C++, C#and SQl</li>
                            <span  className={spanStyle}>Project: Like console programs of calculator, games</span>
                        </ul>
                </div>

                <div  className="mt-10 w-4/5 border-black border-2 h-0 ">
                </div>

                <h1 className={h1Style}>Interships & Work Ex.</h1>
                <p className={spanStyle}>As a Fresher have not so much here</p>
                <ul className={ulSytle}>
                    <li>FreeLancing Webdesign</li>
                </ul>
                
                <div  className="mt-10 w-4/5 border-black border-2 h-0 ">
                </div>

                <h1 className={h1Style}>Hobbies</h1>
                <p>Like Competaive Sports like Racing, MMA, Table Taines</p>

            </div>
        
        </>
    )
}