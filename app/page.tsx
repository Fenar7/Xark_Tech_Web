import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection/CoreCapabilitiesSection';
import WhereWeOperateSection from './components/WhereWeOperateSection/WhereWeOperateSection';
import BlogSection from './components/BlogSection/BlogSection';
import BrandsSection from './components/BrandsSection/BrandsSection';
import BottomCtaSection from './components/BottomCtaSection/BottomCtaSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <CoreCapabilitiesSection />
      <WhereWeOperateSection />
      <BlogSection />
      <BrandsSection/>
      <BottomCtaSection/>
    </main>
  );
}
