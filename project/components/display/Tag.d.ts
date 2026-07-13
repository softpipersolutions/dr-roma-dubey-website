import * as React from 'react';
import { IconName } from '../core/Icon';

/** A chip for categories/filters. Optional icon and remove button; `selected` state. */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  icon?: IconName;
  onRemove?: () => void;
  selected?: boolean;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
