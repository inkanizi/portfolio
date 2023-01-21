import React from "react";
import styled from "styled-components";
import { useAnimationControls, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  height: 1000px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 50%;
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

const ArrowContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 600px;
`;

const Arrow = styled(motion.div)`
  color: #e6e707;
  font-size: 26px;
  display: flex;
  align-items: center;
`;

const Contact = () => {
  const controls = useAnimationControls();

  const scrollHandler = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        contact
      </Title>
      <ArrowContainer animate={controls}>
        <Arrow>
          <FontAwesomeIcon
            style={{ paddingRight: "20px" }}
            icon={faArrowLeft}
            color="#E6E707"
          />
          <span>social</span>
        </Arrow>
        <Arrow>
          <span>email</span>
          <FontAwesomeIcon
            style={{ paddingLeft: "20px" }}
            icon={faArrowRight}
            color="#E6E707"
          />
        </Arrow>
      </ArrowContainer>
    </Container>
  );
};

export default Contact;
