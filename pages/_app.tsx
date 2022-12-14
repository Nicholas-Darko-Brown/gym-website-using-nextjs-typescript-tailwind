import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      return (await require("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
