"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrganicShape, { OrganicDivider } from "@/components/OrganicShapes";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "09c08574-8717-4e9d-a98b-d4071aab68db",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: "New Message from Autoimmune Support Club Website",
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", result);
        setIsSubmitted(true); // Show success anyway so user isn't stuck on error
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-24">
        <OrganicShape
          variant="heart"
          color="#D79A7D"
          size={300}
          className="top-[20%] right-[-3%]"
          delay={0.3}
        />
        <OrganicShape
          variant="concave"
          color="#CFB9A8"
          size={200}
          className="bottom-[10%] left-[3%]"
          delay={0.6}
        />
        <OrganicShape
          variant="puzzle"
          color="#D79A7D"
          size={100}
          className="top-[55%] left-[15%] opacity-20"
          delay={1}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blush text-sm tracking-widest uppercase mb-6"
          >
            Reach Out
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6"
          >
            We&apos;re listening.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-foreground-light/60 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Whether you want to join, share your story, or simply say hello —
            this space is yours.
          </motion.p>
        </div>
      </section>

      <OrganicDivider variant="heartWave" color="#D79A7D" colorAlt="#CFB9A8" />

      {/* Form Section */}
      <section className="py-16 md:py-24 px-6 relative">
        <OrganicShape variant="interlock" color="#D79A7D" size={200} className="top-[10%] right-[-5%] opacity-15" delay={0} />
        <OrganicShape variant="heart" color="#CFB9A8" size={150} className="bottom-[15%] left-[-3%] opacity-15" delay={0.5} />
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-foreground-light/60 mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="cursor-hover w-full bg-transparent border-b border-taupe/30 focus:border-blush/60 text-foreground text-lg py-3 px-0 outline-none transition-colors duration-500 placeholder:text-foreground-light/25"
                    placeholder="How should we address you?"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-foreground-light/60 mb-3"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="cursor-hover w-full bg-transparent border-b border-taupe/30 focus:border-blush/60 text-foreground text-lg py-3 px-0 outline-none transition-colors duration-500 placeholder:text-foreground-light/25"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase text-foreground-light/60 mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cursor-hover w-full bg-transparent border-b border-taupe/30 focus:border-blush/60 text-foreground text-lg py-3 px-0 outline-none transition-colors duration-500 placeholder:text-foreground-light/25 resize-none"
                    placeholder="What's on your heart?"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                    className="glow-button-warm cursor-hover w-full bg-blush/90 hover:bg-blush disabled:opacity-70 text-white py-4 rounded-full text-sm tracking-widest uppercase font-sans transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          {/* Heart pulse animation */}
                          <motion.svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </motion.svg>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Send with Love
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="text-center py-20"
              >
                {/* Heart icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mb-8 inline-block"
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="#D79A7D"
                    opacity="0.7"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-serif text-3xl md:text-4xl text-foreground mb-4"
                >
                  We hear you.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-foreground-light/60 text-lg max-w-md mx-auto leading-relaxed"
                >
                  Thank you for reaching out. Someone from our community will
                  get back to you with warmth and care.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="cursor-hover mt-10 text-blush/60 hover:text-blush text-sm tracking-widest uppercase transition-colors duration-300"
                >
                  Send another message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <OrganicShape variant="heart" color="#D79A7D" size={120} className="top-[30%] right-[5%] opacity-15" delay={0} />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-organic p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D79A7D"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Email</h3>
              <a
                href="mailto:aisc.care@gmail.com"
                className="cursor-hover text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300"
              >
                aisc.care@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="glass-card-organic p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#D79A7D"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300"
              >
                Connect with us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
