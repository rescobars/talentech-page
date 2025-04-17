import SectionTitle from "@/components/Common/SectionTitle";
import agentsData from "./agentsData";
import Link from "next/link";

const AgentsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Agentes de IA"
          paragraph="Automatiza tus procesos empresariales con nuestros agentes especializados en IA"
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agentsData.map((agent) => (
            <div
              key={agent.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-600 mb-4">{agent.description}</p>
              <ul className="mb-4 space-y-2">
                {agent.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-primary font-semibold">{agent.price}</span>
                <Link
                  href={agent.link}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection; 