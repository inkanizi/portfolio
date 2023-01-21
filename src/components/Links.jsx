import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { faTelegram, faGithub, faVk } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  align-items: flex-end;
  justify-content: space-between;
  width: 90%;
`;

const Line = styled.div`
  margin-top: 10px;
  height: 85px;
  width: 1px;
  background-color: #e6e707;
`;
const LinkContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Email = styled.span`
  cursor: pointer;
  color: #e6e707;
  font-size: 14px;
  writing-mode: vertical-lr;
  text-align: center;
  padding-left: 3px;
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  cursor: pointer;
  align-items: center;
`;

const Links = () => {
  return (
    <Container>
      <LinkContainer
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          y: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <IconList>
          <a href="https://t.me/inkanizi" title="telegram">
            <FontAwesomeIcon icon={faTelegram} color="#E6E707" />
          </a>
          <a href="https://github.com/inkanizi" title="GitHub">
            <FontAwesomeIcon icon={faGithub} color="#E6E707" />
          </a>
          <a href="https://vk.com/silnoe_toplivo" title="VK">
            <FontAwesomeIcon icon={faVk} color="#E6E707" />
          </a>
          <a href="/" title="Resume">
            <FontAwesomeIcon icon={faFile} color="#E6E707" />
          </a>
        </IconList>
        <Line></Line>
      </LinkContainer>

      <LinkContainer
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          y: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <a href="mailto:petrov.aleksander741@gmail.com" title="Email">
          <Email>petrov.alekasnder@gmail.com</Email>
        </a>
        <Line></Line>
      </LinkContainer>
    </Container>
  );
};

export default Links;
