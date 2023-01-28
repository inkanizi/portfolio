import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: space-between;
  width: 70%;
`;
const Logo = styled.h1`
  color: #e6e707;
`;
const InfoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InfoItem = styled(motion.div)`
  margin: 10px;
  cursor: pointer;
  color: #e8e8e8;

  &::before {
    content: ".";
    color: #e6e707;
    font-size: 22px;
  }
`;

const Nav = () => {
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 376) {
      setScreen(false);
    } else {
      setScreen(true);
    }
  }, []);

  return (
    <Container
      initial={{ opacity: 0, y: "-5vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Logo>ink</Logo>
      {screen ? (
        <InfoList>
          <InfoItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, type: "just" },
            }}
            whileTap={{ scale: 0.9 }}
          >
            about
          </InfoItem>
          <InfoItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, type: "just" },
            }}
            whileTap={{ scale: 0.9 }}
          >
            experience
          </InfoItem>
          <InfoItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, type: "just" },
            }}
            whileTap={{ scale: 0.9 }}
          >
            projects
          </InfoItem>
        </InfoList>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Nav;
