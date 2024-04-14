import Image from "next/image"

const Cta = () => {
   return (
      <section>
         <div className="flex justify-start">
            <div className="absolute -z-10 w-[100%] h-[800px] mt-[-300px] md:mt-0 bg-[radial-gradient(300px_200px_at_left,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)] md:bg-[radial-gradient(800px_320px_at_left,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)]">
            </div>
         </div>

         <div className="flex justify-center items-center flex-col mx-8 mt-14 md:mt-32 mb-12">
            <h1 className="text-center text-2xl md:text-3xl font-extrabold">Start Your Free Trial Now</h1>
            <p className="mt-4 text-center">Elevate Your Pricing Strategy with Pivotics</p>

            
            <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
               <button className="bg-primary rounded-md text-white px-10 py-3 font-extrabold">Try Free</button>
               <p className=" cursor-pointer group">Schedule Demo <span className="absolute font-bold transition-all pl-2 group-hover:pl-4">&gt;</span></p>
            </div>
         </div>

         <div className="absolute -z-10 right-0 mt-[-70px] md:mt-[-150px]"> 
            <Image
            src="/cta/cta_right_arrow.svg"
            width={0}
            height={0}
            alt="CTA right arrow"
            className="w-[340px] md:w-[800px] lg:w-[1000px]" 
            />
         </div>

      </section>
   )
}

export default Cta