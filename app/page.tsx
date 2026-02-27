import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection/CoreCapabilitiesSection';
import WhereWeOperateSection from './components/WhereWeOperateSection/WhereWeOperateSection';
import BlogSection from './components/BlogSection/BlogSection';
import BrandsSection from './components/BrandsSection/BrandsSection';
import BottomCtaSection from './components/BottomCtaSection/BottomCtaSection';
import { getOperateItems } from '@/sanity/lib/operateItems';

export default async function Home() {
  const latestOperateItems = await getOperateItems(6);

  return (
    <main>
      <Hero />
      <AboutSection />
      <CoreCapabilitiesSection />
      <WhereWeOperateSection items={latestOperateItems} />
      <BlogSection />
      <BrandsSection/>
      <BottomCtaSection/>
    </main>
  );
}
