import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Service from "./components/service";
import Proposal from "./components/proposal";
import CaseStudy from "./components/caseStudy";
import WorkingProcess from "./components/workingProcess";
import Team from "./components/team";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="mx-6 lg:mx-20">
      <Navbar />
      <Hero />
      <Service />
      <Proposal />
      <CaseStudy />
      <WorkingProcess />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
