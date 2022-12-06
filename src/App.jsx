import React from "react";
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

const App = () => (
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
);

export default App;
