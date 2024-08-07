import Head from 'next/head'; // Import the Head component
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import ProductsScreen from "@/screen/ProductsScreen";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home - My E-Commerce Store</title>
        <meta name="description" content="Welcome to My eCommerce Store. Discover our latest products and deals." />
      </Head>
      
      <Navbar />
      <div className={styles.center}>
        <Hero />
      </div>
      <ProductsScreen />
      <Footer />
    </main>
  );
}
