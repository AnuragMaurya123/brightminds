'use client';

import { motion, Variants, MotionProps, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import { ElementType, useRef } from 'react';
import React from 'react';

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.2,
  delayMultiple = 0.02,
  className,
  as: Component = 'span',
  variants,
  ...props
}: FlipTextProps) {
  const MotionComponent = motion(Component);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const characters = React.Children.toArray(children)
    .map((child) => (typeof child === 'string' ? child : ''))
    .join('')
    .split('');

  return (
    <div
      className={cn(
        'flex justify-center flex-wrap gap-x-[2px] sm:gap-x-[3px] md:gap-x-[4px] leading-tight',
        className
      )}
      ref={ref}
    >
      {characters.map((char, i) => (
        <MotionComponent
          key={i}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants || defaultVariants}
          transition={{ duration, delay: i * delayMultiple }}
          className={cn(
            'origin-center drop-shadow-sm text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl',
            char === ' ' ? 'inline-block w-[0.5ch]' : ''
          )}
          {...props}
        >
          {char === ' ' ? '\u00A0' : char}
        </MotionComponent>
      ))}
    </div>
  );
}
