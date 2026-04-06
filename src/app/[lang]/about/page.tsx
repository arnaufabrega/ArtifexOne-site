"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-28 pb-32 px-6 sm:pt-40 sm:pb-40 bg-cream overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          <span
            className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(26, 26, 26, 0.03)" }}
          >
            AUTONYMO
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-6 block font-display">
                About Autonymo
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.05]">
                The AI transition is happening.
                <br />
                <span className="text-charcoal/40">We make sure you&apos;re on the right side of it.</span>
              </h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
                Not as a consultant. Not as a software vendor. As your external AI team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24 px-6 bg-cream border-t border-sand/50">
        <div className="max-w-4xl mx-auto">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            The Shift
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-10">
            Something permanent is happening.
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-text-muted">
            <p>
              For decades, the gap between large corporations and small businesses was defined by access. Access to talent, to technology, to the infrastructure that compounds over time.
            </p>
            <p>
              AI is collapsing that gap. For the first time, a 30-person manufacturing company can operate with the same intelligence infrastructure as a Fortune 500. The tools exist. The models exist. What most businesses lack is the team to put it together and keep it running.
            </p>
            <p className="text-charcoal font-medium">
              That&apos;s the opening Autonymo was built for.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-cream border-t border-sand/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-8">
                We don&apos;t consult. We build.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-text-muted">
                <p>
                  Autonymo is an AI engineering team based in Barcelona. We work with small and mid-sized businesses that know AI matters but don&apos;t know where to start, or have tried and been disappointed.
                </p>
                <p>
                  We go inside the business. We spend time understanding how it actually works: the processes, the bottlenecks, the workarounds that have existed for years. Then we build AI systems that fit into that reality. Not templates. Not off-the-shelf platforms. Systems designed for how this specific business operates.
                </p>
                <p>
                  We deploy fast. First solution live in 4 weeks. Then we stay on, monitoring, improving, and expanding as the business grows and as AI evolves.
                </p>
                <p className="text-charcoal font-medium">
                  Every improvement in AI makes our service faster, cheaper, and more powerful. We pass that directly to our clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">01</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">Based in Barcelona</h3>
                <p className="text-text-muted text-sm leading-relaxed">Working with businesses across Spain and Europe in English, Spanish, and Catalan.</p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">02</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">Live in 4 weeks</h3>
                <p className="text-text-muted text-sm leading-relaxed">First automation deployed fast. Then we stay on to manage, optimize, and expand.</p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">03</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">No lock-in</h3>
                <p className="text-text-muted text-sm leading-relaxed">You keep everything we build. No proprietary platforms, no forced migrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            Why We Exist
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            For every &euro;1 spent on software,<br />&euro;6 are spent on the work.
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto">
            <p>
              The AI industry has spent years building tools for the people doing the work. Copilots. Assistants. Productivity layers.
            </p>
            <p>
              We think the bigger opportunity is different. Most businesses don&apos;t need another tool. They need someone to do the work, and do it better than any human team could.
            </p>
            <p className="text-white font-medium">
              That&apos;s what autopilots do. And that&apos;s what we build.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 bg-cream border-b border-sand/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
              The Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              Based in Barcelona. Built to move fast.
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">
              We&apos;re a small team of engineers, operators, and builders. We move fast, we care about every client as if it were our own business, and we measure ourselves by the impact we generate, not by the hours we bill or the licenses we sell.
            </p>
            <p className="text-lg leading-relaxed text-charcoal font-medium mt-4">
              We&apos;re early. We&apos;re hungry. And we believe the companies that adopt AI now will define their industries for the next decade.
            </p>
          </div>

          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div>
              <div className="relative p-3">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-blue/40 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-blue/40 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent-blue/40 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-blue/40 rounded-br-2xl" />
                <Image
                  src="/images/arnau-fabrega.png"
                  alt="Arnau Fabrega"
                  width={560}
                  height={480}
                  className="rounded-xl object-cover w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                Arnau Fabrega
              </h3>
              <span className="text-accent-blue text-sm font-semibold tracking-wide uppercase mb-6">
                Founder &amp; CEO
              </span>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  I spent years at Deloitte helping large corporations in the financial industry. It was great training, but I kept noticing the same thing: AI was changing everything, and most businesses, especially small and mid-sized ones, had no idea what it could actually do for them.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  They didn&apos;t know where to start, and even if they did, the technology moves so fast that what worked six months ago is already outdated.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-charcoal font-medium">
                  I started Autonymo because I wanted to be on the other side, not advising from a slide deck, but actually building and running the systems that make a difference. That&apos;s what we do every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent-blue/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 pointer-events-none select-none opacity-[0.06] blur-sm" aria-hidden="true">
            <Image src="/logo.png" alt="" width={400} height={400} />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
                If you&apos;re ready to start,
                <br />
                so are we.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Book a free 30-minute assessment. We&apos;ll tell you exactly where AI can make the biggest impact on your business, and what it would take to get there.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <Link
                href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
                className="inline-flex items-center justify-center font-medium tracking-tight text-charcoal text-lg bg-white rounded-xl px-8 py-4 hover:bg-white/90 transition-colors active:scale-95 cursor-pointer"
              >
                Book a Free Assessment
              </Link>
              <span className="text-white/30 text-sm">No commitment required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
