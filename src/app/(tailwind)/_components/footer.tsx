import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-linen-dark py-12 px-6 border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl font-bold text-charcoal">QC Makeup Academy</h4>
          <p className="font-sans text-sm text-charcoal/60 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6 font-sans text-sm text-charcoal/60 uppercase tracking-widest">
          <a href="https://www.qcmakeupacademy.com/terms.html" target="_blank" className="hover:text-charcoal transition-colors">Privacy</a>
          <a href="mailto:info@qcmakeupacademy.com" className="hover:text-charcoal transition-colors">info@qcmakeupacademy.com</a>
          <a href="tel:1-833-600-3751" className="hover:text-charcoal transition-colors">1-833-600-3751</a>
        </div>
      </div>
    </footer>
  );
};
