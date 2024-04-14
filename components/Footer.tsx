import Image from "next/image"


const Footer = () => {
   return (
      <footer>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-2 lg:grid-cols-4 mx-8 mb-8 md:mx-16 lg:mx-0">
            <Image
               src="/footer/arrow.svg"
               width={0}
               height={0}
               alt="Footer Arrow up"
               className="hidden w-[200px] mb-[-100px] lg:block"
            />
            <div className="flex justify-start flex-col items-center md:flex-none md:items-start">
               <div>
                  <Image
                     src="/logo.png"
                     width={132}
                     height={34}
                     alt="Logo image"
                     className="w-[120px]"
                  />

               </div>

               <div className="flex justify-start gap-4 mt-4">
                  <Image
                     src="/footer/insta.png"
                     width={20}
                     height={20}
                     alt="Logo image"
                     className="w-[20px] cursor-pointer"
                  />
                  <Image
                     src="/footer/facebook.png"
                     width={20}
                     height={20}
                     alt="Logo image"
                     className="w-[20px] cursor-pointer"
                  />
                  <Image
                     src="/footer/linkedin.png"
                     width={18}
                     height={18}
                     alt="Logo image"
                     className="w-[20px] cursor-pointer"
                  />
               </div>
            </div>

            <div className="flex justify-center md:flex-none md:justify-normal md:items-start">
               <div>
                  <h5 className="text-xl font-bold">Navigation</h5>
                  <p className="text-sm py-1 cursor-pointer">Product</p>
                  <p className="text-sm py-1 cursor-pointer">About</p>
                  <p className="text-sm py-1 cursor-pointer">Download</p>
                  <p className="text-sm py-1 cursor-pointer">Pricing</p>
               </div>

            </div>

            <div className="col-span-2 md:col-span-1">
               <div className="flex justify-center gap-4 md:flex-none md:items-start md:justify-start md:flex-col">
                  <button className="bg-primary rounded-md text-white px-8 md:px-10 py-3 font-extrabold">Try Free</button>
                  <p className="mt-4 cursor-pointer group">Schedule Demo <span className="absolute font-bold transition-all pl-2 group-hover:pl-4">&gt;</span></p>

               </div>

            </div>
         </div>
      </footer>
   )
}

export default Footer