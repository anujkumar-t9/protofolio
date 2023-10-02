import Image from "next/image";
import pic from "../../public/anuj-pic.png";
import ball from "../../public/ball.svg";


export default function Home() {
 
  return (
    <div className="py-20">

      <div className="ml-10 pl-5 justify-self-auto text-centre "> 
        <h1 className="font-bold text-4xl text-grey ">Hey! It's me Anuj</h1>
        <p className="font-bold text-grey ml-8 pl-12 pt-2">Explore More</p>
      </div>
      <Image src={pic} alt="Anuj Pic"></Image>

      <div className=" absolute  ml-16 pl-10 mt-10 pt-8 mx-auto">

      <p className="text-sm text-black ">Get me resume 👇</p>
      <button className="text-xs text-white bg-teal hover:bg-sky rounded-lg ml-3 my-2 border-1 w-24 h-8" >Download CV</button>
        
      </div>
      
      <div className="">
        <Image className="" src={ball} alt="ball"></Image>
      </div>
    </div>
  );

}

