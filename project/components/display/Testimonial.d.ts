import * as React from 'react';

/** A patient review: star rating, quote, and author row with avatar. */
export interface TestimonialProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  /** 0–5 filled stars. Default 5 */
  rating?: number;
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
