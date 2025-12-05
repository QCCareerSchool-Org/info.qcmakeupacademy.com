import type { FC } from 'react';

interface Props {
  text: string | string[];
  name: string;
  title: string;
}

export const Testimonial: FC<Props> = ({ text, name, title }) => (
  <>
    <h3 style={{ fontSize: 80, marginBottom: '-30px' }}>&rdquo;</h3>
    {typeof text === 'string'
      ? <p className="serif" style={{ fontSize: 24, lineHeight: 1.375 }}>{text}</p>
      : text.map((t, i) => <p key={i} className="serif" style={{ fontSize: 24, lineHeight: 1.375 }}>{t}</p>)}
    <p className="mb-0"><span className="serif" style={{ fontSize: 28 }}>{name}</span><br />{title}</p>
  </>
);
