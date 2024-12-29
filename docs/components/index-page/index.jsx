import cn from 'clsx';
import { Link } from 'nextra-theme-docs';
import { useRouter } from "nextra/hooks";
import styles from './index.module.css';

function Feature({
  large,
  centered,
  children,
  lightOnly,
  className,
  href,
  index,
  ...props
}) {
  return (
    <div
      className={cn(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >
      {children}
      {href && (
        <Link
          className={cn('nextra-focus', styles.link)}
          href={href}
        >
          <ArrowRightIcon height="24" />
        </Link>
      )}
    </div>
  )
}

function Features({ children }) {
  return <div className={styles.features}>{children}</div>
}

function ArrowRightIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1.2em"
  >
    <path
      fill-rule="evenodd"
      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>;
}

export function IndexPage() {
  const { locale } = useRouter()

  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Open-source CGM <br className="sm:block hidden" />
          with Love in Deep
        </h1>
        <p className="subtitle">
          Hardware, software all in one.
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href={`${locale}/docs/`}>
            {locale == 'zh' ? '现在开始' : 'Get started'} <span>→</span>
          </Link>
        </p>
      </div>
      <style jsx>{`
      .no-underline a {
        text-decoration-line: none;
        color: red!important;
      }
      .bbb
      {
        text-decoration-line: none!important;
        color: red!important;
      }
      .content-container {
        max-width: 90rem;
        padding-left: max(env(safe-area-inset-left), 1.5rem);
        padding-right: max(env(safe-area-inset-right), 1.5rem);
        margin: 0 auto;
      }
      .features-container {
        margin: 8rem 0 0;
        padding: 4rem 0;
        border-bottom: 1px solid #e5e7eb;
      }
      .features-container .content-container {
        margin-top: -8rem;
      }
      :global(.dark) .features-container {
        background-color: #000;
        border-bottom: 1px solid rgb(38, 38, 38);
      }
      .headline {
        display: inline-flex;
        font-size: 3.125rem;
        font-size: min(4.375rem, max(8vw, 2.5rem));
        font-weight: 700;
        font-feature-settings: initial;
        letter-spacing: -0.12rem;
        margin-left: -0.2rem;
        margin-top: 3.4rem;
        line-height: 1.1;
        background-image: linear-gradient(146deg, #000, #757a7d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      :global(.dark) .headline {
        background-image: linear-gradient(146deg, #fff, #757a7d);
      }
      :global(#intro-card) {
        min-height: 320px;
      }
      .subtitle {
        font-size: 1.3rem;
        font-size: min(1.3rem, max(3.5vw, 1.2rem));
        font-feature-settings: initial;
        line-height: 1.6;
      }
      @media screen and (max-width: 1200px) {
        .headline {
          letter-spacing: -0.08rem;
        }
      }
    `}</style>
      <div className="features-container">
        <div className="content-container">
          <Features>
            <Feature
              index={0}
              id="intro-card"
              href={`${locale}/docs/prerequisite/`}
            >
              <h3>
                {locale == 'zh' ? (<>血糖监测简介</>) : (<>Glucose
                    monitor introduction</>)}
              </h3>
              <p>
                {locale == 'zh' ? '无痛深入血糖监测' : 'Dive into blood glucose monitoring without pains'}
              </p>
            </Feature>
            <Feature index={1} large>
              <h3>{locale == 'zh' ? '还有' : 'And more'}...</h3>
              <p>
                {locale == 'zh' ? '硬件、软件和产品，所需尽有' : 'Hardware, software and product, all modules you need for CGM.'}
              </p>
              <p className="subtitle">
                <Link className={styles.no_underline} href={`${locale}/docs/`}>
                  {locale == 'zh' ? '开始了解' : 'Start using'} →
                </Link>
              </p>
            </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}