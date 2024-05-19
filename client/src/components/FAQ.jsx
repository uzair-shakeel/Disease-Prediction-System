import { useState } from 'react';


const FAQ =() => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is the Disease Prediction System?",
      answer: "The Disease Prediction System is an online platform designed to help users assess their health risks and predict potential diseases based on symptoms provided."
    },
    {
      question: "How does the Disease Prediction System work?",
      answer: "Our system utilizes advanced algorithms and machine learning techniques to analyze the symptoms entered by users and generate predictions about possible diseases or health conditions."
    },
    {
      question: "Is the Disease Prediction System accurate?",
      answer: "While we strive for accuracy, it's important to note that our system provides predictions based on the information provided by users and the algorithms it employs. It's always advisable to consult a healthcare professional for a definitive diagnosis and medical advice."
    },
    {
      question: "What kind of symptoms can I input into the Disease Prediction System?",
      answer: "You can input a wide range of symptoms into our system, including common ailments like headaches, fever, fatigue, as well as more specific symptoms related to various diseases or conditions."
    },
    {
      question: "Is my personal information safe when using the Disease Prediction System?",
      answer: "Yes, we take the privacy and security of your personal information seriously. Any data entered into the system is kept confidential and is only used for the purpose of generating predictions. Please refer to our privacy policy for more details."
    },
    {
      question: "Can the Disease Prediction System replace a visit to the doctor?",
      answer: "No, the Disease Prediction System is not a substitute for professional medical advice, diagnosis, or treatment. It is intended to provide users with preliminary information and raise awareness about potential health risks. Always consult a qualified healthcare provider for personalized medical guidance."
    },
    {
      question: "How should I interpret the results from the Disease Prediction System?",
      answer: "The results provided by our system are for informational purposes only and should not be considered a definitive diagnosis. If you receive concerning results, we recommend seeking further evaluation from a healthcare professional for proper diagnosis and treatment."
    },
    {
      question: "Can I use the Disease Prediction System for emergency situations?",
      answer: "No, the Disease Prediction System is not designed for use in emergency situations. If you are experiencing a medical emergency, please seek immediate medical assistance by contacting emergency services or visiting the nearest hospital."
    }
  ];
  
  return (
    <section className="bg-white py-8 min-h-screen px-[8%] text-center max-w-[1025px] lg:px-16 px-[10px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold py-3">Frequently Asked Questions</h1>
        <p className="pb-8 w-[50%]">
          Answers to Your Questions: Find clarity on common queries about our
          disease prediction service, data privacy, accuracy, and more.
        </p>
      </div>
      <div className="space-y-4 w-full shadow-2xl py-5">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg transition-all duration-300 ease-in-out px-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-2 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              >
                <span className="font-bold">{faq.question}</span>
                <span className="ml-4">
                  {openIndices.includes(index) ? (
                    <svg
                      className="w-6 h-6 transition-transform transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform transform rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndices.includes(index) ? 'max-h-screen' : 'max-h-0'
                  }`}
              >
                <div className="py-3 pb-8 border-b border-black text-md">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default FAQ