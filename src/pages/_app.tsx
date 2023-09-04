import { GlobalStyles } from "@/styles/globalStyles";
import "@/styles/globals.css";
import "@fontsource/poppins";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
