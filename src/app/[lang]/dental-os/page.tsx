"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDown,
  Users,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/*  Health Dashboard Illustration  */
function HealthIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="rounded-2xl border border-sand bg-white p-4 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/dental-os-cube.png"
          alt="Dental OS"
          width={732}
          height={733}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function HealthServicesOS() {
  const solutions = [
    { title: "Intelligent Patient Reactivation", promise: "Dormant patients come back for the care they need.", desc: "Dormant patients receive personalized WhatsApp messages based on their treatment history. Not a generic reminder \u2014 a relevant conversation about the care they need. They book directly from the chat." },
    { title: "Smart Appointment Booking", promise: "Patients book through WhatsApp, no back-and-forth.", desc: "Patients book through WhatsApp, integrated with your clinic software. Real-time availability checks \u2014 no double bookings, no back-and-forth." },
    { title: "Multi-Practitioner Scheduling", promise: "Every practitioner\u2019s schedule stays full, automatically.", desc: "Appointments coordinated across doctors, hygienists, and rooms automatically." },
    { title: "Automated Reminders & Follow-up", promise: "No-shows drop. Your team stays off the phone.", desc: "Confirmations, reminders, and post-visit follow-ups via WhatsApp. No-shows drop. Your team stays off the phone." },
    { title: "Post-Visit Review Collection", promise: "Your reputation grows without anyone asking at the front desk.", desc: "After each visit, patients get a simple prompt to leave a Google review. Your reputation grows without anyone asking at the front desk." },
  ];

  const faqs = [
    { q: "Do we need to change our clinic software?", a: "No. We connect to Gesden, Odontonet, Klini Kare, CliniWin, and others. Nothing changes for your team." },
    { q: "Do we need to change our WhatsApp number?", a: "No. Messages come from your clinic\u2019s number. Patients see your clinic, not a third party." },
    { q: "Will my front desk need to learn anything new?", a: "No. This is completely done for you. Their workload decreases \u2014 patients arrive pre-booked." },
    { q: "What about all the new incoming messages?", a: "We help manage them. The system handles conversations and booking automatically. For messages that need a human, we make sure nothing falls through." },
    { q: "Is this GDPR compliant?", a: "Yes. We only contact patients who have given consent. We help you manage consent records and ensure full compliance." },
    { q: "What do patients actually receive?", a: "Natural WhatsApp messages personalized to their treatment history. Not marketing blasts \u2014 real conversations." },
    { q: "How quickly will we see results?", a: "Most clinics see confirmed appointments within the first 2 weeks." },
    { q: "What if our schedule is already full?", a: "The system checks real-time availability. If you fill up, we pause or focus on low-occupancy periods." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-clip">
      {/*  T1: HERO  */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Dental Clinic OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your dentists treat.{" "}
                Our AI fills the chairs.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                We reactivate dormant patients via WhatsApp, automate booking, and manage
                patient communication. Deployed on your existing clinic software, managed by
                our team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://cal.com/arnau-fabrega-nscdht/autonymo-dental-clinic-os" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95">
                  Book a Free Assessment
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-colors active:scale-95">
                  See how it works
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <HealthIllustration />
            </div>
          </div>
        </div>
      </section>


      {/*  T3: THE PROBLEM  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">The Problem</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              The real cost of an empty chair.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Users, title: "Patients who should be coming back", desc: "Your database has hundreds of patients overdue for treatment. Nobody has time to reach out to all of them." },
              { icon: Calendar, title: "Your front desk is the bottleneck", desc: "Receptionists handle calls, scheduling, and billing all at once. Patient reactivation is always the first thing dropped." },
              { icon: Clock, title: "Revenue you can\u2019t see", desc: "A patient who comes for a hygiene generates far more than the cleaning fee. Every patient who doesn\u2019t come back is a cascade of treatments that never happens." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="p-6 rounded-xl bg-white border border-sand flex flex-col">
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
        industryExample="We don&apos;t send mass messages. We analyze each patient&apos;s history and reactivate them for the specific treatment they need."
        vendorItems={[
          "Sell software, disappear",
          "Blast generic SMS to your database",
          "One-size-fits-all messages",
          "No ongoing support",
        ]}
        ourItems={[
          "Connect to your clinic management system",
          "Personalized reactivation based on each patient\u2019s treatment history",
          "Conversations via WhatsApp, not spam",
          "Manage & optimize monthly",
        ]}
      />

      {/*  T5: SOLUTION PORTFOLIO  */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What We Deploy</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Your clinic, fully equipped.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full p-6 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1">{sol.title}</h4>
                <p className="text-accent-blue text-sm font-medium mb-3">{sol.promise}</p>
                <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T6: CASE STUDY  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">Case Study</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">90 days. One clinic. Real results.</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              A dental clinic in Spain with 3+ dentists and over 9,000 patient records.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "759", label: "Patients contacted" },
              { value: "153", label: "Visits confirmed" },
              { value: "\u20AC16,000+", label: "Estimated revenue generated" },
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="p-6 rounded-xl bg-cream border border-sand text-center">
                <div className="font-display text-3xl font-bold text-charcoal mb-1">{metric.value}</div>
                <div className="text-text-muted text-sm">{metric.label}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="max-w-3xl p-6 rounded-xl bg-cream border border-accent-blue/20">
            <p className="text-charcoal text-sm leading-relaxed">
              Reactivated patients don&apos;t just come back for a cleaning. They come back into your ecosystem, and your doctors find treatments that would never have started otherwise. On average, every reactivated visit generated 4x more revenue than expected.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/*  T7: HOW WE WORK  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">How We Work</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">From first call to patients coming back in 3 weeks.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "Step 1", title: "We connect to your clinic software", desc: "We integrate with your existing system. No migration, no new tools." },
              { step: "Step 2", title: "The system starts reactivating your patient database", desc: "We analyze who\u2019s overdue and for what, and launch personalized WhatsApp conversations for each patient\u2019s specific situation." },
              { step: "Step 3", title: "We manage, optimize, and scale", desc: "We monitor weekly, refine messaging, and expand to new campaign types. The system gets smarter. You get more patients back." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col">
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">{item.step}</span>
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
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">FAQ</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">Common questions</h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/*  T10: FINAL CTA  */}
      <FinalCTA
        verticalPhrase="your clinic"
        heading="Let&apos;s fill your chairs."
        subtitle="Book a free 30-minute assessment. We&apos;ll show you how many dormant patients your clinic has and what reactivating them could mean for your revenue."
        calLink="https://cal.com/arnau-fabrega-nscdht/autonymo-dental-clinic-os"
      />
    </div>
  );
}
