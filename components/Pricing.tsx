

const Pricing = () => {
   return (
      <section className="mt-40 lg:mt-52">
         <div className="flex justify-center items-center flex-col mt-40 mb-12 mx-8">
            <h1 className="text-2xl md:text-3xl font-extrabold">Our Pricing Plans</h1>
            <p className="mt-4 text-center">Take advantage of our special offer soon! It won’t last forever...</p>
         </div>

         <div className="absolute -z-10 w-[100%] h-[850px] mt-[-70px] bg-[radial-gradient(400px_200px_at_center,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)] md:bg-[radial-gradient(600px_400px_at_center,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)]">
         </div>
         
         <div className="mb-10 flex justify-between md:justify-center items-end gap-4 md:gap-8 lg:gap-16 overflow-scroll no-scrollbar md:overflow-hidden">

            {/* Card First */}
            <div className="flex flex-col items-center">

               <div className="w-[260px] ml-10 md:ml-0 rounded-3xl border-primary border-2">
                  <div className="bg-primary rounded-2xl pt-2 pb-16 text-lg text-white font-bold text-center">Special Offer</div>
                  <div className="pt-6 pb-6 px-6 mt-[-55px] bg-white rounded-3xl">
                     <h4 className="text-xl font-bold">Monthly</h4>
                     <h4 className="text-2xl font-bold">$25 <span className="after:content-['_────'] after:text-gray-400 after:text-xs after:ml-[-45px] text-gray-400">$50</span><span className="text-xl font-bold pl-4">/mo</span></h4>
                     <p className="text-primary font-bold mt-10 text-center">Sign up now and get your first month for just $25!*</p>

                     <div className="pt-6 pb-12">
                        <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                        <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                        <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                        <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                     </div>
                     <div className="my-2 flex justify-center">
                        <button className="px-10 py-2 md:px-10 md:py-2 lg:py-3 bg-primary rounded-md text-white text-xs font-extrabold">Subscribe</button>
                     </div>
                     <p className="text-xs text-center font-bold">Learn More</p>
                  </div>

               </div>
            </div>

            {/* Card second */}
            <div className="flex flex-col items-center">
               <div className="bg-white max-w-[250px] mr-10 md:mr-0 rounded-3xl border-primary border-2 px-6 py-6">
                  <h4 className="text-xl font-bold">Annual</h4>
                  <h4 className="text-2xl font-bold">$500 <span className="text-xl font-bold">/yr</span></h4>
                
                  <div className="pt-6 pb-12">
                     <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                     <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                     <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>
                     <p className="text-sm before:content-['_✓'] before:pr-6 before:font-bold py-2">Benefit description</p>

                  </div>
                  <div className="my-2 px-16 flex justify-center">
                     <button className="px-10 py-2 md:px-10 md:py-2 lg:py-3 bg-primary rounded-md text-white text-xs font-extrabold">Subscribe</button>
                  </div>
                  <p className="text-xs text-center font-bold">Learn More</p>
               </div>
            </div>

         </div>
      </section>
   )
}

export default Pricing