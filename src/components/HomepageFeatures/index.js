import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Installation',
    link: '/documentation/installation',
    description: (
      <>
        Set up the EPOS Platform on your own infrastructure using Docker or from source.
      </>
    ),
  },
  {
    title: 'Platform Usage Guides',
    link: '/documentation/guides/platform-usage',
    description: (
      <>
        Learn the main Platform workflows for discovering, visualizing, and working with geospatial data.
      </>
    ),
  },
  {
    title: 'System Reference',
    link: '/documentation/system-reference/architecture',
    description: (
      <>
        A detailed look into the architecture, data models, and services that power the platform.
      </>
    ),
  },
];

function Feature({title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={clsx('card', 'padding--lg', styles.featureCard)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
