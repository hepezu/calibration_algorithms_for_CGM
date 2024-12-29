import nextra from "nextra";

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/calibration_algorithms_for_CGM" : "";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  latex: {
    renderer: "katex",
    options: {
      macros: {
        "\\RR": "\\mathbb{R}",
      },
    },
  },
});

export default withNextra({
  output: "export",
  assetPrefix,
  basePath: assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
});
