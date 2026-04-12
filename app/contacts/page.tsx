import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    label: "Email",
    value: "ocampojetheo22@gmail.com",
    href: "mailto:ocampojetheo22@gmail.com",
    Icon: MdEmail,
  },
  {
    label: "Phone",
    value: "09673105311",
    href: "tel:09673105311",
    Icon: FaPhone,
  },
  {
    label: "Location",
    value: "Cabanatuan City, Nueva Ecija",
    href: "https://maps.google.com/?q=Cabanatuan+City,+Nueva+Ecija",
    Icon: FaLocationDot,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/theopatatas",
    Icon: FaGithub,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jetheo.ocampo",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jetheo-ocampo-b625a5372",
    Icon: FaLinkedinIn,
  },
];

export default function ContactsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#030712_0%,#07142b_42%,#0b1d45_100%)] text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Let&apos;s talk about projects, freelance work, or ideas you want
              to bring to life.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_60px_rgba(3,8,20,0.35)] backdrop-blur-md sm:p-10">
              <h2 className="text-3xl font-semibold text-white">
                Let&apos;s Connect
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
                I&apos;m always interested in hearing about new opportunities
                and interesting projects. Whether you have a question or just
                want to say hi, feel free to reach out.
              </p>

              <div className="mt-10 space-y-5">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Location" ? "_blank" : undefined}
                    rel={label === "Location" ? "noreferrer" : undefined}
                    className="flex items-center gap-4 text-slate-200 transition duration-300 hover:text-sky-300"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/15 bg-sky-400/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-base sm:text-lg">{value}</span>
                  </a>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/15 bg-white/[0.03] text-sky-300 transition duration-300 hover:border-sky-300 hover:bg-sky-400/15 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_60px_rgba(3,8,20,0.35)] backdrop-blur-md sm:p-10">
              <h2 className="text-3xl font-semibold text-white">
                Send a Message
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
