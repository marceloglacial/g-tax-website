"use client";
import * as motion from "motion/react-client";
import { PropsWithChildren } from "react";

interface AnimationProps extends PropsWithChildren {
  delay?: number;
}

export const Animation = (props: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.25,
          delay: props.delay || 0,
        },
      }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
