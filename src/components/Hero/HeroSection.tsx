import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-[120px] pb-[110px] lg:pt-[150px] lg:pb-[120px] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/tech-pattern.png')] opacity-5 dark:opacity-10"></div>
      </div>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Soluciones Tecnológicas Accesibles para Pymes
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Moderniza tu empresa sin romper el presupuesto. Ofrecemos servicios tecnológicos integrales 
                diseñados específicamente para pequeñas y medianas empresas, incluyendo outsourcing de personal IT, 
                desarrollo de software personalizado, migración a la nube, modernización de sistemas, consultoría 
                tecnológica, soporte 24/7 y agentes de IA para automatizar tus procesos.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Solicita una Cotización
                </Link>
                <p className="text-lg font-semibold text-primary">
                  ¡Optimiza tus costos con tecnología de vanguardia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 