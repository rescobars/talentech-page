import SectionTitle from "@/components/Common/SectionTitle";
import ServiceCard from "@/components/Services/ServiceCard";
import servicesData from "./servicesData";

export const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Servicios Económicos"
          paragraph="Ofrecemos soluciones tecnológicas de calidad a precios accesibles para pequeñas y medianas empresas"
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 