const IconFacebook = ({ width = 24, height = 24, color = "currentColor" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill={color}
      aria-label="Thichtienganh facebook fanpage"
    >
      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
    </svg>
  );
};

export default {
  titleSuffix: " – Thích Tài Liệu",
  search: true,
  unstable_stork: true,
  floatTOC: true,
  projectLinkIcon: <IconFacebook />,
  projectLink: 'https://www.facebook.com/ThichTiengAnhFP', 
  logo: () => (
    <>
      <img src="/logo.png" width="50px" loading="lazy" />
      <span className="mx-2 font-extrabold hidden md:inline select-none">
        Thích Tài Liệu
      </span>
      <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
        🦄 Ở đây có tài liệu miễn phí và không quảng cáo 🦄
      </span>
    </>
  ),
  head: ({ title, meta }) => {
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta
          name="description"
          content={
            meta.description ||
            " Thích Tài Liệu - Ở đây có tài liệu miễn phí và không quảng cáo"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            " Thích Tài Liệu - Ở đây có tài liệu miễn phí và không quảng cáo"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Thích Tài Liệu" />
        <meta
          name="twitter:image"
          content={
            meta.image ||
            "https://user-images.githubusercontent.com/9113740/140682117-5e9f460e-c8f1-447c-88a0-e75f80779260.png"
          }
        />
        <meta
          name="og:title"
          content={title ? title + " – Thích Tài Liệu" : "Thích Tài Liệu"}
        />
        <meta
          name="og:image"
          content={
            meta.image ||
            "https://user-images.githubusercontent.com/9113740/140682117-5e9f460e-c8f1-447c-88a0-e75f80779260.png"
          }
        />
        <meta name="apple-mobile-web-app-title" content="Thích Tài Liệu" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          media="print"
          onLoad="this.media='all'"
        />
      </>
    );
  },
  footerEditLink: "Báo lỗi, góp ý",
  footerText: () => (
    <a
      href="https://thichtienganh.com/"
      target="_blank"
      rel="noopener"
      className="inline-flex items-center no-underline text-current font-semibold"
    >
      <span className="mr-1">Powered by</span>
      <span>Thích Tiếng Anh</span>
    </a>
  ),
};
