import Image from "next/image"
import Humberger from "./Humberger"

const Navbar = () => {
   return (
      <nav className="flex justify-between items-center mx-6 md:mx-8 lg:mx-12 my-4">
         <div className="flex items-center lg:gap-16 md:gap-12">
            <Image
               src="/logo.png"
               width={132}
               height={34}
               alt="Logo image"
               className="w-[120px] h-full"
            />
            <ul className="hidden md:flex gap-4 lg:text-lg md:text-base">
               <li className="text-primary">Product</li>
               <li>Pricing</li>
               <li>Blog</li>
               <li>About</li>
            </ul>

         </div>


         <div className="flex gap-4">
            <button className="hidden md:block md:px-10 md:py-2 lg:py-3 border border-slate-950 rounded-md text-xs font-extrabold">Log In</button>
            <button className="px-5 md:px-10 py-2 lg:py-3 bg-primary rounded-md text-white text-xs font-extrabold">Get Started</button>

           
            {/* Humberger */}
            <Humberger />

         </div>
      </nav>
   )
}

export default Navbar