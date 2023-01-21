import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  margin: 300px 400px 0 0;
`;
const Title = styled(motion.h1)`
  font-size: 56px;
  color: #e8e8e8;
  padding-bottom: 20px;
  &::after {
    content: ".is()";
    color: #e6e707;
  }
`;
const Name = styled(motion.h2)`
  color: #e6e707;
  padding: 20px 0;
`;
const SubTitle = styled(motion.h1)`
  color: #555;
`;

const Preview = () => {
  return (
    <div className="Preview">
      <Container>
        <Title
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          myName
        </Title>

        <Name
          initial={{ opacity: 0, y: "-10vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aleksander Petrov
        </Name>

        <SubTitle
          initial={{ opacity: 0, y: "-10vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Junior Web Developer
        </SubTitle>
      </Container>
    </div>
  );
};

export default Preview;
