import "@/styles/custom.css";
import "@/styles/global.css";
import "@/styles/tailwind.css";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
