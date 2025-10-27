"use client";
import { useState } from "react";
import {
  Power,
  Wifi,
  Printer,
  Droplets,
  Settings,
  Wrench,
  Download,
  Monitor,
  Factory,
  Heart,
  Headphones,
  RotateCcw,
  Zap,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Star,
} from "lucide-react";

const PrinterDiagnosticsGuide = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issues = [
    {
      id: 1,
      title: "Printer Not Turning On",
      description: "Learn what to do if your printer won't power up.",
      icon: Power,
      steps: [
        "Check if the power cable is properly connected to both the printer and the wall socket.",
        "Ensure the power switch is turned ON.",
        "Try a different power outlet.",
        "If still not working, unplug the printer for 60 seconds and try again.",
      ],
    },
    {
      id: 2,
      title: "Wi-Fi Connection Problems",
      description: "Fix wireless printer connection issues.",
      icon: Wifi,
      steps: [
        "Ensure the printer Wi-Fi is turned ON.",
        "Restart your router and printer.",
        "Check if your printer is connected to the same Wi-Fi as your device.",
        "Re-run the Wi-Fi setup from the printer's settings menu.",
      ],
    },
    {
      id: 3,
      title: "Ink or Toner Problems",
      description: "Resolve low ink, empty cartridge, or streaky prints.",
      icon: Droplets,
      steps: [
        "Check the ink or toner level in the printer software.",
        "Replace any empty cartridges.",
        "Run the printer's cleaning or alignment utility.",
        "Avoid using non-genuine ink or toner cartridges.",
      ],
    },
    {
      id: 4,
      title: "Paper Jams or Feeding Errors",
      description: "Steps to remove and prevent paper jams.",
      icon: Printer,
      steps: [
        "Turn off the printer and unplug it.",
        "Open all access doors and gently remove jammed paper.",
        "Ensure paper is properly aligned in the tray.",
        "Avoid overloading the paper tray.",
      ],
    },
    {
      id: 5,
      title: "Software or Driver Issues",
      description: "Troubleshoot printer software or driver errors.",
      icon: Download,
      steps: [
        "Reinstall the latest printer driver from the manufacturer’s website.",
        "Restart your computer after installation.",
        "Ensure your printer is selected as the default device.",
      ],
    },
    {
      id: 6,
      title: "Print Quality Problems",
      description: "Fix faded, blurred, or smudged prints.",
      icon: Wrench,
      steps: [
        "Check if you’re using the correct paper type.",
        "Run a print head cleaning cycle.",
        "Ensure cartridges are properly installed.",
        "Avoid touching the print head nozzles.",
      ],
    },
    {
      id: 7,
      title: "Slow Printing Speed",
      description: "Improve your printer’s performance.",
      icon: Clock,
      steps: [
        "Switch to draft mode for faster printing.",
        "Use a wired connection for large print jobs.",
        "Avoid high-resolution printing for simple documents.",
      ],
    },
    {
      id: 8,
      title: "Overheating Printer",
      description: "What to do when your printer gets too hot.",
      icon: Zap,
      steps: [
        "Turn off the printer and let it cool down for 10 minutes.",
        "Ensure proper ventilation around the printer.",
        "Avoid continuous heavy-duty printing.",
      ],
    },
    {
      id: 9,
      title: "Security or Privacy Concerns",
      description: "Protect your printer and documents.",
      icon: Shield,
      steps: [
        "Change your printer’s default admin password.",
        "Keep firmware up to date.",
        "Disable remote printing if not needed.",
      ],
    },
  ];

  const toggleIssue = (id) => {
    setSelectedIssue(selectedIssue === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Printer Diagnostics Guide
        </h1>
        <p className="text-gray-600">
          Quickly diagnose and fix common printer issues with step-by-step
          guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <issue.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {issue.title}
              </h2>
            </div>
            <p className="text-gray-500 mb-4">{issue.description}</p>
            <button
              onClick={() => toggleIssue(issue.id)}
              className="text-blue-600 font-medium hover:underline"
            >
              {selectedIssue === issue.id ? "Hide Steps" : "View Steps"}
            </button>

            {selectedIssue === issue.id && (
              <ul className="mt-4 list-decimal pl-6 text-gray-700 text-left space-y-2">
                {issue.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="flex justify-center items-center gap-3 text-blue-700 mb-3">
          <Headphones className="w-6 h-6" />
          <p className="font-semibold text-lg">
            Need more help? Contact our support team.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md">
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default PrinterDiagnosticsGuide;
