import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ScrollReveal } from '@/components/site/ScrollReveal';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
