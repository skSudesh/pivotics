"use client"

import { useState } from "react";

type FaqQuestion = {
   id: number;
   question: string;
   answer: string;
}


const SingleFaq = (faq: FaqQuestion) => {
   const [visible, setVisible] = useState<boolean>(false);
   
   return (
      <div className="my-2" key={faq.id}>
         { faq.id === 1 ? "" : <hr className="my-2" />}
         <div className="flex justify-between items-center cursor-pointer" onClick={() => setVisible(!visible)}>
            <p className={"transition-all duration-[400ms]" + (visible ? " text-primary" : " text-black")}>{faq.question}</p>
            <p className={"transition-all duration-[400ms]" + (visible ? " text-primary rotate-180" : " text-black rotate-0")}>{visible ? "⊖" : "⊕"}</p>
         </div>
         <div className={"grid overflow-hidden text-primary transition-all duration-[400ms]" + (visible ? " grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden">
               <p className="mt-2">{faq.answer}</p>
            </div>
         </div>
         {/* <p className={"mt-2 text-primary transition-all duration-[400ms]" + (visible ? "" : "  hidden")}>{faq.answer}</p> */}
         {/* <hr className="my-2" /> */}
      </div>
   )
}

export default SingleFaq

