// "use client";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white pt-8 pb-5 px-0 font-sans text-base select-none">
//       <div className="max-w-[1390px] mx-auto w-full px-6">
//         {/* Top Row: Country/Region Selector */}
//         <div className="flex items-center" style={{ minHeight: 40 }}>
//           <span className="text-white font-semibold">Country/Region:</span>
//           <span className="flex items-center ml-2">
//             <span
//               className="inline-block w-[24px] h-[18px] rounded-sm border border-gray-300 mr-2"
//               style={{ background: "url('https://tse3.mm.bing.net/th/id/OIP.I_FctCDr3tafgvZkUVaWFgHaHa?pid=Api&P=0&h=180') center/cover" }}
//             ></span>
//             <span className="text-yellow-300 font-semibold"></span>
//           </span>
//         </div>


//         <hr className="my-4 border-gray-600" />

//         {/* Columns */}
//         <div className="flex flex-wrap md:flex-nowrap text-[17px]">
//           {/* About */}
//           <div className="min-w-[180px] flex-1 mb-6">
//             {/* <div className="text-[18px] mb-2 font-normal">About Us</div> */}
//             <ul className="space-y-2 text-white/[0.92]">
//             <li><Link href="/" className="hover:underline">Home</Link></li>
//               <li><Link href="/about" className="hover:underline">About Us</Link></li>
//               <li><Link href="/pages/service" className="hover:underline">Service</Link></li>
//               <li><Link href="/Contact" className="hover:underline">contact</Link></li>
//               <li><Link href="/Disclaimer" className="hover:underline">Disclaimer</Link></li>
//               <li><Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
//               <li><Link href="/terms-conditions" className="hover:underline">Terms and Conditions</Link></li>
//             </ul>
//           </div>

//           {/* Ways to buy */}
//           <div className="min-w-[210px] flex-1 mb-6">
//             <div className="text-[18px] mb-2 font-normal">Ways to buy</div>
//             <ul className="space-y-2 text-white/[0.92]">
//               <li><Link href="/" className="hover:underline">Shop online</Link></li>
//               <li><Link href="/" className="hover:underline">HP World: Brand exclusive stores</Link></li>
//               <li><Link href="/" className="hover:underline">Call an HP rep</Link></li>
//               <li><Link href="/" className="hover:underline">Find a reseller</Link></li>
//               <li><Link href="/" className="hover:underline">HP Promotions</Link></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div className="min-w-[270px] flex-1 mb-6">
//             <div className="text-[18px] mb-2 font-normal">Support</div>
//             <ul className="space-y-2 text-white/[0.92]">
//               <li><Link href="/" className="hover:underline">Download drivers</Link></li>
//               <li><Link href="/" className="hover:underline">Support & troubleshooting</Link></li>
//               <li><Link href="/" className="hover:underline">Community</Link></li>
//               <li><Link href="/" className="hover:underline">Authorized service providers</Link></li>
//               <li><Link href="/" className="hover:underline">Check repair status</Link></li>
//               <li><Link href="/" className="hover:underline">Featured links</Link></li>
//             </ul>
//           </div>

//           {/* Partners / Social */}
//           <div className="min-w-[200px] flex-1 mb-6 md:pl-8">
//             <div className="text-[18px] mb-2 font-normal">HP Partners</div>
//             <ul className="space-y-2 text-white/[0.92]">
//               <li><Link href="/" className="hover:underline">HP Amplify Partner Program</Link></li>
//               <li><Link href="/" className="hover:underline">HP Partner Portal</Link></li>
//               <li><Link href="/" className="hover:underline">Developers</Link></li>
//             </ul>

//             <div className="mt-4">
//               <div className="text-[18px] mb-2 font-normal">Stay connected</div>
//               <div className="flex space-x-7 text-[30px] mt-0.5">
//                 <Link href="https://facebook.com" target="_blank"><FaFacebookF className="hover:text-sky-400" /></Link>
//                 <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-rose-400" /></Link>
//                 <Link href="https://twitter.com" target="_blank"><FaXTwitter className="hover:text-gray-400" /></Link>
//                 <Link href="https://youtube.com" target="_blank"><FaYoutube className="hover:text-red-600" /></Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="my-4 border-gray-600" />

//         {/* Links Row */}
//         <div className="flex flex-wrap gap-x-5 gap-y-2 text-gray-300 text-[16px] mb-2">
//           <Link href="/" className="hover:underline">Recalls</Link>
//           <span>|</span>
//           <Link href="/" className="hover:underline">Product recycling</Link>
//           <span>|</span>
//           <Link href="/" className="hover:underline">Accessibility</Link>
//           <span>|</span>
//           <Link href="/" className="hover:underline"> CSR Policy</Link>
//           <span>|</span>
//           <Link href="/" className="hover:underline">Entity Annual Return</Link>
//           <span>|</span>
//           <Link href="/privacypolicy" className="hover:underline">Privacy</Link>
//           <span>|</span>
//           <Link href="/terms-conditions" className="hover:underline">Terms of use</Link>
//           <span>|</span>
//           <Link href="/" className="hover:underline">Cookie Preferences</Link>
//         </div>

       
//       </div>
//     </footer>
//   );
// }



"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-5 px-0 font-sans text-base select-none">
      <div className="max-w-[1390px] mx-auto w-full px-6">
        {/* Top Row: Country/Region Selector */}
        <div className="flex items-center" style={{ minHeight: 40 }}>
          <span className="text-white font-semibold">Country/Region:</span>
          <span className="flex items-center ml-2">
            <span
              className="inline-block w-[24px] h-[18px] rounded-sm border border-gray-300 mr-2"
              style={{ background: "url('https://tse3.mm.bing.net/th/id/OIP.I_FctCDr3tafgvZkUVaWFgHaHa?pid=Api&P=0&h=180') center/cover" }}
            ></span>
            <span className="text-yellow-300 font-semibold"></span>
          </span>
        </div>


        <hr className="my-4 border-gray-600" />

        {/* Columns */}
        <div className="flex flex-wrap md:flex-nowrap text-[17px]">
          {/* About */}
          <div className="min-w-[180px] flex-1 mb-6">
            {/* <div className="text-[18px] mb-2 font-normal">About Us</div> */}
            <ul className="space-y-2 text-white/[0.92]">
            <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/pages/service" className="hover:underline">Service</Link></li>
              <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/Disclaimer" className="hover:underline">Disclaimer</Link></li>
              <li><Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/refund-and-cancellation" className="hover:underline">Refund, Return & Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Ways to buy */}
          {/* <div className="min-w-[210px] flex-1 mb-6">
            <div className="text-[18px] mb-2 font-normal">Ways to buy</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li><Link href="/" className="hover:underline">Shop online</Link></li>
               <li><Link href="/SignIn" className="hover:underline">Sign in </Link></li>
              <li><Link href="/" className="hover:underline">Explore</Link></li>
              <li><Link href="/" className="hover:underline">Support</Link></li>
             
              <li><Link href="/cart" className="hover:underline">Cart</Link></li>
            </ul>
          </div> */}

          {/* Support */}
          <div className="min-w-[270px] flex-1 mb-6">
            <div className="text-[18px] mb-2 font-normal">Support</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li><Link href="/printeroffline" className="hover:underline">Printer Offline</Link></li>
              <li><Link href="/printersetup" className="hover:underline">Printer Setup</Link></li>
              <li><Link href="/scannersetup" className="hover:underline">Scanner Setup</Link></li>
              <li><Link href="/supporthome" className="hover:underline">Support Home</Link></li>
              <li><Link href="/inkissue" className="hover:underline">Ink Cartridges Issue</Link></li>
              <li><Link href="/diagnostics" className="hover:underline">Diagnostics</Link></li>
            </ul>
          </div>

          {/* Partners / Social */}
          <div className="min-w-[200px] flex-1 mb-6 md:pl-8">
            <div className="text-[18px] mb-2 font-normal">Important links</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li><Link href="/" className="hover:underline">Business Support</Link></li>
              <li><Link href="/" className="hover:underline">Do Not Sell My Personal Information

</Link></li>
              <li><Link href="/" className="hover:underline">Developers</Link></li>
            </ul>

            <div className="mt-4">
              <div className="text-[18px] mb-2 font-normal">Stay connected</div>
              <div className="flex space-x-7 text-[30px] mt-0.5">
                <Link href="https://facebook.com" target="_blank"><FaFacebookF className="hover:text-sky-400" /></Link>
                <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-rose-400" /></Link>
                <Link href="https://twitter.com" target="_blank"><FaXTwitter className="hover:text-gray-400" /></Link>
                <Link href="https://youtube.com" target="_blank"><FaYoutube className="hover:text-red-600" /></Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-600" />

       
      </div>
    </footer>
  );
}

