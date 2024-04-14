
const Contact = () => {
   return (
      <section className="bg-[#212121] mt-28 md:mt-48">
         <div className="flex justify-center items-center flex-col py-16 mb-12 mx-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">Need to Know More?</h1>
            <p className="mt-4 text-center text-white">Send us an email below and we'll get back to you quickly!</p>

            <div className="mt-10">

               <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                     <div>
                        <label className=" absolute mt-[-10px] ml-4 px-2 text-sm font-medium text-white bg-[#212121]">Name</label>
                        <input type="text" id="first_name" className=" bg-transparent border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[250px] p-2.5" placeholder="John Doe" required />
                     </div>
                     <div>
                        <label className=" absolute mt-[-10px] ml-4 px-2 text-sm font-medium text-white bg-[#212121]">Email</label>
                        <input type="email" id="first_name" className=" bg-transparent border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[250px] p-2.5" placeholder="john123doe@gmail.com" required />
                     </div>
                  </div>
                  <div className="flex">
                     <label className=" absolute mt-[-10px] ml-4 px-2 text-sm font-medium text-white bg-[#212121]">Message</label>
                     <textarea id="first_name" className=" bg-transparent border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-[150px] block p-2.5" placeholder="What can we help you with?" required />
                  </div>

                  <div className="flex justify-center lg:justify-end mt-4">
                     <button className="px-10 py-2 lg:py-3 bg-primary rounded-md text-white text-xs font-extrabold">Send</button>
                  </div>

               </form>


            </div>


         </div>

      </section>
   )
}

export default Contact