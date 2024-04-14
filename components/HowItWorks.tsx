
import Image from "next/image";


const HowItWorks = () => {
   return (
      <section className="mb-12">
         <Image
            src="/right_hero_arrow.svg"
            width={0}
            height={0}
            alt="Arrow Left to Right"
            className="absolute hidden lg:block mt-[-20px] right-0 w-[400px] h-[300px]"
            unoptimized
         />

         <h2 className="text-2xl md:text-3xl font-extrabold text-center pt-24 md:pt-32 pb-8 md:pb-16">How it Works</h2>

         <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 lg:gap-32 mx-8 px-8 md:mx-12 lg:mx-24 lg:px-12 py-8 bg-secondary rounded-2xl">
            <div>
               <Image
                  src="/how_it_works/sign_up.png"
                  width={25}
                  height={25}
                  alt="sign up pencile"
                  className="w-[15px] md:w-[24px]"
               />
               <h3 className="text-xl font-bold text-white py-3">Sign Up</h3>
               <p className="text-sm font-light text-white">Sign up today and get a free trial! No strings, no hidden fees.</p>
            </div>
            <div>
               <Image
                  src="/how_it_works/cloud.png"
                  width={30}
                  height={27}
                  alt="sign up pencile"
                  className="w-[15px] md:w-[24px]"
               />
               <h3 className="text-xl font-bold text-white py-3">Integrate Data</h3>
               <p className="text-sm font-light text-white">Link up with platforms you already use, with just one click.</p>
            </div>
            <div>
               <Image
                  src="/how_it_works/trending.png"
                  width={27}
                  height={19}
                  alt="sign up pencile"
                  className="w-[15px] md:w-[24px]"
               />
               <h3 className="text-xl font-bold text-white py-3">Optimize Pricing</h3>
               <p className="text-sm font-light text-white">Watch the magic happen as we analyze your data for instant results.</p>
            </div>


         </div>

      </section>
   )
}

export default HowItWorks