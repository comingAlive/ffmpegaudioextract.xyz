import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/favicons/site.webmanifest" rel="manifest" />
                    <link
                        rel="preconnect"
                        href="https://cdn.usefathom.com"
                        crossOrigin=""
                    />
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
                    <meta
                        content="/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                </Head>
                <body className="bg-white dark:bg-black text-white dark:text-black">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
