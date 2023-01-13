import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Marquee from "react-fast-marquee";
import project1 from "../images/project1.png";
import { useScroll, motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 400px;
  width: 75%;
`;
const Title = styled.h1`
  padding-left: 110px;
  color: #e8e8e8;
  padding-bottom: 50px;
  &::before {
    content: ".";
    color: #e6e707;
    font-size: 26px;
  }
`;
const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  &:nth-child(even) {
    justify-content: flex-end;
  }
`;

const Project = styled.div`
  padding: 150px;
  display: flex;
  width: 650px;
  flex-direction: column;
  align-items: flex-start;
  color: #e8e8e8;
  justify-content: space-between;
`;

const Image = styled.img`
  object-fit: cover;
  position: relative;
  height: 350px;
  width: 650px;
  z-index: 1;
  align-items: flex-end;
`;

const ImageCore = styled.div`
  position: relative;
  height: 350px;
  width: 650px;
  z-index: 2;
  background: #e6e707;
`;

const Tags = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 90%;
`;
const Tag = styled.span`
  padding-right: 50px;
`;
const Name = styled.h2`
  color: #e6e707;
  font-size: 38px;
  letter-spacing: 2px;
  padding-bottom: 20px;
`;

const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  margin-left: 40px;
`;

const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <Container>
      <Title>projects</Title>
      <ProjectList>
        <ProjectContainer ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            duration={{ duration: 4 }}
            transition={{ type: "just" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Project>
              <a href="/">
                <Name>bittype</Name>
              </a>
              <ImageCore>
                <Image sizes="cover" src={project1} />
              </ImageCore>
              <Tags>
                <Marquee gradient={false} speed={50} className="marquee">
                  <Tag>React</Tag>
                  <Tag>Styled Components</Tag>
                  <Tag>Express</Tag>
                  <Tag>Redux</Tag>
                  <Tag>Lorem</Tag>
                </Marquee>
                <LinkList>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      color="#e6e707"
                    />
                  </a>
                </LinkList>
              </Tags>
            </Project>
          </motion.div>
        </ProjectContainer>
        <ProjectContainer>
          <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            duration={{ duration: 4 }}
            transition={{ type: "just" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Project>
              <a href="/">
                <Name>quotes forum</Name>
              </a>
              <ImageCore>
                <Image sizes="cover" src={project1} />
              </ImageCore>
              <Tags>
                <Marquee gradient={false} speed={50} className="marquee">
                  <Tag>React</Tag>
                  <Tag>NestJs</Tag>
                  <Tag>Express</Tag>
                  <Tag>Redux</Tag>
                </Marquee>
                <LinkList>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      color="#e6e707"
                    />
                  </a>
                </LinkList>
              </Tags>
            </Project>
          </motion.div>
        </ProjectContainer>
        <ProjectContainer>
          <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            duration={{ duration: 4 }}
            transition={{ type: "just" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Project>
              <a href="/">
                <Name>wetheriva</Name>
              </a>
              <ImageCore>
                <Image sizes="cover" src={project1} />
              </ImageCore>
              <Tags>
                <Marquee gradient={false} speed={50} className="marquee">
                  <Tag>React</Tag>
                  <Tag>Redux</Tag>
                  <Tag>OpenWeather API</Tag>
                  <Tag>Redux</Tag>
                </Marquee>
                <LinkList>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      color="#e6e707"
                    />
                  </a>
                </LinkList>
              </Tags>
            </Project>
          </motion.div>
        </ProjectContainer>
      </ProjectList>
    </Container>
  );
};

export default Projects;
