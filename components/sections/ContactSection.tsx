'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
   const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string,
    settings: {
      from_name: "Ares Integrated Resources Contact Form",
      subject: "New Contact Form Submission",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h3 className="text-xl text-white font-semibold">Get in Touch</h3>
            <p className="text-white">
              Interested in working with us? Contact our team to discuss your requirements.
            </p>
            
          </motion.div>

          {!isSuccess ? (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full p-3 border rounded-md bg-background text-white focus:ring-1 focus:ring-white focus:border-white focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                  className="w-full p-3 border rounded-md bg-background text-white focus:ring-1 focus:ring-white focus:border-white focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">Valid email is required</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full p-3 border rounded-md bg-background text-white focus:ring-1 focus:ring-white focus:border-white focus:outline-none"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">Message is required</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full flex justify-start py-3 bg-foreground items-center space-x-2 text-background rounded-md hover:opacity-90 transition-opacity"
              >
                <span>Send Message</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-xl font-semibold text-white">{result}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 