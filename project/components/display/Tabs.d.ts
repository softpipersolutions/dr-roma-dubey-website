import * as React from 'react';
import { IconName } from '../core/Icon';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: IconName;
  content?: React.ReactNode;
}

/** Underline or pill tab set. Controlled (`value`) or uncontrolled (`defaultValue`). */
export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
