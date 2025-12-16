// "use client";
// import React from 'react';
// import Head from 'next/head'; // Needed for meta tags
// import { 
//   Gavel,
//   Description,
//   Cookie,
//   Copyright,
//   Comment,
//   Link,
//   WebAsset,
//   Security,
//   Policy,
//   Update,
//   Delete,
//   Warning,
//   ContactSupport,
//   Business,
//   ThumbUp
// } from '@mui/icons-material';

// const TermsAndConditions = () => {
//   return (
//     <>
//       <Head>
//         {/* Google Ads Meta Tag */}
//         <meta name="google-site-verification" content="YOUR_GOOGLE_ADS_CODE_HERE" />
//         <title>Terms & Conditions - EzTech-Printer-Solutions</title>
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16">
//         {/* Header Section */}
//         <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16">
//           <div className="text-center">
//             <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
//               <Gavel className="mr-2" />
//               <span className="font-semibold">Legal Terms</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
//               Terms & <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Conditions</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Please read these terms carefully before using our website and services
//             </p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Sidebar Navigation */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-8 border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
//                   <Policy className="text-[#59c7b5] mr-3" />
//                   Quick Navigation
//                 </h3>
//                 <nav className="space-y-2">
//                   {termsAndConditionsContent.map((section, index) => (
//                     <Link
//                       key={index}
//                       href={`#section-${index}`}
//                       className="block text-gray-600 hover:text-[#0095d4] font-medium py-3 px-4 rounded-xl hover:bg-[#59c7b5]/10 transition-all duration-300 group"
//                     >
//                       <div className="flex items-center">
//                         <div className="w-2 h-2 bg-[#59c7b5] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
//                         <span className="text-sm leading-tight">{section.sectionTitle}</span>
//                       </div>
//                     </Link>
//                   ))}
//                 </nav>
                
//                 {/* Important Notice */}
//                 <div className="mt-8 p-4 bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 rounded-2xl border border-[#59c7b5]/20">
//                   <div className="flex items-center text-sm text-gray-700 mb-2">
//                     <Warning className="text-[#59c7b5] mr-2 text-base" />
//                     <span className="font-semibold">Important</span>
//                   </div>
//                   <p className="text-xs text-gray-600">By using our website, you agree to these terms and conditions.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Terms Content */}
//             <div className="lg:col-span-3">
//               <div className="space-y-8">
//                 {termsAndConditionsContent.map((section, index) => (
//                   <section 
//                     key={index}
//                     id={`section-${index}`}
//                     className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 transform hover:shadow-3xl transition-all duration-500 group"
//                   >
//                     {/* Section Header */}
//                     <div className="flex items-start mb-8">
//                       <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         {getSectionIcon(section.sectionTitle)}
//                       </div>
//                       <div className="flex-1">
//                         <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
//                           {section.sectionTitle}
//                         </h2>
//                         <div className="w-20 h-1 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full"></div>
//                       </div>
//                     </div>

//                     {/* Main Content */}
//                     <div className="space-y-6">
//                       {section.content && section.content.map((paragraph, idx) => (
//                         <div key={idx} className="flex items-start group/p">
//                           <div className="bg-[#59c7b5]/10 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/p:scale-110 transition-transform duration-300">
//                             <div className="w-2 h-2 bg-[#59c7b5] rounded-full"></div>
//                           </div>
//                           <p className="text-gray-700 text-lg leading-8 group-hover/p:text-gray-900 transition-colors duration-300 flex-1">
//                             {paragraph.replace(/'/g, "&apos;")} {/* Escape apostrophes */}
//                           </p>
//                         </div>
//                       ))}

//                       {/* Sub Sections */}
//                       {section.subSections && section.subSections.map((subSection, subIdx) => (
//                         <div key={subIdx} className="ml-6 mt-6 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#0095d4] group/s">
//                           <div className="flex items-start mb-4">
//                             <div className="bg-[#0095d4] w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/s:scale-150 transition-transform duration-300"></div>
//                             <h3 className="text-xl font-bold text-gray-800 flex-1">
//                               {subSection.subTitle.replace(/'/g, "&apos;")}
//                             </h3>
//                           </div>
                          
//                           <div className="space-y-3 ml-7">
//                             {subSection.content.map((subParagraph, subPIdx) => (
//                               <div key={subPIdx} className="flex items-start">
//                                 <div className="bg-[#0095d4]/20 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
//                                 <p className="text-gray-700 leading-7 flex-1">
//                                   {subParagraph.replace(/'/g, "&apos;")}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </section>
//                 ))}
//               </div>

//               {/* Agreement Section */}
//               <div className="mt-12 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl p-12 text-white shadow-2xl">
//                 <div className="flex flex-col lg:flex-row items-center gap-8">
//                   <div className="flex-1 text-center lg:text-left">
//                     <ThumbUp className="text-6xl mb-6 mx-auto lg:mx-0 opacity-90" />
//                     <h3 className="text-3xl font-bold mb-4">Agreement Acceptance</h3>
//                     <p className="text-xl opacity-90 mb-6">
//                       By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
//                     </p>
//                   </div>
//                   <div className="flex-1">
//                     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                       <h4 className="text-xl font-bold mb-4">Need Assistance?</h4>
//                       <div className="space-y-3">
//                         <div className="flex items-center">
//                           <ContactSupport className="mr-3 text-[#59c7b5]" />
//                           <span>Contact our legal team for questions</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Business className="mr-3 text-[#59c7b5]" />
//                           <span>EzTech-Printer-Solutions</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Description className="mr-3 text-[#59c7b5]" />
//                           <span>Last Updated: January 2024</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // Helper function to get appropriate icons for each section
// const getSectionIcon = (sectionTitle) => {
//   const icons = {
//     'Welcome to  EzTech-Printer-Solutions !': <ThumbUp className="text-white text-2xl" />,
//     'Terminology': <Description className="text-white text-2xl" />,
//     'Cookies': <Cookie className="text-white text-2xl" />,
//     'License': <Copyright className="text-white text-2xl" />,
//     'Comments': <Comment className="text-white text-2xl" />,
//     'Hyperlinking to our Content': <Link className="text-white text-2xl" />,
//     'iFrames': <WebAsset className="text-white text-2xl" />,
//     'Content Liability': <Security className="text-white text-2xl" />,
//     'Reservation of Rights': <Policy className="text-white text-2xl" />,
//     'Removal of links from our website': <Delete className="text-white text-2xl" />,
//     'Disclaimer': <Warning className="text-white text-2xl" />
//   };
  
//   return icons[sectionTitle] || <Gavel className="text-white text-2xl" />;
// };

// export default TermsAndConditions;

// const termsAndConditionsContent = [
//   {
//     sectionTitle: 'Welcome to  EzTech-Printer-Solutions !',
//     content: [
//       "These terms and conditions outline the rules and regulations for the use of EzTech-Printer-Solutions 's Website, located at https://eztechprintersolutions.com/.",
//       'By accessing this website we assume you accept these terms and conditions. Do not continue to use EzTech-Printer-Solutions  if you do not agree to take all of the terms and conditions stated on this page.',
//     ],
//   },
//   {
//     sectionTitle: 'Terminology',
//     content: [
//       "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.",
//     ],
//   },
//   {
//     sectionTitle: 'Cookies',
//     content: [
//       "We employ the use of cookies. By accessing EzTech-Printer-Solutions, you agreed to use cookies in agreement with the EzTech-Printer-Solutions's Privacy Policy.",
//       "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
//     ],
//   },
//   {
//     sectionTitle: 'License',
//     content: [
//       'Unless otherwise stated,  EzTech-Printer-Solutions  and/or its licensors own the intellectual property rights for all material on EzTech-Printer-Solutions . All intellectual property rights are reserved. You may access this from EzTech-Printer-Solutions  for your own personal use subjected to restrictions set in these terms and conditions.',
//       'You must not:',
//       'Republish material from EzTech-Printer-Solutions ',
//       'Sell, rent or sub-license material from EzTech-Printer-Solutions ',
//       'Reproduce, duplicate or copy material from  EzTech-Printer-Solutions ',
//       'Redistribute content from EzTech-Printer-Solutions ',
//       'This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.',
//     ],
//   },
//   {
//     sectionTitle: 'Comments',
//     content: [
//       'Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. EzTech-Printer-Solutions  does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of EzTech-Printer-Solutions , its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, EzTech-Printer-Solutions  shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.',
//       ' EzTech-Printer-Solutions reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.',
//       'You warrant and represent that:',
//       'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
//       'The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;',
//       'The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy',
//       'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
//       'You hereby grant EzTech-Printer-Solutions a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.',
//     ],
//   },
//   {
//     sectionTitle: 'Hyperlinking to our Content',
//     subSections: [
//       {
//         subTitle: 'Approved Organizations',
//         content: [
//           'The following organizations may link to our Website without prior written approval:',
//           'Government agencies;',
//           'Search engines;',
//           'News organizations;',
//           'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and',
//           'System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.',
//           "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.",
//         ],
//       },
//       {
//         subTitle: 'Other Link Requests',
//         content: [
//           'We may consider and approve other link requests from the following types of organizations:',
//           'commonly-known consumer and/or business information sources;',
//           'dot.com community sites;',
//           'associations or other groups representing charities;',
//           'online directory distributors;',
//           'internet portals;',
//           'accounting, law and consulting firms; and',
//           'educational institutions and trade associations.',
//           'We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of EzTech-Printer-Solutions; and (d) the link is in the context of general resource information.',
//           "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.",
//           "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to EzTech-Printer-Solutions. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.",
//           'Approved organizations may hyperlink to our Website as follows:',
//           'By use of our corporate name; or',
//           'By use of the uniform resource locator being linked to; or',
//           "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.",
//           "No use of EzTech-Printer-Solutions's logo or other artwork will be allowed for linking absent a trademark license agreement.",
//         ],
//       },
//     ],
//   },
//   {
//     sectionTitle: 'iFrames',
//     content: [
//       'Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.',
//     ],
//   },
//   {
//     sectionTitle: 'Content Liability',
//     content: [
//       'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.',
//     ],
//   },
//   {
//     sectionTitle: 'Reservation of Rights',
//     content: [
//       "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
//     ],
//   },
//   {
//     sectionTitle: 'Removal of links from our website',
//     content: [
//       'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.',
//       'We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.',
//     ],
//   },
//   {
//     sectionTitle: 'Disclaimer',
//     content: [
//       'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:',
//       'limit or exclude our or your liability for death or personal injury;',
//       'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
//       'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
//       'exclude any of our or your liabilities that may not be excluded under applicable law.',
//       'The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.',
//       'As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.',
//     ],
//   },
// ];





"use client";
import React from 'react';
import Head from 'next/head';
import { 
  Gavel,
  Description,
  Cookie,
  Copyright,
  Comment,
  Link,
  WebAsset,
  Security,
  Policy,
  Update,
  Delete,
  Warning,
  ContactSupport,
  Business,
  ThumbUp,
  Phone,
  Email,
  Language
} from '@mui/icons-material';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="YOUR_GOOGLE_ADS_CODE_HERE" />
        <title>Terms & Conditions - Micro Hub Care</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16">
        {/* Header Section */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
              <Gavel className="mr-2" />
              <span className="font-semibold">Legal Terms</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              TERMS & <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">CONDITIONS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last Updated: January 2025
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <Policy className="text-[#59c7b5] mr-3" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {termsAndConditionsContent.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="block text-gray-600 hover:text-[#0095d4] font-medium py-3 px-4 rounded-xl hover:bg-[#59c7b5]/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#59c7b5] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-sm leading-tight">{section.sectionTitle}</span>
                      </div>
                    </a>
                  ))}
                </nav>
                
                {/* Important Notice */}
                <div className="mt-8 p-4 bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 rounded-2xl border border-[#59c7b5]/20">
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <Warning className="text-[#59c7b5] mr-2 text-base" />
                    <span className="font-semibold">Important</span>
                  </div>
                  <p className="text-xs text-gray-600">By using our website, you agree to these terms and conditions.</p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {termsAndConditionsContent.map((section, index) => (
                  <section 
                    key={index}
                    id={`section-${index}`}
                    className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 transform hover:shadow-3xl transition-all duration-500 group"
                  >
                    {/* Section Header */}
                    <div className="flex items-start mb-8">
                      <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {getSectionIcon(section.sectionTitle)}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                          {section.sectionTitle}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full"></div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6">
                      {section.content && section.content.map((paragraph, idx) => (
                        <div key={idx} className="flex items-start group/p">
                          <div className="bg-[#59c7b5]/10 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/p:scale-110 transition-transform duration-300">
                            <div className="w-2 h-2 bg-[#59c7b5] rounded-full"></div>
                          </div>
                          <p className="text-gray-700 text-lg leading-8 group-hover/p:text-gray-900 transition-colors duration-300 flex-1">
                            {paragraph}
                          </p>
                        </div>
                      ))}

                      {/* Sub Sections */}
                      {section.subSections && section.subSections.map((subSection, subIdx) => (
                        <div key={subIdx} className="ml-6 mt-6 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#0095d4] group/s">
                          <div className="flex items-start mb-4">
                            <div className="bg-[#0095d4] w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/s:scale-150 transition-transform duration-300"></div>
                            <h3 className="text-xl font-bold text-gray-800 flex-1">
                              {subSection.subTitle}
                            </h3>
                          </div>
                          
                          <div className="space-y-3 ml-7">
                            {subSection.content.map((subParagraph, subPIdx) => (
                              <div key={subPIdx} className="flex items-start">
                                <div className="bg-[#0095d4]/20 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700 leading-7 flex-1">
                                  {subParagraph}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Agreement Section */}
              <div className="mt-12 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl p-12 text-white shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <ThumbUp className="text-6xl mb-6 mx-auto lg:mx-0 opacity-90" />
                    <h3 className="text-3xl font-bold mb-4">Agreement Acceptance</h3>
                    <p className="text-xl opacity-90 mb-6">
                      By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold mb-4">Contact Information</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Phone className="mr-3 text-[#59c7b5]" />
                          <span>Toll-Free Support:(844) 491-5152</span>
                        </div>
                        <div className="flex items-center">
                          <Email className="mr-3 text-[#59c7b5]" />
                          <span>support@microhubcare.com</span>
                        </div>
                        <div className="flex items-center">
                          <Language className="mr-3 text-[#59c7b5]" />
                          <span>https://microhubcare.com</span>
                        </div>
                        <div className="flex items-center">
                          <Business className="mr-3 text-[#59c7b5]" />
                          <span>Micro Hub Care, California, USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper function to get appropriate icons for each section
const getSectionIcon = (sectionTitle) => {
  const icons = {
    '1. Definitions': <Description className="text-white text-2xl" />,
    '2. Acceptance of Terms': <ThumbUp className="text-white text-2xl" />,
    '3. Nature of Our Services': <Business className="text-white text-2xl" />,
    '4. Remote Access Policy': <Security className="text-white text-2xl" />,
    '5. Payment, Billing & Refunds': <Policy className="text-white text-2xl" />,
    '6. Software & Licensing': <Copyright className="text-white text-2xl" />,
    '7. Intellectual Property Rights': <Gavel className="text-white text-2xl" />,
    '8. Limitation of Liability': <Warning className="text-white text-2xl" />,
    '9. Third-Party Links': <Link className="text-white text-2xl" />,
    '10. Service Termination': <Delete className="text-white text-2xl" />,
    '11. Changes to These Terms': <Update className="text-white text-2xl" />,
    '12. Contact Information': <ContactSupport className="text-white text-2xl" />
  };
  
  return icons[sectionTitle] || <Gavel className="text-white text-2xl" />;
};

export default TermsAndConditions;

const termsAndConditionsContent = [
  {
    sectionTitle: '1. Definitions',
    content: [
      'Welcome to Micro Hub Care ("Company", "We", "Us", "Our"). These Terms & Conditions govern your access to and use of https://microhubcare.com and all services provided through our website, phone support, live chat, and remote assistance channels.',
      'By using our website or contacting our toll-free support line (844) 491-5152, you agree to these Terms. If you do not agree, please discontinue use immediately.'
    ],
    subSections: [
      {
        subTitle: 'Key Definitions',
        content: [
          'Client / You / User – any individual or entity using our website or services.',
          'Company / We / Us – Micro Hub Care, based in Ohio, United States.',
          'Service – all support services, consultations, diagnostics, remote sessions, and informational resources provided through our website.',
          'Technician – our in-house or contracted technical experts delivering services.',
          'Website – https://microhubcare.com.'
        ]
      }
    ]
  },
  {
    sectionTitle: '2. Acceptance of Terms',
    content: [
      'By accessing the website, live chat, email, remote session, or our toll-free number (844) 491-5152, you confirm that:'
    ],
    subSections: [
      {
        subTitle: 'Requirements',
        content: [
          'You are at least 18 years old',
          'You understand these Terms',
          'You agree to follow all policies described here',
          'You provide accurate information when requesting support'
        ]
      }
    ]
  },
  {
    sectionTitle: '3. Nature of Our Services',
    content: [
      'Micro Hub Care provides independent technical assistance for various technology issues. We are not affiliated with any printer or computer manufacturer, unless expressly stated.'
    ],
    subSections: [
      {
        subTitle: 'Services We Provide',
        content: [
          'Printer setup, troubleshooting & connectivity',
          'Computer optimization & software configuration',
          'Scanner setup & driver assistance',
          'Network/Wi-Fi related printer problems',
          'Ink cartridge and printing quality issues',
          'Business printer support',
          'Step-by-step guides & tutorials',
          'Remote troubleshooting (with your permission)'
        ]
      }
    ]
  },
  {
    sectionTitle: '4. Remote Access Policy',
    content: [
      'Some issues require remote-access software (Zoho, AnyDesk, TeamViewer, or similar). By allowing remote access, you agree to the following terms:'
    ],
    subSections: [
      {
        subTitle: 'Remote Access Terms',
        content: [
          'You are voluntarily granting access to your device',
          'You may end the session at any time',
          'Our technicians will not access personal files without consent',
          'We do not store any login credentials',
          'You are responsible for backing up important data before the session'
        ]
      }
    ]
  },
  {
    sectionTitle: '5. Payment, Billing & Refunds',
    subSections: [
      {
        subTitle: 'Billing',
        content: [
          'Payments may be processed via card, ACH, authorized invoice, or secure checkout.',
          'You agree that:',
          'You are the authorized owner of the payment method',
          'Billing details you provide are accurate',
          'You consent to charges for selected services'
        ]
      },
      {
        subTitle: 'Refund Policy',
        content: [
          'Refunds are offered ONLY when:',
          'A duplicate payment was made',
          'The service was not delivered due to a technical fault from our side',
          'The original issue could not be resolved',
          '',
          'Refunds will NOT be issued if:',
          'The user refuses troubleshooting steps',
          'A hardware defect is the cause',
          'Issues arise due to third-party software or malware',
          'The user changes their mind after service delivery',
          'The problem is outside the purchased service scope'
        ]
      }
    ]
  },
  {
    sectionTitle: '6. Software & Licensing',
    content: [
      'We maintain strict policies regarding software and licensing to ensure compliance and security.'
    ],
    subSections: [
      {
        subTitle: 'Our Software Policy',
        content: [
          'We do NOT sell unauthorized software',
          'We do NOT provide cracked or illegal programs',
          'We do NOT activate third-party license keys',
          'We only guide clients to download or purchase official, genuine software from the manufacturer\'s website'
        ]
      }
    ]
  },
  {
    sectionTitle: '7. Intellectual Property Rights',
    content: [
      'All content on this website—including guides, layouts, design, text, logos, graphics, and instructions—is the property of Micro Hub Care.'
    ],
    subSections: [
      {
        subTitle: 'Restrictions',
        content: [
          'You may NOT reproduce or republish materials',
          'You may NOT sell or redistribute our content',
          'You may NOT misrepresent our brand or services',
          'You may NOT use our logo without written approval'
        ]
      }
    ]
  },
  {
    sectionTitle: '8. Limitation of Liability',
    content: [
      'Micro Hub Care is not liable for various situations as outlined below. Maximum liability is limited to the amount paid by the user.'
    ],
    subSections: [
      {
        subTitle: 'Exclusions of Liability',
        content: [
          'Pre-existing hardware problems',
          'Slowness caused by old or faulty devices',
          'Internet outages or network failures',
          'Loss of data due to hardware defects',
          'Issues caused by unauthorized modifications by the client',
          'Any damage arising from using guides/tutorials incorrectly'
        ]
      }
    ]
  },
  {
    sectionTitle: '9. Third-Party Links',
    content: [
      'Our website may include external links for driver downloads or references. We are not responsible for the content, security, or policies of third-party websites.'
    ]
  },
  {
    sectionTitle: '10. Service Termination',
    content: [
      'We may refuse or discontinue support under certain circumstances to maintain service quality and security.'
    ],
    subSections: [
      {
        subTitle: 'Termination Conditions',
        content: [
          'Fraudulent behavior is detected',
          'Abusive language is used toward our staff',
          'The user violates these Terms',
          'Technical or safety limitations prevent service continuation'
        ]
      }
    ]
  },
  {
    sectionTitle: '11. Changes to These Terms',
    content: [
      'We may update these Terms anytime. By continuing to use the website or calling our support number, you agree to the updated Terms.'
    ]
  },
  {
    sectionTitle: '12. Contact Information',
    content: [
      'For questions, complaints, or legal inquiries, please contact us through the following channels:'
    ],
    subSections: [
      {
        subTitle: 'Contact Details',
        content: [
          '📞 Toll-Free Support:(844) 491-5152',
          '📧 Email: support@microhubcare.com',
          '🌐 Website: https://microhubcare.com',
          '🏢 Micro Hub Care, California, USA'
        ]
      }
    ]
  }
];
