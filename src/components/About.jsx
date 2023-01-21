import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import photo from "../images/photoforezume.jpg";

const Container = styled.div`
  margin: 0 0px 0 0;
  width: 1000px;
`;
const Title = styled(motion.h1)`
  color: #e8e8e8;
  position: relative;
  padding-bottom: 20px;
  &::before {
    content: ".";
    color: #e6e707;
    font-size: 26px;
  }
`;

const Row = styled(motion.div)`
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

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;
const ImageFilter = styled.div`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #e6e707;
    mix-blend-mode: multiply;
  }
`;

const About = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        about me
      </Title>

      <Row
        initial={{ opacity: 0, y: "10vh" }}
        duration={{ duration: 4 }}
        transition={{ type: "just" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TextContainer>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, eius
            at ex corporis obcaecati veritatis dicta tempore autem debitis
            mollitia pariatur iste, rerum natus, asperiores minima quisquam
            aliquid ea optio hic amet! Deleniti quas quasi placeat modi
            necessitatibus impedit? Sapiente optio, adipisci natus fugiat qui
            maxime consequuntur voluptatem rem laudantium at? Neque libero
            soluta consequuntur atque?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            nihil voluptatibus sed a quia sit aspernatur, at velit voluptas
            corrupti. Accusantium, animi? Impedit, ex.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            accusamus nesciunt qui officiis, voluptatum magnam libero.
          </Text>
        </TextContainer>
        <ImageFilter>
          <Image src={photo} />
        </ImageFilter>
      </Row>
    </Container>
  );
};

export default About;
