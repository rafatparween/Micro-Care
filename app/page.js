import Image from "next/image";

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import PrinterSupportOptions from "./Components/PrinterSupportOptions";
// import PrinterProductList from "./Components/PrinterProductList";
import JivoChat from "./JivoChat";
import SupportSection from "./Components/SupportSection";
import PrinterSetupSection from "./Components/PrinterSetupSection";
import EnhancedPrinterSolutions from "./Components/EnhancedPrinterSolutions";


export default function Home() {
  return (
    <>
  
      <Header/>
      <SupportSection/>
      <PrinterSetupSection/>
      {/* <Banner/> */}
      <PrinterSupportOptions/>
      {/* <PrinterProductList/> */}
      <EnhancedPrinterSolutions/>
      <JivoChat/>
    
    </>
  );
}
