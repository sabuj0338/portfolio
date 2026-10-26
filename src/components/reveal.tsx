import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms, for staggering siblings
};

// Fades and lifts its children in the first time they scroll into view.
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out-expo motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
