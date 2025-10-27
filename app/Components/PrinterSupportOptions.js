const options = [
  {
    label: "Printer Setup",
    image: "/Printer-setup.svg",
  },
  {
    label: "Printer offline or print job stuck in queue",
    image: "\Printer-offline-or-print-job-stuck-in-queue.svg",
  },
  {
    label: "Wireless Printer Connectivity",
    image: "/Wireless-printer-connectivity.svg",
  },
  {
    label: "Ink Cartridge or Toner Issue",
    image: "/Ink-cartride-issue.svg",
  },
  {
    label: "Scanning and faxing",
    image: "/Scanning-or-faxing.svg",
  },
  {
    label: "Paper jam issue",
    image: "/Paper-jam.svg",
  },
  {
    label: "Color or black ink not printing",
    image: "/Color-or-black-ink-not-printing.svg",
  },
   {
    label: "Other",
    image: "/Other.svg",
  },
];

export default function PrinterSupportOptions() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#f7f7f7] py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-16 w-full max-w-[1360px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          <span
            style={{
              background: "linear-gradient(to top, #59c7b5, #59c7b5, #0095d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Which printer question
          </span>
          <br />
          <span className="text-gray-800">can we help you with?</span>
        </h1>
        <div
          className="w-32 h-2 rounded-full mx-auto mb-6"
          style={{
            background: "linear-gradient(to right, #59c7b5, #0095d4)",
          }}
        ></div>
      </div>

      {/* Options Grid - Fixed spacing for rows */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1360px] mx-auto gap-y-20">
       {options.map((option, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center cursor-pointer transform hover:-translate-y-3 transition-all duration-500"
            style={{
              marginTop: idx >= 4 ? "4rem" : "0", // Second row ko extra top margin
            }}
          >
            {/* Enhanced Image Container */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-5 shadow-2xl z-10 group-hover:scale-110 group-hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#59c7b5] w-44 h-44 flex items-center justify-center overflow-hidden">
  <img
    src={option.image}
    alt={option.label}
    className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-lg"
  />
</div>

            {/* Enhanced Card Body */}
            <div className="w-full bg-white rounded-2xl shadow-xl pt-36 pb-8 px-6 flex justify-center items-center text-center group-hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#59c7b5] min-h-[200px] hover:bg-gradient-to-br hover:from-white hover:to-[#f0fdfa]">
              <span className="text-[#007DBD] text-xl font-bold leading-tight group-hover:text-gray-900 transition-colors duration-300 group-hover:font-extrabold">
                {option.label}
              </span>
            </div>

            {/* Enhanced Hover Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: "linear-gradient(135deg, #59c7b5, #0095d4)",
                filter: "blur(15px)",
                transform: "scale(0.95)",
              }}
            ></div>

            {/* Floating Animation */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-x-150"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Bottom CTA */}
      <div className="text-center mt-20 w-full max-w-[1360px] mx-auto">
        <button
          className="flex items-center gap-4 mx-auto text-white font-black py-5 px-14 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 group hover:scale-105 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #59c7b5, #0095d4)",
          }}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <span className="text-xl tracking-wide relative z-10">Contact Live Support</span>
          <svg
            className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        
       
      </div>
    </div>
  );
}