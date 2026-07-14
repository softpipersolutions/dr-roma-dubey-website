import { ServiceCard } from '@/components/ds';
import { SERVICES } from '@/lib/services';

export function ServiceGrid() {
  return (
    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
      {SERVICES.map((s) => (
        <div key={s.slug} className="reveal">
          <ServiceCard
            icon={s.icon}
            title={s.shortTitle}
            description={s.summary}
            tone={s.tone}
            href={`/services/${s.slug}`}
            linkLabel="Learn more"
          />
        </div>
      ))}
    </div>
  );
}
