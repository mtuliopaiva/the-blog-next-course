import type { Metadata } from "next";
import "./globals.css";

//Como se fosse o head do document
export const metadata: Metadata = {
  title: "The Blog - Este é um Blog com Next.js",
  description: "Essa seria uma descrição para a página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
// O RootLayout é o layout raiz da aplicação, que envolve todas as páginas

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <header>
        <h1>Header</h1>
      </header>

      <body>{children}</body>

      <footer>
        <h1>footer</h1>
      </footer>
    </html>
  );
}
