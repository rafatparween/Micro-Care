import Image from "next/image";

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import PrinterSupportOptions from "./Components/PrinterSupportOptions";
import PrinterProductList from "./Components/PrinterProductList";
import JivoChat from "./JivoChat";


export default function Home() {
  return (
    <>
  
      <Header/>
      <Banner/>
      <PrinterSupportOptions/>
      <PrinterProductList/>
      <JivoChat/>
    
    </>
  );
}
