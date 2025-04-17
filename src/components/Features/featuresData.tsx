import { Feature } from "@/types/feature";
import { FaUsers, FaCode, FaCloud, FaSyncAlt, FaLightbulb, FaHeadset, FaRobot } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaUsers className="w-10 h-10" />,
    title: "Outsourcing de Personal IT",
    paragraph: "Accede a talento especializado en TI sin los costos fijos de contratación. Nuestros profesionales trabajan como extensión de tu equipo, adaptándose a tus necesidades específicas.",
  },
  {
    id: 2,
    icon: <FaCode className="w-10 h-10" />,
    title: "Desarrollo de Software",
    paragraph: "Creamos soluciones tecnológicas personalizadas que se adaptan perfectamente a tus procesos de negocio, garantizando eficiencia, escalabilidad y retorno de inversión.",
  },
  {
    id: 3,
    icon: <FaCloud className="w-10 h-10" />,
    title: "Migración a la Nube",
    paragraph: "Moderniza tu infraestructura tecnológica migrando tus sistemas a la nube. Reducimos costos operativos y mejoramos la flexibilidad de tus operaciones.",
  },
  {
    id: 4,
    icon: <FaSyncAlt className="w-10 h-10" />,
    title: "Modernización de Sistemas",
    paragraph: "Actualizamos tus sistemas legacy a tecnologías modernas, mejorando la eficiencia operativa y reduciendo significativamente los costos de mantenimiento.",
  },
  {
    id: 5,
    icon: <FaLightbulb className="w-10 h-10" />,
    title: "Consultoría Tecnológica",
    paragraph: "Te asesoramos en la adopción de las mejores prácticas y tecnologías actuales, ayudándote a tomar decisiones informadas para tu transformación digital.",
  },
  {
    id: 6,
    icon: <FaHeadset className="w-10 h-10" />,
    title: "Soporte 24/7",
    paragraph: "Mantenemos tus sistemas operando de manera óptima con soporte técnico continuo y mantenimiento preventivo, incluyendo servidores, correo y servicios críticos.",
  },
  {
    id: 7,
    icon: <FaRobot className="w-10 h-10" />,
    title: "Agentes de IA",
    paragraph: "Automatiza tus procesos empresariales con nuestros agentes de IA especializados, diseñados para mejorar la eficiencia y reducir costos operativos.",
  },
];
export default featuresData;
