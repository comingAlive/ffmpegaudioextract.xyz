const title = "FFmpeg Audio Extract - audio extractor app.";
const description =
  "Minimalistic, WebAssembly powered, a progressive web application for fast audio extraction, video to audio conversion.";

const SEO = {
  title,
  description,
  canonical: "https://ffmpegextract.xyz",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ffmpegextract.xyz",
    title,
    description,
    images: [
      {
        url: "https://ffmpegextract.xyz/static/images/banner.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@maxgarbuz",
    site: "@maxgarbuz",
    cardType: "summary_large_image",
  },
};

export default SEO;
