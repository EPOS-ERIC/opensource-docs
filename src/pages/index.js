import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container text--center">
         {/* Epos logo at the top */}
        <img
          src="img/epos-logo.svg"
          alt="EPOS Logo"
          className={styles.heroLogo}
        />
        {/* Description under the logo */}
        <p className={styles.heroDescription}>
        The <strong>EPOS Platform</strong> is an open-source, service-based data integration 
        and visualization system built on a microservices architecture. This website provides 
        general information about <strong>EPOS</strong>, technical documentation on the platform's architecture, 
        and source code for each microservice.
        </p>


        {/* Buttons below the title */}
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://www.epos-eu.org/dataportal"
          >
            Data Portal
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/home"
          >
            Documentation
          </Link>
        </div>

        {/* Screenshot below buttons */}
        <div className={styles.screenshotWrapper}>
          <img
            src="img/dataportal_screenshot.png" 
            alt="EPOS Data Portal"
            className={styles.screenshot}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="EPOS Open Source - Documentation and Data Portal"
    >
      <HomepageHeader />
    </Layout>
  );
}

