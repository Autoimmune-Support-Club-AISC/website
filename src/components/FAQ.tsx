import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrganicShape from "./OrganicShapes";

const faqs = [
  {
    question: "When was the Autoimmune Support Club (AISC) founded?",
    answer: "The Autoimmune Support Club (AISC) was founded in September 2024 with a clear mission: to create a safe, stigma-free community for those navigating life with chronic and invisible illnesses.",
  },
  {
    question: "Who can join the Autoimmune Support Club? Are there age limits?",
    answer: "AISC is open to absolutely everyone! While the majority of our members and volunteers are teenagers—making our community proudly teen-focused—we warmly welcome individuals of all ages who need support.",
  },
  {
    question: "What are the early signs that I might have an autoimmune disease?",
    answer: "While symptoms vary widely depending on the specific condition, common early signs of an autoimmune disease include profound chronic fatigue, joint pain and swelling, skin issues, abdominal pain or digestive issues, recurring fever, and swollen glands. It's important to consult a healthcare provider for a proper diagnosis.",
  },
  {
    question: "How does the Autoimmune Support Club help people with chronic and invisible illnesses?",
    answer: "AISC provides a safe, stigma-free space where individuals with chronic and invisible illnesses can connect. We offer peer-led emotional support groups, community resources, and a platform for sharing lived experiences without judgment.",
  },
  {
    question: "How can I cope with the mental health impact of autoimmune diseases and their symptoms?",
    answer: "Chronic illness doesn't just affect the body; it takes a massive toll on mental health. AISC focuses heavily on providing emotional support for the anxiety, depression, and isolation that often accompany autoimmune symptoms. You don't have to face the mental health toll of your illness alone.",
  },
  {
    question: "Can I join a support group if I am still seeking a diagnosis?",
    answer: "Absolutely. The journey to an autoimmune diagnosis can often take years and feel incredibly isolating. You do not need an official diagnosis to join our community. If you are experiencing chronic symptoms and seeking emotional support, you belong here.",
  },
  {
    question: "Are there free autoimmune support groups near me?",
    answer: "Our core mission is accessibility. The Autoimmune Support Club hosts free virtual peer-led support groups that are accessible from anywhere in the world. We are also continuously expanding our network of local, in-person meetups.",
  },
  {
    question: "How can I manage unpredictable autoimmune flare-ups and chronic fatigue?",
    answer: "Coping with unpredictable flare-ups requires a combination of pacing yourself, listening to your body, managing stress, and seeking emotional support. At AISC, our members regularly share practical strategies for navigating chronic fatigue and finding balance during difficult symptom flares.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate JSON-LD for SEO Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-32 relative z-10 overflow-hidden" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-40">
        <OrganicShape variant="blob" color="var(--color-blush)" size={400} />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/4 translate-y-1/4 opacity-30">
        <OrganicShape variant="concave" color="var(--color-taupe)" size={300} />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked <span className="text-blush italic">Questions</span>
          </h2>
          <p className="text-foreground-light/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Learn more about our mission, community, and how we support those living with chronic illness.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`glass-card rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen ? "shadow-[0_20px_40px_-15px_var(--color-blush)] bg-sand-light/50" : "shadow-sm hover:shadow-md hover:bg-sand-light/30 hover:border-blush/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blush/50 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 pr-8 ${
                    isOpen ? "text-blush" : "text-foreground group-hover:text-blush"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`transform transition-all duration-500 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${
                    isOpen ? "bg-blush text-white rotate-180" : "bg-blush/10 text-blush group-hover:bg-blush/20"
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2 text-foreground-light/80 text-lg leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
