"use client"
import AppHeader from "@/app/components/app-header";
import {AppFooter} from "@/app/components/app-footer";
import { HeroSection } from "./components/hero-section";
import {BlogSection} from "@/app/components/blog-section";
import {PortfolioSection} from "@/app/components/portfolio-section";
import {AboutSection} from "@/app/components/about-section";
import {ContactSection} from "@/app/components/contact-section";
import { ServicesSection } from "./components/services-section";


export default function Home() {
    return (
        <div className="min-h-screen">
            <AppHeader />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <BlogSection />
                <ContactSection />
            </main>
            <AppFooter />
        </div>
  );
}
