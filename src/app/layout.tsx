import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WAITELE COMUNICACIONES S.A.S - Fibra Óptica Colombia",
  description: "Servicios de fibra óptica de alta velocidad en Colombia. Planes desde $50,000 COP. Instalación profesional y soporte 24/7. Tu aliado en conectividad eficiente y segura.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
