'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { FC, PropsWithChildren } from 'react';

import { useEscapeKeydown } from '@/hooks/useEscapeKeydown';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Modal: FC<PropsWithChildren<Props>> = ({ show, onHide, children }) => {
  useEscapeKeydown(onHide);

  const handleHide = onHide;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <button
            onClick={handleHide}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close video"
          >
            <X className="w-10 h-10" />
          </button>

          {children}

          {/* Close on background click */}
          <div className="absolute inset-0 -z-10" onClick={handleHide} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
