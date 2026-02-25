import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection/CoreCapabilitiesSection';
import WhereWeOperateSection from './components/WhereWeOperateSection/WhereWeOperateSection';
import BlogSection from './components/BlogSection/BlogSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <CoreCapabilitiesSection />
      <WhereWeOperateSection />
      <BlogSection />
    </main>
  );
}
