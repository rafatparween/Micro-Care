import React from 'react';
import { 
  Security, 
  Policy, 
  Description, 
  Cookie,
  DataUsage,
  Share,
  Delete,
  ChildCare,
  Link,
  Update,
  ContactSupport,
  Business,
  Gavel,
  Analytics,
  Notifications,
  Storage,
  TransferWithinAStation,
  Email,
} from '@mui/icons-material';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16">
      {/* Header Section */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
            <Security className="mr-2" />
            <span className="font-semibold">Privacy & Data Protection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Privacy <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn how we collect, use, and protect your personal information
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
                Policy Sections
              </h3>
              <nav className="space-y-2">
                {privacyPolicyContent.map((section, index) => (
                  <Link 
                    key={index}
                    href={`#section-${index}`}
                    className="block text-gray-600 hover:text-[#0095d4] font-medium py-3 px-4 rounded-xl hover:bg-[#59c7b5]/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#59c7b5] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm leading-tight">{section.sectionTitle}</span>
                    </div>
                  </Link>
                ))}
              </nav>
              
              {/* Quick Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 rounded-2xl border border-[#59c7b5]/20">
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <Update className="text-[#59c7b5] mr-2 text-base" />
                  <span className="font-semibold">Last Updated</span>
                </div>
                <p className="text-xs text-gray-600">January 2024</p>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {privacyPolicyContent.map((section, index) => (
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
                        
                        {Array.isArray(subSection.content) ? (
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
                        ) : (
                          <p className="text-gray-700 leading-7 ml-7">
                            {subSection.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl p-12 text-white shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <ContactSupport className="text-6xl mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
                  <p className="text-xl opacity-90 mb-6">
                    We're here to help you understand how we protect your data and privacy.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold mb-4">Contact Our Privacy Team</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Email className="mr-3 text-[#59c7b5]" />
                        <span>support@eztechprintersolutions.com</span>
                      </div>
                      <div className="flex items-center">
                        <Business className="mr-3 text-[#59c7b5]" />
                        <span>123 Tech Center, Ohio, United States</span>
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
  );
};

// Helper function to get appropriate icons for each section
const getSectionIcon = (sectionTitle) => {
  const icons = {
    'Privacy Policy': <Security className="text-white text-2xl" />,
    'Interpretation and Definitions': <Description className="text-white text-2xl" />,
    'Collecting and Using Your Personal Data': <DataUsage className="text-white text-2xl" />,
    'Tracking Technologies and Cookies': <Cookie className="text-white text-2xl" />,
    'Use of Your Personal Data': <Analytics className="text-white text-2xl" />,
    'Retention of Your Personal Data': <Storage className="text-white text-2xl" />,
    'Transfer of Your Personal Data': <TransferWithinAStation className="text-white text-2xl" />,
    'Delete Your Personal Data': <Delete className="text-white text-2xl" />,
    'Disclosure of Your Personal Data': <Share className="text-white text-2xl" />,
    'Security of Your Personal Data': <Security className="text-white text-2xl" />,
    'Children’s Privacy': <ChildCare className="text-white text-2xl" />,
    'Links to Other Websites': <Link className="text-white text-2xl" />,
    'Changes to this Privacy Policy': <Update className="text-white text-2xl" />,
    'Contact Us': <ContactSupport className="text-white text-2xl" />
  };
  
  return icons[sectionTitle] || <Policy className="text-white text-2xl" />;
};

export default PrivacyPolicy;

const privacyPolicyContent = [
  {
    sectionTitle: 'Privacy Policy',
    content: [
      'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.',
      'We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.',
    ],
  },
  {
    sectionTitle: 'Interpretation and Definitions',
    subSections: [
      {
        subTitle: 'Interpretation',
        content:
          'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
      },
      {
        subTitle: 'Definitions',
        content: [
          'Account means a unique account created for You to access our Service or parts of our Service.',
          'Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
          'Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to EzTech-Printer-Solutions , 123 Tech Center, Ohio, United States.',
          'Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.',
          'Country refers to: Ohio, United States',
          'Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.',
          'Personal Data is any information that relates to an identified or identifiable individual.',
          'Service refers to the Website.',
          'Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.',
          'Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).',
          'Website refers to EzTech-Printer-Solutions, accessible from https://eztechprintersolutions.com/',
        ],
      },
    ],
  },
  {
    sectionTitle: 'Collecting and Using Your Personal Data',
    content: [
      'Types of Data Collected',
      'Personal Data',
      'While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:',
      '- Email address',
      '- First name and last name',
      '- Phone number',
      '- Address, State, Province, ZIP/Postal code, City',
      '- Usage Data',
    ],
    subSections: [
      {
        subTitle: 'Usage Data',
        content: [
          'Usage Data is collected automatically when using the Service.',
          'Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.',
          'When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.',
          'We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.',
        ],
      },
    ],
  },
  {
    sectionTitle: 'Tracking Technologies and Cookies',
    content: [
      'We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.',
    ],
    subSections: [
      {
        subTitle: 'Cookies',
        content: [
          'We use Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.',
          'Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).',
          'Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.',
        ],
      },
    ],
  },
  {
    sectionTitle: 'Use of Your Personal Data',
    content: ['The Company may use Personal Data for the following purposes:'],
    subSections: [
      {
        subTitle: 'To provide and maintain our Service',
        content: 'To monitor the usage of our Service.',
      },
      {
        subTitle: 'To manage Your Account',
        content:
          'To manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.',
      },
      {
        subTitle: 'For the performance of a contract',
        content:
          'The development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.',
      },
      {
        subTitle: 'To contact You',
        content:
          "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
      },
      {
        subTitle:
          "To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
      },
      {
        subTitle: 'To manage Your requests',
        content: 'To attend and manage Your requests to Us.',
      },
      {
        subTitle: 'For business transfers',
        content:
          'We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.',
      },
      {
        subTitle: 'For other purposes',
        content:
          'We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.',
      },
    ],
  },
  {
    sectionTitle: 'Retention of Your Personal Data',
    content: [
      'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.',
      'The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.',
    ],
  },
  {
    sectionTitle: 'Transfer of Your Personal Data',
    content: [
      "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
      'Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.',
      'The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.',
    ],
  },
  {
    sectionTitle: 'Delete Your Personal Data',
    content: [
      'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.',
    ],
  },
  {
    sectionTitle: 'Disclosure of Your Personal Data',
    subSections: [
      {
        subTitle: 'Business Transactions',
        content:
          'If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.',
      },
      {
        subTitle: 'Law enforcement',
        content:
          'Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).',
      },
      {
        subTitle: 'Other legal requirements',
        content: [
          'The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:',
          '- Comply with a legal obligation',
          '- Protect and defend the rights or property of the Company',
          '- Prevent or investigate possible wrongdoing in connection with the Service',
          '- Protect the personal safety of Users of the Service or the public',
          '- Protect against legal liability',
        ],
      },
    ],
  },
  {
    sectionTitle: 'Security of Your Personal Data',
    content: [
      'The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.',
    ],
  },
  {
    sectionTitle: "Children's Privacy",
    content: [
      'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.',
      "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.",
    ],
  },
  {
    sectionTitle: 'Links to Other Websites',
    content: [
      "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
      "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    ],
  },
  {
    sectionTitle: 'Changes to this Privacy Policy',
    content: [
      'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.',
      'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
      'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
    ],
  },
  {
    sectionTitle: 'Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, You can contact us:',
      '- By email: support@eztechprintersolutions.com',
    ],
  },
];