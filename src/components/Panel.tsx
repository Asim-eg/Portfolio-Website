import { motion, useReducedMotion } from "framer-motion";
import { type PropsWithChildren } from "react";

type PanelProps = PropsWithChildren<{
  className?: string;
  direction?: "left" | "right" | "up";
  id: string;
}>;

export function Panel({ children, className = "", direction = "up", id }: PanelProps) {
  const reducedMotion = useReducedMotion();
  const offset = {
    left: { x: -72, y: 0 },
    right: { x: 72, y: 0 },
    up: { x: 0, y: 42 },
  }[direction];

  return (
    <section className={`panel ${className}`} id={id}>
      <motion.div
        className="panel-inner"
        initial={reducedMotion ? false : { opacity: 0, ...offset }}
        transition={{ duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
        viewport={{ amount: 0.12, once: false }}
        whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
