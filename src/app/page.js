import Image from "next/image";
import pic from "../../public/anuj-pic.png";
import ball from "../../public/ball.svg";


export default function Home() {
 
  return (
    <div className="py-20">
      
      <Image src={pic} alt="Anuj Pic"></Image>

      <div className=" absolute text-grey ml-16 pl-12 mt-12 pt-8">
        <h1 className="font-bold">Hey! It's me Anuj</h1>

        <div className="block">
        <p className="text-sm">Get me resume 👇</p>
        <button className="text-xs text-white hover:shadow-xl rounded-lg ml-3 my-2 border-1 bg-black w-24 h-8" >Download CV</button>
        </div>
      </div>
      
      <div className="">
        <Image className="" src={ball} alt="ball"></Image>
      </div>
    </div>
  );

}

