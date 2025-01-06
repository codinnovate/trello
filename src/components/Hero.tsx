import Image from "next/image";
import flightBg from  '../assets'
import Searchbar from "./Searchbar";

export default function Hero (){
    return (
        <div className="max-w-6xl mx-auto w-full flex flex-col justify-center items-center">
            {/* <Image 
            src={flightBg}
            alt="Flight Background Image"
            className="w-full"
             /> */}
          <h1 className="text-5xl text-white mt-2">Flights</h1>
          <Searchbar />
         </div>
    )
}