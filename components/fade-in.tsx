"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof HTMLElementTagNameMap;
  delay?: number;
}

export function FadeIn({
  as: Component = "div",
  delay = 0,
  className,
  children,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as React.MutableRefObject<any>}
      className={cn(
        "transform-gpu opacity-0 transition duration-700 ease-out will-change-[transform,opacity]",
        visible && "translate-y-0 opacity-100",
        !visible && "translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
