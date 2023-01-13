import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  margin: 0 0px 0 0;
  width: 1000px;
`;
const Title = styled.h1`
  color: #e8e8e8;
  position: relative;
  padding-bottom: 20px;
  &::before {
    content: ".";
    color: #e6e707;
    font-size: 26px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Text = styled.p`
  padding-bottom: 20px;
  color: #e8e8e8;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  text-indent: 30px;
`;

const Image = styled.div`
  width: 400px;
  height: 400px;
  background-color: #493c77;
`;

const About = () => {
  return (
    <Container>
      <Title>about me</Title>
      <motion.div
        initial={{ opacity: 0, y: "10vh" }}
        duration={{ duration: 4 }}
        transition={{ type: "just" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <Row>
          <TextContainer>
            <Text>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </Text>
            <Text>
              Fast-forward to today, and I ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </Text>
            <Text>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </Text>
          </TextContainer>
          <Image />
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;
