import { Inter } from "next/font/google";
import Head from 'next/head'; // Import the Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Store",
  description: "Welcome to My eCommerce Store. Discover our latest products and deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        {children}
      </body>
    </html>
  );
}
