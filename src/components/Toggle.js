import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div className="question" layout onClick={() => setToggle(!toggle)}>
      <motion.h1 layout>{title}</motion.h1>
      {toggle ? children : ""}
      <div className="horizontal-line"></div>
    </motion.div>
  );
};

export default Toggle;
