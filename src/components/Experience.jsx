import { motion } from "framer-motion";
import { FaBriefcase, FaStore, FaGamepad, FaRocket } from "react-icons/fa";

const experiences = [
  {
    role: "Founder",
    company: "ANHAN",
    period: "2025 – Present",
    icon: <FaRocket />,
    type: "Entrepreneurship",
    description:
      "Founded ANHAN, a menswear parent company operating three sub-brands — beepkickz (shoes & sneakers), rich mane (clothing), and man xcess (watches). Built the brand's catalogue-first e-commerce storefront with WhatsApp ordering across all sub-brands.",
    highlights: [
      "Designed and developed the ANHAN storefront with a product catalogue spanning 3 sub-brands",
      "Implemented a WhatsApp ordering flow — no login needed, customers order directly from listings",
      "Deployed on Vercel; manage sales and customer relationships via Instagram and WhatsApp",
    ],
    links: {
      live: "https://anhan-studio.vercel.app", // 👈 replace
      instagram: "https://instagram.com/anhan.studio", // 👈 replace
    },
  },
  {
    role: "Supervisor & App Developer",
    company: "Game Terminal",
    period: "2 months",
    icon: <FaGamepad />,
    type: "Part-time",
    description:
      "Supervised daily operations at Game Terminal, a gaming zone, while identifying a real pain point: manual tracking of playtime and payments. Designed and built a React Native (Expo + EAS) timer + POS app to solve it — now in production and used daily.",
    highlights: [
      "Built a React Native app with session timers, pay/pending states, and revenue reports",
      "Integrated push notifications for session updates and payment reminders",
      "Shipped a production app end-to-end using AI-assisted development and EAS builds",
    ],
    links: {},
  },
  {
    role: "Cashier & Sales Associate",
    company: "Creative Space",
    period: "2 months",
    icon: <FaStore />,
    type: "Part-time",
    description:
      "Handled billing, customer queries, and product recommendations at Creative Space — a stationery, craft, toys, and gift items store. Built firsthand understanding of customer needs, sales flow, and day-to-day retail operations.",
    highlights: [],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-28 px-[8%]">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1000px] mx-auto"
      >
        <h2 className="text-center text-4xl md:text-5xl text-white mb-16">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative sm:pl-20"
              >
                <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 items-center justify-center text-white text-xl md:text-2xl shadow-lg shadow-blue-500/30">
                  {exp.icon}
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm text-slate-400 font-mono">{exp.period}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <FaBriefcase className="text-blue-400 text-sm" />
                    <span className="text-blue-400 font-medium">{exp.company}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 ml-1">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>

                  {exp.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.links && Object.keys(exp.links).length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {exp.links.live && (
                        <a
                          href={exp.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                          Visit Site
                        </a>
                      )}
                      {exp.links.instagram && (
                        <a
                          href={exp.links.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full hover:bg-purple-500 hover:text-white transition"
                        >
                          Instagram
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;