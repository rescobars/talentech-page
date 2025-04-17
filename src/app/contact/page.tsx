import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | TalenTech - Soluciones Tecnológicas",
  description: "Ponte en contacto con nuestro equipo para conocer más sobre nuestros servicios tecnológicos",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
