"use client";
import {
  FaPowerOff,
  FaSync,
  FaTint,
  FaTools,
  FaQuestionCircle,
  FaHeadset,
} from "react-icons/fa";
import { MdPrint, MdWarning, MdSettings, MdMemory } from "react-icons/md";
import { RiInkBottleFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function InkCartridgeGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-[#0f2040] to-[#122a56] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Ink Cartridge Troubles? Let’s Fix It!
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Quick, clear, and complete solutions for every ink cartridge issue — from installation
            to low-ink warnings — made simple.
          </p>
        </div>

        {/* Common Problems */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/10 shadow-lg border border-white/20 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 flex items-center mb-6">
            <MdWarning className="text-yellow-400 mr-2" />
            Common Ink Cartridge Problems
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            {[
              "Cartridge not recognized",
              "Low or empty ink warning (even if new)",
              "Poor print quality (streaks, faded prints, wrong colors)",
              "Ink not flowing properly after replacement",
              "Cartridge stuck or jammed in printer",
            ].map((problem, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-cyan-400 rounded-full" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2">
            <FaTools className="text-blue-500" /> Step-by-Step Fixes
          </h2>

          {[
            {
              icon: <RiInkBottleFill />,
              title: "Check Compatibility",
              points: [
                "Ensure cartridge matches your printer model.",
                "Check cartridge number on the box or manual.",
                "Use approved or OEM cartridges if possible.",
              ],
            },
            {
              icon: <FaPowerOff />,
              title: "Power Cycle the Printer",
              points: [
                "Turn off and unplug the printer for 60 seconds.",
                "Plug back in and restart.",
                "Clears temporary recognition issues.",
              ],
            },
            {
              icon: <FaSync />,
              title: "Reinsert Cartridges",
              points: [
                "Open access door and wait for carriage to stop.",
                "Remove and reinsert cartridges securely.",
              ],
            },
            {
              icon: <MdPrint />,
              title: "Clean Cartridge Contacts",
              points: [
                "Use lint-free cloth and distilled water.",
                "Wipe gently and let dry before reinserting.",
              ],
            },
            {
              icon: <MdSettings />,
              title: "Align & Calibrate Printer",
              points: [
                "Open printer software > Maintenance > Calibrate.",
                "Align heads for accurate ink flow.",
              ],
            },
            {
              icon: <FaTint />,
              title: "Run a Printhead Cleaning Cycle",
              points: [
                "Go to Maintenance > Clean Printhead.",
                "Repeat 2–3 times if needed.",
              ],
            },
            {
              icon: <MdMemory />,
              title: "Check Ink Levels",
              points: [
                "View ink levels via software or control panel.",
                "Replace low cartridges as needed.",
              ],
            },
            {
              icon: <FaSync />,
              title: "Reset the Ink System",
              points: [
                "Hold Resume/Cancel for 5–10 seconds.",
                "Refer to manual for correct reset steps.",
              ],
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-2xl shadow-md mb-4 sm:mb-0 sm:mr-6">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {i + 1}. {step.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {step.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center">
            <FaQuestionCircle className="mr-3 text-indigo-500" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Why does my printer say 'Ink Cartridge Not Recognized' even after installing a new one?",
                a: "Possible reasons include dirty contacts, firmware issues, or an incompatible cartridge. Clean and reinsert carefully.",
              },
              {
                q: "How can I make my ink cartridges last longer?",
                a: "Print often, use draft mode for daily prints, and store cartridges in a cool, dry place.",
              },
              {
                q: "Why is my printer printing blank pages even with full ink?",
                a: "Your printhead may be clogged. Run the cleaning cycle 2–3 times.",
              },
              {
                q: "Can I use refilled or third-party cartridges?",
                a: "Yes, but ensure they are compatible and note that firmware updates may block some brands.",
              },
            ].map((f, i) => (
              <div key={i} className="border-b border-white/20 pb-4">
                <h3 className="text-lg font-semibold text-cyan-300">{f.q}</h3>
                <p className="text-gray-300 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-3 flex justify-center items-center gap-2">
            <FaHeadset /> Need Pro Assistance?
          </h2>
          <p className="text-lg mb-6">
            Our certified experts at{" "}
            <span className="font-semibold text-yellow-300">
              Micro Hub Care
            </span>{" "}
            are available  to fix your printer or cartridge issues remotely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1-800-INK-HELP"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold shadow hover:shadow-lg transition-all"
            >
              📞 Call: 1-800-INK-HELP
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-blue-800/50 border border-white/30 text-white font-semibold hover:bg-blue-700/60 transition-all"
            >
              💬 Live Chat Now
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-10 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} Micro Hub Care — All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
