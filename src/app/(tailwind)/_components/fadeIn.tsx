'use client';

import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

interface FadeInProps {
  delay?: number;
  className?: string;
}

export const FadeIn: FC<PropsWithChildren<FadeInProps>> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, delay, ease: [ 0.22, 1, 0.36, 1 ] }}
    className={className}
  >
    {children}
  </motion.div>
);
