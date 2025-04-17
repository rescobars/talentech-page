import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos | TalenTech - Soluciones Tecnológicas para PYMES",
  description: "Somos una empresa especializada en soluciones tecnológicas para PYMES, ayudando a reducir costos y optimizar procesos",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quiénes Somos"
        description="En TalenTech nos especializamos en brindar soluciones tecnológicas a medida para PYMES, ayudándolas a reducir costos operativos y mejorar su eficiencia a través de la tecnología."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
