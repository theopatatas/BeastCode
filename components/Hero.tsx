"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";

const floatingIcons = [
  {
    label: "JavaScript",
    Icon: SiJavascript,
    className:
      "left-0 top-10 text-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.28)]",
    bgClassName: "bg-yellow-400/10",
    delay: 0,
  },
  {
    label: "React",
    Icon: SiReact,
    className:
      "right-0 top-24 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.28)]",
    bgClassName: "bg-cyan-400/10",
    delay: 0.4,
  },
  {
    label: "Vue",
    Icon: SiVuedotjs,
    className:
      "bottom-8 left-12 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.26)]",
    bgClassName: "bg-emerald-400/10",
    delay: 0.8,
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <motion.div
          className="relative z-10 flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.h1
            {...fadeInUp(0)}
            className="max-w-[12ch] text-4xl font-semibold leading-tight text-white sm:max-w-none sm:text-5xl lg:text-7xl"
          >
            Hello
            <br />
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Theo Ocampo
            </span>
            ,
            <br />
            web developer
          </motion.h1>

          <motion.p
            {...fadeInUp(0.12)}
            className="mt-5 text-base font-medium text-slate-300 sm:mt-6 sm:text-xl"
          >
            Full Stack developer
          </motion.p>

          <motion.p
            {...fadeInUp(0.2)}
            className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
          >
            I build fast, responsive websites and web apps that help
            businesses attract customers and grow online.
          </motion.p>

          <motion.div {...fadeInUp(0.3)} className="mt-8 sm:mt-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex"
            >
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.45)] transition duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] sm:px-7 sm:py-3.5"
              >
                Let&apos;s Get Deal
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-first flex items-center justify-center lg:order-none"
        >
          <div className="relative flex h-[19rem] w-[19rem] items-center justify-center sm:h-[25rem] sm:w-[25rem] lg:h-[29rem] lg:w-[29rem]">
            <div className="absolute inset-7 rounded-full border border-sky-300/15 bg-white/5 blur-2xl sm:inset-8" />
            <div className="absolute inset-5 rounded-full border border-white/10 bg-gradient-to-br from-slate-900 via-[#131a3a] to-[#0a1330] shadow-[0_0_70px_rgba(37,99,235,0.24)] sm:inset-6" />

            {floatingIcons.map(({ Icon, label, className, bgClassName, delay }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay,
                }}
                className={`absolute z-20 rounded-2xl border border-white/12 p-3 backdrop-blur-md sm:p-4 ${bgClassName} ${className}`}
              >
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" aria-label={label} />
              </motion.div>
            ))}

            <div className="relative z-10 flex h-[13.75rem] w-[13.75rem] items-center justify-center rounded-full border border-sky-200/10 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_rgba(15,23,42,0.9)_60%)] shadow-[0_0_45px_rgba(56,189,248,0.24)] isolate sm:h-[17.5rem] sm:w-[17.5rem] lg:h-[20rem] lg:w-[20rem]">
              <div className="absolute inset-4 rounded-full border border-white/8 bg-white/[0.02] sm:inset-5" />
              <div className="absolute inset-x-12 bottom-8 h-6 rounded-full bg-sky-300/15 blur-xl sm:inset-x-16 sm:bottom-10 sm:h-7" />
              <div className="relative h-[8.75rem] w-[8.75rem] sm:h-[11rem] sm:w-[11rem] lg:h-[13.5rem] lg:w-[13.5rem]">
                <Image
                  src="/avatar.png"
                  alt="Theo Ocampo avatar"
                  fill
                  priority
                  className="object-contain object-center scale-[1.08] drop-shadow-[0_10px_28px_rgba(15,23,42,0.5)]"
                  sizes="(max-width: 640px) 8.75rem, (max-width: 1024px) 11rem, 13.5rem"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
