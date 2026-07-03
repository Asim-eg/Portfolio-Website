import { type PropsWithChildren } from "react";

type PanelProps = PropsWithChildren<{
  className?: string;
  direction?: "left" | "right" | "up";
  id: string;
}>;

export function Panel({ children, className = "", id }: PanelProps) {
  return (
    <section className={`panel ${className}`} id={id}>
      <div className="panel-inner">{children}</div>
    </section>
  );
}
