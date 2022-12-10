import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  Hero,
  Cards,
  Clients,
  CTA,
  Footer,
  Services,
  Contact,
} from "./components";

const App = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return  (
      <>
       <div className="bg-black">
       <Header />
        <Hero />
       </div>
        <Clients />
        <Cards />
        <Services />
        <Contact />
        <CTA />
        <Footer />
      </>
  )
}

export default App;
