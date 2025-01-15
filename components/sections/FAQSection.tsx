'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can government agencies engage your services?",
    answer: "To engage our services, government agencies can reach out to us directly with the details of their procurement requirements. We ensure prompt responses and tailored solutions to meet the specific needs of government contracts."
  },
  {
    question: "What types of government projects do you handle?",
    answer: "We handle a wide range of government projects. From metal manufacturing to fencing solutions and small arms/ammo supply, our experienced team is equipped to fulfill various government contracting needs with efficiency and expertise."
  },
  {
    question: "Do you provide compliance consulting for government contracts?",
    answer: "Yes, we offer compliance consulting services to assist government agencies in navigating the complex regulatory landscape. Our team ensures that government contracts adhere to the necessary regulations and policies, providing guidance at every stage of the procurement process."
  },
  {
    question: "Are your government contracting services compliant with industry standards?",
    answer: "Yes, our government contracting services are aligned with industry standards and regulatory requirements. We maintain a commitment to regulatory adherence and quality assurance, ensuring that our solutions meet the highest standards expected in government procurement."

  },
  {
    question: "How do you ensure government contract fulfillment?",
    answer: "Government contract fulfillment is our priority. We maintain strict adherence to project timelines, quality benchmarks, and regulatory requirements to ensure that government contracts are fulfilled on time and in accordance with the specified criteria."
  },
  {
    question: "What sets your company apart in government contracting procurement?",
    answer: "Our company stands out in government contracting procurement due to our specialized expertise, commitment to regulatory compliance, and an unmatched drive towards building a track record of successful government contract fulfillment. We prioritize quality, compliance, and on-time delivery in every government project we undertake."
  },
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-white text-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className="font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-light"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-white">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
} 