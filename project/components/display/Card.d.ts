import * as React from 'react';

export type CardVariant = 'elevated' | 'outline' | 'soft' | 'cream' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/**
 * A warm rounded surface container. Base building block for grouped content.
 * @startingPoint section="Display" subtitle="Warm surface cards — elevated, outline, soft, cream" viewport="700x260"
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  variant?: CardVariant;
  padding?: CardPadding | string;
  radius?: string;
  /** Adds a hover lift; use for clickable cards */
  interactive?: boolean;
  as?: any;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
