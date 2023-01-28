import styled from "styled-components";
import About from "./components/About";
import Links from "./components/Links";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import { useState, useEffect } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Line from "./components/Line";
import Contact from "./components/Contact";

const Loader = styled.div`
  display: ${(props) => (props.play ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 100px;
`;

const Wrapper = styled.div`
  display: ${(props) => (props.play ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(()=>{
    
  }, [])

  return (
    <div className="App">
      <Loader play={playAnimation}>
        <span className="loader"></span>
      </Loader>
      <Wrapper play={playAnimation}>
        {/* <Links /> */}
        <Line />
        <Nav />
        <Preview />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Wrapper>
    </div>
  );
};

export default App;
