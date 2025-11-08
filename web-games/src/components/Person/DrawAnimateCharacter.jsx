import { motion } from "framer-motion";

export function DrawAnimateCharacter ({sprite, move, direction}) {
    return (<motion.div
      animate={{ x: move ? (direction === "right" ? 300 : -300) : 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: 100, height: 100 }}
      className="character"
    >
      <img src={sprite} alt="" />
    </motion.div>
  );
}