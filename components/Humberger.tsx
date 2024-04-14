"use client"
import Image from "next/image"
import { useState } from "react"


const Humberger = () => {
   const [isHumberger, setIsHumberger] = useState(false);

   return (
      <>
         <Image
            src={isHumberger ? "/humberger_close.svg" : "/humberger.svg"}
            width={0}
            height={0}
            alt="Humberger menue icon"
            className={(isHumberger ? "rotate-180 w-[30px]" : "rotate-0 w-[30px]") + " transition-all duration-[400ms] z-50 md:hidden"}
            onClick={() => setIsHumberger(!isHumberger)}
         />
         {/* Humberger */}
         <div className={(isHumberger ? "block" : "hidden") + " absolute z-40 right-0 top-0 bg-white w-screen h-screen md:hidden"}>
            <ul className="flex flex-col items-center gap-4 mx-12 my-8">
               <li className="text-primary">Product</li>
               <li>Pricing</li>
               <li>Blog</li>
               <li>About</li>
            </ul>
         </div>
      </>
   )
}

export default Humberger