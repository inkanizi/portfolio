import styled from "styled-components";
import About from "./components/About";
import Links from "./components/Links";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import { useState, useEffect } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Line from "./components/Line";

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
const Section = styled.div`
  background-color: black;
  height: 1000px;
`;

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="App">
      <Loader play={playAnimation}>
        <span className="loader"></span>
      </Loader>
      <Wrapper play={playAnimation}>
        <Links />
        <Line />
        <Nav />
        <Preview />
        <About />
        <Skills />
        <Projects />
        <Section />
      </Wrapper>
    </div>
  );
};

export default App;
