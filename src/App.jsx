import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services_em } from "./components/services_e_m";
import { Services_hidro } from "./components/services_hidro";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ToastContainer } from "react-toastify";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
    
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services_hidro data={landingPageData.Services_hidro} />
      <Services_em data={landingPageData.Services_em} />
      <Gallery data={landingPageData.Gallery} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
     {/*
      */}
     {/*
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />*/}
        <a
     // href="https://api.whatsapp.com/send?phone=558534853343&text=Olá, gostaria de mais informações sobre os serviços da Novameta."
     //target="_blank"
      href="#contact" 
     className="btn btn-wapp  btn-lg page-scroll" 
      >
        <i className="fa fa-whatsapp"></i>
      </a>{" "}
    </div>
  );
};

export default App;
