import * as React from 'react';

export interface AccordionItem { title: React.ReactNode; content: React.ReactNode; }

/** Expandable FAQ-style list. `single` keeps one open; `multiple` allows many. */
export interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  /** Indices open by default */
  defaultOpen?: number[];
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
