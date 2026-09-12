"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

const revealLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

const revealRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easing,
    },
  },
};

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealLeft({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      variants={revealLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealRight({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      variants={revealRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div variants={staggerItemVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function HeroSequence({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 26,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: easing,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.975,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.75,
        ease: easing,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionOl({
  children,
  ...props
}: HTMLMotionProps<"ol"> & { children: ReactNode }) {
  return (
    <motion.ol
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      {...props}
    >
      {children}
    </motion.ol>
  );
}

export function MotionLi({
  children,
  ...props
}: HTMLMotionProps<"li"> & { children: ReactNode }) {
  return (
    <motion.li variants={staggerItemVariants} {...props}>
      {children}
    </motion.li>
  );
}
