// import reactLogo from "./assets/solar.jpg";
// import viteLogo from "/vite.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient2";
import LineGradientPrimary1 from "./components/LineGradient1";
import LineGradientPrimary3 from "./components/LineGradient3";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Airplane from "./scenes/Airplane";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        window.scroll(0, el.offsetTop);
      }
    }, 200);
  }, []);

  return (
    <div className="app bg-deep-blue relative">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="bg-pattern-landing">
        <div className="w-5/6 mx-auto">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradient />
      <div className="bg-pattern-skills">
        <div className="w-5/6 mx-auto">
          <MySkills setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradientPrimary1 />
      <div className="bg-pattern-projects">
        <div className="w-5/6 mx-auto">
          <Projects setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <LineGradientPrimary3 />
      <div className="md:min-h-[100dvh] flex flex-col ">
        <div className="w-5/6 mx-auto flex-grow flex flex-col justify-center">
          <Contact setSelectedPage={setSelectedPage} />
        </div>
        <Airplane height={"140px"} />
        <Footer setSelectedPage={setSelectedPage} className="z-10 mt-auto" />
      </div>
    </div>
  );
}

export default App;
