import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinePath = styled(motion.div)`
    position: absolute;
    top: 0;
`
const StartPoint = styled(motion.div)`
    position: absolute;
    top: 6%;
    left: 74%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e6e707;
`

const Line = () => {
  const [widthLine] = useState(1500);
  const [heightLine] = useState(6800);

  const [points, setPoints] = useState({
    xPoint1: 0,
    xPoint2: 0,
    xPoint3: 0,
    xPoint4: 0,
    yPoint1: 0,
    yPoint2: 0,
    yPoint3: 0,
    yPoint4: 0,
    yPoint5: 0,
    yPoint6: 0,
    yPoint7: 0,
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setPoints({
      xPoint1: (widthLine * 75) / 100,
      xPoint2: (widthLine * 10) / 100,
      xPoint3: (widthLine * 85) / 100,
      xPoint4: (widthLine * 50) / 100,
      yPoint1: (heightLine * 6) / 100,
      yPoint2: (heightLine * 45) / 100,
      yPoint3: (heightLine * 28) / 100,
      yPoint4: (heightLine * 62) / 100,
      yPoint5: (heightLine * 73) / 100,
      yPoint6: (heightLine * 89) / 100,
      yPoint7: (heightLine * 97) / 100,
    });
  }, [widthLine, heightLine]);

  return (
    <LinePath ref={ref}>
      <StartPoint
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          yoyo: Infinity,
        }}
      ></StartPoint>
      <motion.svg height={heightLine} width={widthLine}>
        <motion.path
          d={`
            M ${points.xPoint1} ${points.yPoint1}
            V ${points.xPoint1}
            H ${points.xPoint2} 
            V ${points.yPoint3}
            H ${points.xPoint3}
            V ${points.yPoint4} 
            H ${points.xPoint2}
            V ${points.yPoint5}
            H ${points.xPoint3}  
            V ${points.yPoint6}
            H ${points.xPoint4}
            V ${points.yPoint7}
            `}
          stroke="#e6e707"
          strokeWidth="2"
          transition={{ duration: 2 }}
          fill="transparent"
          pathLength="1"
          style={{ pathLength: scrollYProgress }}
        />
      </motion.svg>
    </LinePath>
  );
};

export default Line;
