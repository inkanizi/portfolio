import { useRef, useState, useEffect } from "react";
import { easeInOut, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Line = () => {
  const [widthLine] = useState(1500);
  const [heightLine] = useState(2000);
  const [points, setPoints] = useState({
    xPoint1: 0,
    xPoint2: 0,
    xPoint3: 0,
    yPoint1: 0,
    yPoint2: 0,
    yPoint3: 0,
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
      xPoint3: (widthLine * 75) / 100,
      yPoint1: (heightLine * 20) / 100,
      yPoint2: (heightLine * 45) / 100,
      yPoint3: (heightLine * 75) / 100,
    });
  }, [widthLine]);

  return (
    <div className="line" ref={ref}>
        <motion.div 
        className="startPoint"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          yoyo: Infinity
        }}
        >
        </motion.div>
      <motion.svg height="2000px" width={widthLine}>
        <motion.path
          d={`
            M ${points.xPoint1} ${points.yPoint1}
            L ${points.xPoint1} ${points.yPoint2}
            L ${points.xPoint2} ${points.yPoint2} 
            L ${points.xPoint2} ${points.yPoint3}
            `}
          stroke="#e6e707"
          stroke-width="2"
          fill="transparent"
          pathLength="1"
          style={{ pathLength: scrollYProgress }}
        />

        {/* <motion.line
          x1="75%"
          y1="300px"
          x2="75%"
          pathLength="0"
          y2="1000px"
          stroke="red"
        />
        <motion.line
          pathLength="1"
          style={{ pathLength: scrollYProgress }}
          transition={{ duration: 4}}
          x1="75%"
          x2="10%"
          y1="1000px"
          y2="1000px"
          stroke="red"
        />
        <motion.line
          pathLength="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, yoyo: Infinity, ease: "easeInOut" }}
          x1="10%"
          y1="1000px"
          x2="10%"
          y2="2000px"
          stroke="red"
        /> */}
      </motion.svg>
    </div>
  );
};

export default Line;
