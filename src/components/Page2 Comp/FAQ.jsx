import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Crafting clean & responsive web experiences",
      answer:
        "Crafting clean and responsive web experiences by transforming designs into well-structured, user-friendly interfaces that work seamlessly across all devices.",
    },
    {
      question: "Aspiring frontend developer | UI focused",
      answer:
        "A passionate frontend developer focused on crafting clean and responsive web experiences while continuously learning modern web technologies.",
    },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full grow mt-10 flex flex-col gap-4">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <div 
        
        key={index}
        onClick={() => toggleFAQ(index)}
        className="faq w-full sm:w-[90%]
        p-4 sm:p-5
        rounded-2xl bg-white
        cursor-pointer
        transition-all duration-300
        hover:shadow-md"
      >
        {/* Question */}
        <div className="flex justify-between items-center">
          <h1 className="text-sm sm:text-base font-medium">
            {faq.question}
          </h1>
          <span className="text-xl font-semibold transition-transform duration-300">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-250 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        >
          <p className="text-sm text-justify leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    );
  })}
</div>

  );
};

export default FAQ;

