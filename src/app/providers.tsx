"use client";
import '@n8n/chat/style.css';
import { ThemeProvider } from "next-themes";
import { createChat } from "@n8n/chat";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    createChat({
      webhookUrl: 'http://localhost:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Hola! 👋',
        'Mi nombre es Patricio. ¿Cómo puedo ayudarte hoy?'
      ],
      i18n: {
        en: {
          title: 'Hola! 👋',
          subtitle: "Comienza una conversación. Estamos aquí para ayudarte 24/7.",
          footer: '',
          getStarted: 'Nueva Conversación',
          inputPlaceholder: 'Escribe tu pregunta..',
          closeButtonTooltip: ''
        },
      },
    });
  }, []);
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
