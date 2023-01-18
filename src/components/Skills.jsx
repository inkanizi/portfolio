import React from "react";
import styled from "styled-components";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { motion } from "framer-motion";

const Container = styled.div`
  margin: 400px 0px 0 0;
  width: 1000px;
`;
const Title = styled.h1`
  color: #e8e8e8;
  padding-bottom: 20px;
  &::before {
    content: ".";
    color: #e6e707;
    font-size: 26px;
  }
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const Skils = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: "30vh" }}
        duration={{ duration: 7 }}
        transition={{ type: "just" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Block>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Title>my skills</Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            duration={{ duration: 6 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TagCloud
            options={() => ({
              radius: 300,
              maxSpeed: "fast",
            })}
            onClickOptions={{ passive: true }}
          >
            {[
              "VSCode",
              "React",
              "Git",
              "Node",
              "JavaScript",
              "ES5/ES6",
              "Express",
              "Figma",
              "SASS",
            ]}
          </TagCloud>
          </motion.div>
          
        </Block>
      </motion.div>
    </Container>
  );
};

export default Skils;
