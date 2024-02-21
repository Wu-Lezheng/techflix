import './globals.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { Inter } from 'next/font/google';
import { LayoutProvider } from "./layoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechFlix",
  description: "A platform to showcase products from ST Engineering",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
