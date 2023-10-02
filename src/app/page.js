import Image from "next/image";
import pic from "../../public/anuj-pic.png";
import ball from "../../public/ball.svg";


export default function Home() {
 
  return (
    <div className="py-20">

      <div className=" relative ml-10 pl-5 justify-self-auto text-centre"> 
        <h1 className="font-bold text-4xl text-grey ">Hey! Its me Anuj</h1>
        <p className="font-bold text-grey ml-8 pl-12 pt-2">Explore More</p>
      </div>

      <div className="block md:flex" >
    
      <Image  className="" src={pic} alt="Anuj Pic"></Image>
      </div>
      

      <div className=" relative w-4/5">
        <div className="w-full relative left-10">
          <Image className="" src={ball} alt="ball"></Image>
        </div>

        <div className="absolute top-1/2 left-1/2">
        <p className="text-sm text-white ">Get me resume <div className="animate-bounce">👇</div></p>
        <button className="text-xs text-white bg-gradient-to-r from-teal to-sky hover:from-skylg hover:to-teal rounded-lg ml-3 my-2 border-1 w-24 h-8" >
         Download CV
        </button>
        </div>
      </div>



 
    </div>
  );

}

