import React from "react";
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
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InfoItem = styled.div`
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
  return (
    <Container
      initial={{ opacity: 0, y: "-5vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Logo>ink</Logo>
      <InfoList>
        <InfoItem>about</InfoItem>
        <InfoItem>experience</InfoItem>
        <InfoItem>projects</InfoItem>
      </InfoList>
    </Container>
  );
};

export default Nav;
