import Image from "next/image"


const Hero = () => {
   return (
      <section>
         <div className="flex justify-end overflow-hidden">
            <div className="absolute -z-10 w-[100%] h-[850px] mt-24 md:mt-[-70px] bg-[radial-gradient(300px_200px_at_center,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)] md:bg-[radial-gradient(800px_320px_at_right,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)]">
            </div>
         </div>

         <div className="flex flex-col justify-between md:flex-row items-center lg:gap-4">
            <div>
               <Image
                  src="/left_hero_arrow.svg"
                  width="0"
                  height="0"
                  alt="Arrow Left to Right"
                  className="absolute z-[-1] mt-[-10px] w-[300px] md:w-[580px] h-[400px] md:ml-[-20px] left-0"
                  unoptimized
               />
               <div className="mx-6 pt-10 md:mx-12 lg:pl-16 md:max-w-[520px] md:pt-24">
                  <h1 className="text-center text-3xl md:text-left md:text-4xl lg:text-6xl font-extrabold">Elevate Your E-commerce Revenue</h1>
                  <p className="text-center md:text-left mt-8">Unlock the power of <span className="font-bold">AI to optimize pricing</span> in real-time, ensuring maximum profitability and market competitiveness.</p>
                  <div className="mt-16 flex flex-col md:flex-row items-center gap-4">
                     <button className="bg-primary rounded-md text-white px-10 py-3 font-extrabold">Try Free</button>
                     <p className=" cursor-pointer group">Schedule Demo <span className="font-bold transition-all group-hover:pl-2">&gt;</span></p>
                  </div>
               </div>
            </div>

            <div className="pt-10 md:pr-2 lg:pr-10 md:pt-24 drop-shadow-[10px_0px_15px_rgba(0,0,0,0.25)]">
              
               <Image
                  src="/hero.png"
                  width={738}
                  height={437}
                  alt="Hero section dashboard"
                  className="w-[500px] md:w-[738px] px-2"
                  priority
                  quality={100}
               />
            </div>

         </div>

      </section>
   )
}

export default Hero