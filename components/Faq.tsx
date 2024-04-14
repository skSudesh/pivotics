import SingleFaq from "./faqs/SingleFaq"


const faqs = [
   {
      id: 1,
      question: "What is Pivotics?",
      answer: "Pivotics employs machine learning algorithms to analyze various data points such as market demand, competitor pricing, and customer behavior."
   },
   {
      id: 2,
      question: "How does Pivotics use AI to optimize pricing?",
      answer: "Pivotics employs machine learning algorithms to analyze various data points such as market demand, competitor pricing, and customer behavior. This analysis enables the platform to recommend optimal pricing strategies tailored to your"
   },
   {
      id: 3,
      question: "Is my data safe with Pivotics?",
      answer: "Yes. Your data is completely safe with us."
   },
   {
      id: 4,
      question: "Do you offer any discounts?",
      answer: "Ofcourse. See our annual plans."
   },
   {
      id: 5,
      question: "How can I provide feedback on Pivotics?",
      answer: "Pivotics employs machine learning algorithms to analyze various data points such as market demand, competitor pricing, and customer behavior. You can provide your feedback on contact us page."
   }

]

const Faq = () => {
   return (
      <section className="my-12">
         <div className="flex justify-center items-center flex-col mt-32 mb-8 md:mt-40 md:mb-12">
            <h1 className="text-2xl md:text-3xl font-extrabold">FAQ</h1>
            <p className="mt-4">Got some question for us?</p>
         </div>

         <div className="mx-8 md:max-w-[700px] md:m-auto">
            {faqs.map(f => {
               return (
                  <SingleFaq key={f.id} id={f.id} question={f.question} answer={f.answer} />
               )
            })}

         </div>
      </section>
   )
}

export default Faq