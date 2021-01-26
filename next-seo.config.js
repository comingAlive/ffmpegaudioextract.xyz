const title = "FFmpeg Audio Extract - instant video to audio converter.";
const description =
  "A minimalistic web application for instant audio extraction; video to audio conversion.";

const SEO = {
  title,
  description,
  canonical: "https://ffmpegaudioextract.xyz",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ffmpegaudioextract.xyz",
    title,
    description,
    images: [
      {
        url: "https://ffmpegaudioextract.xyz/static/images/banner.png",
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
