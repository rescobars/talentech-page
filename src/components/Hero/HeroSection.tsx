import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative pt-[120px] pb-[110px] lg:pt-[150px] lg:pb-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Soluciones Tecnológicas Económicas para tu Empresa
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Ofrecemos servicios de TI de alta calidad a precios accesibles. Desde desarrollo web hasta consultoría ITIL, 
                tenemos las soluciones que tu empresa necesita para crecer en el mundo digital sin romper el presupuesto.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <p className="text-lg font-semibold text-primary">
                  ¡Transforma tu negocio con tecnología asequible!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/hero/bg.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default HeroSection; 