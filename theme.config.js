import Logo from './components/Logo'

export default {
  titleSuffix: " – Thích Tài Liệu",
  search: false,
  unstable_stork: true,
  floatTOC: true,
  logo: () => (
    <>
      <span className="text-xs">
        <Logo />
      </span>

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
  footerEditLink: false,
  footerText: () => (
    <a
      href="https://thichtienganh.com/"
      target="_blank"
      rel="noopener"
      className="inline-flex items-center no-underline text-current font-semibold"
    >
      <span className="mr-1">Thành viên từ</span>
      <span>Thích Tiếng Anh</span>
    </a>
  ),
};
