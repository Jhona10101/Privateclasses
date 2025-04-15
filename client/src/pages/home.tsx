import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import AdditionalInfoSection from "@/components/home/additional-info-section";
import EducationSection from "@/components/home/education-section";
import AboutUsSection from "@/components/home/about-us-section";
import ContactCTA from "@/components/home/contact-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-16 pb-8">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <AdditionalInfoSection />
        <EducationSection />
        <AboutUsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
