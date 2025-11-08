import { motion, AnimatePresence } from "framer-motion";

export function DrawAnimateCharacter({ sprite, move, direction }) {
  return (
    <div className="character-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={sprite}
          className="character"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            x: move ? (direction === "right" ? 300 : -300) : 0,
            y: 0,
            opacity: 1,
          }}
          exit={{
            x: direction === "right" ? 300 : -300,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={sprite}
            alt="character"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
