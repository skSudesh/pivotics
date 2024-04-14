import Image from "next/image"


const Testimonial = () => {
   return (
      <section>

         <div className="flex flex-col items-end">
            <Image
               src="/testimonial/testimonial_arrow.svg"
               width={0}
               height={0}
               alt="Testimonial Icons"
               className=" absolute mt-[360px] md:mt-10 pl-4 -z-10 w-[400px] md:w-[1200px]"

            />
         </div>
         

         <div className="flex justify-center items-center flex-col mt-16 md:mt-36 mb-12 mx-8">
            
            <h1 className="text-2xl md:text-3xl font-extrabold">Loved by the Best</h1>
            <p className="mt-4 text-center">Trusted and loved by real people, working just like you.</p>
            <div className="bg-secondary md:max-w-[550px] rounded-2xl my-8 md:my-12">
               <div className="px-3 py-2 md:px-5 lg:px-10 lg:py-5">
                  <p className="text-5xl font-extrabold text-white mb-[-15px] md:mb-[-10px]">&#x201C;</p>
                  <p className="text-sm md:text-base font-light text-white px-3 md:px-6">Truly helped skyrocket the success of my business. AI insights is an indispensable tool for me in this day and age, Pivotics makes it that much easier to use.</p>
                  <p className="text-5xl text-right font-extrabold text-white mb-[-15px] md:mb-[-10px]">&#x201D;</p>
                  <h4 className="text-xl md:text-2xl text-white font-bold text-right">John Doe</h4>
                  <p className="text-xs text-white text-right">Enrepreneur</p>

               </div>


               {/* Triangle */}
               <div className="absolute w-0 h-0 ml-[70px] md:ml-[150px]
               border-l-[16px] border-l-transparent
               border-t-[25px] border-t-secondary
               border-r-[16px] border-r-transparent"
               />

            </div>
            
            <Image
               src="/testimonial/testimonial_icons.svg"
               width={0}
               height={0}
               alt="Testimonial Icons"
               className="w-[500px]"
            />
         </div>

         

      </section>
   )
}

export default Testimonial