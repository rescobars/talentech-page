import ScrollUp from "@/components/Common/ScrollUp";
import HeroSection from "@/components/Hero/HeroSection";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TalentTech - Plataforma de Gestión de Talento",
  description: "Plataforma integral para la gestión y desarrollo del talento en tu organización",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HeroSection />
      <Features />
      <Contact />
    </>
  );
}
