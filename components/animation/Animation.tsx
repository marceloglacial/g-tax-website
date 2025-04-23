"use client";
import * as motion from "motion/react-client";
import { PropsWithChildren } from "react";

interface AnimationProps extends PropsWithChildren {
  delay?: number;
  isHidden?: boolean;
  className?: string;
}

export const Animation = (props: AnimationProps) => {
  return (
    <div className={`${props.isHidden ? "overflow-hidden relative" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.3,
            delay: props.delay || 0,
          },
        }}
        viewport={{ once: true }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </div>
  );
};
