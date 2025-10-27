// import React from 'react';

// export default function Middle() {
//     return (
//         <div className="flex flex-col h-screen">
//             {/* <header className="bg-teal-600 text-white py-4 px-6">
//         <h1 className="text-2xl font-bold">Epson Solutions</h1>
//       </header> */}
//             {/* <div className="h-[42px] w-full bg-[#003399] flex items-center px-4">
//                 <h2 className="text-lg font-bold text-white">Epson Solutions</h2>
//             </div> */}

//             <main className="flex-grow p-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="bg-white shadow-md rounded-lg p-6">
//                         <h2 className="text-xl font-bold mb-4">Warranty Verification</h2>
//                         <p>Verify your Epson limited warranty and Service Plans.</p>
//                         <div className="mt-4">
//                             <img
//                                 src="/waranty.png"
//                                 alt="Mobile Printer"
//                                 className="w-full rounded-lg"
//                             />
//                         </div>
//                     </div>

//                     <div className="bg-white shadow-md rounded-lg p-6">
//                         <h2 className="text-xl font-bold mb-4">Mobile Printing and Scanning</h2>
//                         <p>Easily print or scan from smartphones, tablets, and more.</p>
//                         <div className="mt-4">
//                             <img
//                                 src="/scanning.png"
//                                 alt="Mobile Printer"
//                                 className="w-full rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             <footer className="bg-gray-200 py-4 px-6 text-center">
//                 <p>&copy; Epson</p>
//             </footer>
//         </div>
//     );
// }



import React from 'react';

export default function BrotherMiddle() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
            <main className="flex-grow p-6 md:p-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#003399] mb-2">
                            Brother Solutions Center
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our suite of tools designed to enhance your Brother experience
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Warranty Card */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Warranty Verification</h2>
                                </div>
                                <p className="text-gray-600 mb-6">Verify your Brother limited warranty and Service Plans quickly and easily.</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="/waranty.png"
                                        alt="Warranty Verification"
                                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <button className="mt-6 w-full bg-[#003399] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                    Check Warranty Status
                                </button>
                            </div>
                        </div>

                        {/* Mobile Printing Card */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Mobile Printing & Scanning</h2>
                                </div>
                                <p className="text-gray-600 mb-6">Easily print or scan from smartphones, tablets, and other mobile devices.</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="/scanning.png"
                                        alt="Mobile Printing and Scanning"
                                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                    Get Mobile App
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-12 bg-[#003399] rounded-xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                        <p className="mb-4 opacity-90">Our support team is available  to assist you with any questions.</p>
                        <button className="bg-white text-[#003399] hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                            Contact Support
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-[#003399] py-6 text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold">Brother</h3>
                            <p className="text-blue-100">Innovating your printing experience</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* <div className="mt-4 text-center md:text-left text-blue-100 text-sm">
                        <p>&copy; {new Date().getFullYear()} Brother Corporation. All rights reserved.</p>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}