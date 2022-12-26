import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Websites from "./components/websites/Websites";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Websites />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
