"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  ArrowDown,
  Clock,
  Target,
  CheckCircle2,
  FileText,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/*  Dashboard Illustration  */
function RealEstateIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="rounded-2xl border border-sand bg-white p-4 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/real-estate-os-cube.png"
          alt="Real Estate OS"
          width={732}
          height={733}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}

/*  FAQ Accordion Item  */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        >
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function RealEstateOS() {
  const solutions = [
    { title: "Intelligent CRM", promise: "All enquiries in one place, in real time.", desc: "A CRM built specifically for your agency \u2014 not a generic platform you have to adapt to. Connected to every major property portal in your market, so all enquiries flow into one place in real time. Lead management, viewing coordination, automated follow-ups, deal tracking, and agent activity \u2014 all in one system designed around how your team actually works." },
    { title: "Owner Capture", promise: "Contact new owners before your competitors.", desc: "New owners entering the market in your zone are identified and flagged automatically. Your team contacts them first \u2014 before competitors even know the listing exists. Automated outreach, review-then-send workflows, and a pipeline to track every opportunity." },
    { title: "Operations Management", promise: "Contracts in minutes, not hours.", desc: "Contracts generated in minutes, not hours. Bilingual documents, scheduling, task coordination, and reporting \u2014 all automated. Your agents stop doing admin and start doing what they were hired for." },
    { title: "Portfolio Reactivation", promise: "Stay top of mind with every past client.", desc: "Past clients and inactive owners receive personalized outreach \u2014 market updates, valuation insights, relevant opportunities. When they\u2019re ready to buy, sell, or list again, your agency is already top of mind." },
  ];

  const faqs = [
    { q: "Do we need to change our CRM?", a: "No, we can integrate with your current one. But our CRM is built specifically for real estate agencies and is more powerful than anything else on the market. Most agencies that see it choose to upgrade. Worth a conversation." },
    { q: "Do our agents need to learn new software?", a: "We guide your team through the full onboarding. The system is designed to fit into your existing workflow, and we make sure everyone is comfortable before going live." },
    { q: "What if my agency is small?", a: "The OS is designed for agencies with at least 3\u20135 people. That said, we can adapt to smaller teams if needed." },
    { q: "How is this different from buying a CRM?", a: "A CRM is a tool you configure yourself. This is an operating system we build and fine-tune for your agency. We handle onboarding, and we stay involved monthly to make sure it evolves with your business." },
    { q: "What portals do you integrate with?", a: "All major ones. Idealista, Fotocasa, Habitaclia, Pisos.com, and others. Every enquiry flows into your system in real time." },
    { q: "How quickly will we see results?", a: "First module live within 2\u20134 weeks. Most agencies see measurable impact within the first month." },
    { q: "What happens if we stop?", a: "You keep everything we built. No lock-in." },
    { q: "Do you work outside Spain?", a: "Yes. Our team works in English, Spanish, and Catalan." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-clip">
      {/*  T1: HERO  */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-site mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Real Estate OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your agents sell.{" "}
                Our AI runs the agency.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                A complete AI-powered operating system for your real estate agency. Built around
                your processes, deployed on your tools, fine-tuned for you. We guide you through
                onboarding and stay on to optimize it every month.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://cal.com/arnau-fabrega-nscdht/autonymo-real-estate-os"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95"
                >
                  Book a Free Assessment
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-colors active:scale-95"
                >
                  See how it works
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <RealEstateIllustration />
            </div>
          </div>
        </div>
      </section>


      {/*  T3: THE PROBLEM  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The Problem
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              Your agency runs on manual work. It doesn&apos;t have to.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Target,
                title: "Owners you\u2019re not capturing",
                desc: "Private owners list in your zone every week. By the time your team spots them, three agencies have already called.",
              },
              {
                icon: Clock,
                title: "Leads going cold",
                desc: "A buyer enquiry comes in at 8pm. By the time your agent sees it the next morning, they\u2019ve already moved on.",
              },
              {
                icon: FileText,
                title: "Agents doing ops instead of selling",
                desc: "Your best salespeople spend half their day on admin, coordination, and data entry instead of closing deals.",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className="p-6 rounded-xl bg-white border border-sand flex flex-col"
              >
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T4: WHY WE'RE DIFFERENT  */}
      <WhyWeDifferent
        industryExample="This isn't off-the-shelf software. It's an operating system built around your agency. Your team operates it, we make sure it keeps getting better."
        vendorItems={[
          "Sell you a generic CRM",
          "Assume your team will figure it out",
          "Same platform for every agency",
          "No ongoing support",
        ]}
        ourItems={[
          "Build a system tailored to how your agency actually works",
          "Deploy on your existing tools and portals",
          "Guide your team through onboarding",
          "Monitor & optimize monthly",
        ]}
      />

      {/*  T5: SOLUTION PORTFOLIO  */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              What We Deploy
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
              Four modules. One operating system.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed">
              Every agency is different. We deploy the same core modules but fine-tune each one to your market, your team, and your processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.05}
              >
                <div className="h-full p-6 rounded-xl bg-white border border-sand">
                  <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">{sol.title}</h4>
                  <p className="text-accent-blue text-sm font-medium mb-3">{sol.promise}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T6: CASE STUDY  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-site mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Case Study
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
              Already running. Already delivering.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed">
              The Real Estate OS is live for agencies across Spain. Here&apos;s what changes once it&apos;s deployed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Lead response: from over an hour to under 30 seconds", desc: "Every lead that comes in gets an instant, personalized response and is qualified automatically. Your agents only spend time on leads that are genuinely interested \u2014 no more chasing dead ends." },
              { title: "Viewings that book themselves", desc: "Once a lead is qualified and the broker confirms interest, viewings are scheduled automatically. No back-and-forth, no missed opportunities." },
              { title: "Owners always in the loop", desc: "Your owners receive automatic updates on every enquiry, viewing, and market change. They feel attended to without your agents sending a single manual message. Better service, zero extra work." },
              { title: "Your entire portfolio stays warm", desc: "Strategic, automated follow-ups keep every past owner and client top of mind. When they\u2019re ready to sell, list, or buy again, your agency is the first call \u2014 not a competitor they found online." },
              { title: "Hundreds of new owner contacts every month", desc: "The capture engine connects you with off-market owners in your zone before they list publicly. Your pipeline of exclusive listings grows on autopilot." },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className="p-6 rounded-xl bg-cream border border-sand flex flex-col"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-blue mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-3xl italic">
            Every deployment is different because every agency is different. We fine-tune the system to your market, your team, and your workflows, then we stay on to manage and improve it month after month.
          </p>
        </div>
      </section>

      {/*  T7: HOW WE WORK  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How We Work
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              From first call to live system in 4 weeks.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { step: "Step 1", title: "We audit your operations", desc: "We map your processes, identify where time and money are leaking, and define which modules to deploy first." },
              { step: "Step 2", title: "We deploy and fine-tune your OS", desc: "We build the system around your specific workflows, connect it to your existing tools, and go live with the highest-impact module first." },
              { step: "Step 3", title: "We monitor, optimize, and expand", desc: "Your team runs the system day-to-day. We check in monthly to review performance, fine-tune what\u2019s working, and roll out new modules when you\u2019re ready." },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col"
              >
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">
                  {item.step}
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T9: FAQ  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
            FAQ
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">
            Common questions
          </h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/*  T10: FINAL CTA  */}
      <FinalCTA
        verticalPhrase="your agency"
        heading="Let's talk about your agency."
        subtitle="Book a free 30-minute assessment. We'll map your operations and show you exactly where AI makes the biggest impact."
        calLink="https://cal.com/arnau-fabrega-nscdht/autonymo-real-estate-os"
      />
    </div>
  );
}
