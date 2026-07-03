import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  useEffect,
  useRef,
} from "react";

type FadeInProps = PropsWithChildren<
  {
    className?: string;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
  }
>;

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, x, y }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "50px" }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function Magnet({ children, className }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const springX = useSpring(x, { damping: 18, stiffness: 130, mass: 0.35 });
  const springY = useSpring(y, { damping: 18, stiffness: 130, mass: 0.35 });

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion || !window.matchMedia("(hover: hover)").matches) {
      return undefined;
    }

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance > 150) {
        x.set(0);
        y.set(0);
        return;
      }

      x.set(distanceX / 3);
      y.set(distanceY / 3);
    };

    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    element.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, [reducedMotion, x, y]);

  return (
    <motion.div className={className} ref={ref} style={{ x: springX, y: springY, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}

function AnimatedChar({
  char,
  index,
  progress,
  total,
}: {
  char: string;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = (index / Math.max(total, 1)) * 0.78;
  const opacity = useTransform(progress, [start, Math.min(start + 0.2, 1)], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function AnimatedText({ className, text }: { className?: string; text: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = text.split(" ");
  const total = text.replace(/\s/g, "").length;
  let charIndex = 0;

  if (reducedMotion) {
    return (
      <p className={className} ref={ref}>
        {text}
      </p>
    );
  }

  return (
    <p className={className} ref={ref}>
      {words.map((word, wordIndex) => (
        <span className="animated-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((char) => {
            const current = charIndex;
            charIndex += 1;
            return (
              <AnimatedChar char={char} index={current} key={`${word}-${current}`} progress={scrollYProgress} total={total} />
            );
          })}
          {wordIndex < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </p>
  );
}

type ButtonProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>>;

export function GradientButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <a className={`gradient-button ${className}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}

export function GhostButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <a className={`ghost-button ${className}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
