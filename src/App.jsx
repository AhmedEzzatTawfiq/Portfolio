import React, { useEffect, useState, Suspense } from "react";

const Header = React.lazy(() => import("./components/1-header/Header"));
const Hero = React.lazy(() => import("./components/2-hero/Hero"));
const Main = React.lazy(() => import("./components/3-main/Main"));
const Contact = React.lazy(() => import("./components/4-contact/Contact"));
const Footer = React.lazy(() => import("./components/5-footer/Footer"));

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Suspense fallback={<div></div>}>
        <Header />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </Suspense>

      <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
