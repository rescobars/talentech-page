interface Agent {
  id: number;
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
  price: string;
  link: string;
}

const agentsData: Agent[] = [
  {
    id: 1,
    title: "Agente Asistente",
    description: "Optimiza tu comunicación empresarial con nuestro agente especializado en correos electrónicos",
    features: [
      "Resumen automático de correos electrónicos",
      "Priorización de mensajes importantes",
      "Respuestas automáticas personalizadas",
      "Organización de bandejas de entrada",
      "Seguimiento de conversaciones importantes"
    ],
    isActive: true,
    price: "Desde $99/mes",
    link: "/agents/assistant"
  },
  {
    id: 2,
    title: "Agente de RRHH",
    description: "Automatiza y optimiza tus procesos de recursos humanos con inteligencia artificial",
    features: [
      "Screening inicial de candidatos",
      "Análisis de CVs y perfiles",
      "Programación de entrevistas",
      "Gestión de onboarding",
      "Seguimiento de desempeño"
    ],
    isActive: true,
    price: "Desde $149/mes",
    link: "/agents/hr"
  },
  {
    id: 3,
    title: "Agente de Finanzas",
    description: "Toma el control de tus finanzas con nuestro agente especializado en análisis financiero",
    features: [
      "Análisis de estados financieros",
      "Predicción de flujo de caja",
      "Detección de anomalías",
      "Optimización de gastos",
      "Reportes financieros automáticos"
    ],
    isActive: true,
    price: "Desde $199/mes",
    link: "/agents/finance"
  }
];

export default agentsData; 