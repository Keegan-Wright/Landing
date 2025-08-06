import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wrights Dev",
  description: "Landing page for Wrights Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
