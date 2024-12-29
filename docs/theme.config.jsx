import NextLink from 'next/link';
import { Link, LocaleSwitch, ThemeSwitch, useConfig } from "nextra-theme-docs";
import { useRouter } from "nextra/hooks";

export default {
  logo: function () {
    const { locale } = useRouter()

    return (
    <NextLink className="nextra-focus _flex _items-center hover:_opacity-75 ltr:_mr-auto rtl:_ml-auto" href={`/${locale}`}>
      <span>OpenCGM</span>
    </NextLink>
    )
  },
  logoLink: false,
  project: {
    link: "https://github.com/gaojinhong/calibration_algorithms_for_CGM",
  },
  docsRepositoryBase:
    "https://github.com/gaojinhong/calibration_algorithms_for_CGM/tree/main/docs",
  head: function () {
    const config = useConfig()
    const { route, locale } = useRouter()

    const description =
      config.frontMatter.description ||
      'Open-source CGM in Deep'
    const title = config.title + (route === `/${locale}` || route === '/' ? '' : ' - OpenCGM')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </>
    )
  },
  navbar: {
    extraContent: LocaleSwitch
  },
  search: {
    placeholder: function () {
      const { locale } = useRouter()
      return {
        en: "Search documentation...",
        zh: "搜索文档",
      }[locale]
    },
    error: function () {
      const { locale } = useRouter()
      return {
        en: "Error.",
        zh: "错误.",
      }[locale]
    },
  },
  toc: {
    title: function () {
      const { locale } = useRouter()
      return {
        en: "On This Page",
        zh: "本页内容",
      }[locale]
    },
    backToTop: function () {
      const { locale } = useRouter()
      return {
        en: "Scroll to top",
        zh: "返回顶部",
      }[locale]
    },
    float: true
  },
  feedback: {
    content: function () {
      const { locale } = useRouter();
      return {
        en: "Question? Give us feedback →",
        zh: "有问题？给我们反馈 →",
      }[locale];
    },
  },
  editLink: {
    content: function () {
      const { locale } = useRouter();
      return {
        en: "Edit this page on GitHub →",
        zh: "在GitHub编辑本页面 →",
      }[locale];
    },
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} {" "}
        <a
          href="https://github.com/gaojinhong/calibration_algorithms_for_CGM"
          target="_blank"
        >
          OpenCGM Project
        </a>
        .
      </span>
    ),
  },
  i18n: [
    { locale: "en", name: "English" },
    { locale: "zh", name: "中文" },
  ],
};
