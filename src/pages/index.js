import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Adjust the relative path if needed: 
// - if index.js is inside src/pages, then ../components/EposLogo is correct
// - if inside another folder, update accordingly

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container text--center">
         <div className={styles.screenshotWrapper}>
          <img
            src="img/dataportal_screenshot.png" 
            alt="EPOS Data Portal"
            className={styles.screenshot}
          />
        </div>
        {/* Description under the logo */}
        <p className={styles.heroDescription}>
The <strong>EPOS Platform</strong> is an open-source, service-based data integration and visualization system built on a microservices architecture. This website provides general information about <strong>EPOS</strong>, technical documentation on the platform's architecture, and source code for each microservice. <strong>EPOS Platform Open Source</strong> is released under the <a href='/opensource-docs/documentation/license'>GPLv3 license</a>. Go to the <a href='/opensource-docs/documentation/quickstart'>Quickstart</a> section to start right away.
        </p>

        {/* Buttons below the title */}
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg",styles.dataportalButton)}
            to="https://www.epos-eu.org/dataportal"
          >
            Data Portal
          </Link>
          <Link
            className={clsx('button button--lg', styles.documentationButton)}
            to="/documentation/home"
          >
            Documentation
          </Link>
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
