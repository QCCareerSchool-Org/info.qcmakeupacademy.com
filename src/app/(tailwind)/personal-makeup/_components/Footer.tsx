import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-linen-dark py-12 px-6 border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl font-bold text-charcoal">QC Makeup Academy</h4>
          <p className="font-sans text-sm text-charcoal/60 mt-2">© 2024 All Rights Reserved.</p>
        </div>
        <div className="flex gap-6 font-sans text-sm text-charcoal/60 uppercase tracking-widest">
          <a href="#" className="hover:text-charcoal transition-colors">Privacy</a>
          <a href="#" className="hover:text-charcoal transition-colors">Terms</a>
          <a href="#" className="hover:text-charcoal transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
