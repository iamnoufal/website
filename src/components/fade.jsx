import { Grow } from "@mui/material";
import React from "react";
import '@/styles/Fade.module.css';
import { motion } from "framer-motion";

const Fade = ({ children }) => {
  // const [isVisible, setVisible] = React.useState(false);
  // const domRef = React.useRef();
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  // });
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
}

export default Fade;