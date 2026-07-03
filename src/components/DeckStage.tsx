import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

const movingVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? "14vw" : "-14vw",
    scale: 0.965,
    filter: "blur(14px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? "-16vw" : "16vw",
    scale: 0.965,
    filter: "blur(14px)",
  }),
};

const reducedVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

type DeckStageProps = PropsWithChildren<{
  activeKey: string;
  direction: number;
}>;

export function DeckStage({ activeKey, children, direction }: DeckStageProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="deck-stage">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          animate="center"
          className="deck-slide"
          custom={direction}
          exit="exit"
          initial="enter"
          key={activeKey}
          transition={
            reducedMotion
              ? { duration: 0.16, ease: "easeOut" }
              : { duration: 0.62, ease: [0.16, 1, 0.3, 1] }
          }
          variants={reducedMotion ? reducedVariants : movingVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
