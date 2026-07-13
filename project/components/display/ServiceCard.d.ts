import * as React from 'react';
import { IconName } from '../core/Icon';

export type ServiceTone = 'brand' | 'blush' | 'sage' | 'dusk';

/**
 * A marketing service card: icon chip, title, description, optional link.
 * @startingPoint section="Display" subtitle="Icon + title + description service cards" viewport="700x300"
 */
export interface ServiceCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  icon?: IconName;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  tone?: ServiceTone;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
