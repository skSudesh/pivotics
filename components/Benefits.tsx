import Image from 'next/image'
import React from 'react'

const Benefits = () => {
   return (
      <section>
         <div className="flex justify-start overflow-hidden">
            <div className="absolute -z-10 w-[100%] h-[800px] mr-[-100px] mt-[-300px] bg-[radial-gradient(300px_200px_at_left,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)] md:mt-[50px] md:bg-[radial-gradient(800px_320px_at_left,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)]">
            </div>
         </div>

         <div className='flex flex-col md:flex-row justify-between gap-4 items-center mt-16 md:mt-36 mb-16 mx-8 md:mx-12 lg:mx-24'>
            <div className='max-w-[400px]'>
               <h2 className='text-2xl md:text-3xl font-bold'>Maximize Revenue</h2>
               <p className='mt-4'>Ensure you're always priced for maximum profitability with our AI-driven price optimization.</p>

            </div>
            <div className='drop-shadow-[10px_0px_15px_rgba(0,0,0,0.25)]'>
               <Image
                  src="/benefits/benefit1-min.png"
                  width={674}
                  height={363}
                  alt='Benefits of services'
                  className="w-[674px] mt-4 md:mt-0"
               />
            </div>
         </div>

         <div className='flex flex-col-reverse md:flex-row justify-between gap-4 items-center mt-16 md:mt-28 mx-8 md:mx-12 lg:mx-24'>
            <div>
               <Image
                  src="/benefits/benefit2-min.png"
                  width={695}
                  height={440}
                  alt='Benefits of services'
                  className="w-[695px]"
               />
            </div>
            <div className='max-w-[400px]'>
               <h2 className='text-2xl md:text-3xl font-bold'>Stay Competitive</h2>
               <p className='mt-4'>Real-time market data analysis and granular market segmentation keeps you ahead of the competition.</p>

            </div>
         </div>

         <Image
            src="/benefits/left_arrow_down.svg"
            width={300}
            height={300}
            alt="Arrow Left to Right"
            className="absolute z-[-1] ml-[-90px] w-[150px] mt-[-100px] md:ml-0 md:mt-[-60px] md:w-[250px] lg:w-auto "
         />

         <div className='flex flex-col md:flex-row justify-between gap-4 items-center mt-8 md:mt-16 mb-16 mx-8 md:mx-12 lg:mx-24'>
            <div className='max-w-[400px] '>
               <h2 className='text-2xl md:text-3xl font-bold'>Save Time</h2>
               <p className='mt-4'>Automate complex processes of pricing analysis and adjustment our comprehensive analytics dashboard.</p>

            </div>
            <div className=''>
               <Image
                  src="/benefits/benefit3-min.png"
                  width={715}
                  height={491}
                  alt='Benefits of services'
                  className='w-[715px]'
               />
            </div>
            
         </div>
         <div className="flex justify-end items-baseline">
               <div className="absolute -z-10 w-[100%] h-[800px] mt-[-500px] md:mt-[-400px] bg-[radial-gradient(300px_200px_at_right,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)] md:bg-[radial-gradient(600px_320px_at_right,rgba(22,214,168,0.3)_0%,rgba(22,214,168,0)_100%)]">
               </div>
            </div>
      </section >
   )
}

export default Benefits