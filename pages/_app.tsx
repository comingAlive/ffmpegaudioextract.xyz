import "@/styles/tailwind.css";
import "@/styles/global.css";
import "@/styles/custom.css";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import SEO from "../next-seo.config";

const MetaLinkHead = () => {
  return (
    <Head>
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color="#5bbad5"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="#000000" name="theme-color" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
    </Head>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MetaLinkHead />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
