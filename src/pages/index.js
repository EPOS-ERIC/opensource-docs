import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// --- Data for Sections ---
const provenInProductionLinks = [
	{ label: 'EPOS ERIC', href: 'http://www.ics-c.epos-eu.org/', src: 'img/epos-logo.svg' },
	{ label: 'ENVRI-Hub NEXT', href: 'https://catalogue.staging.envri.eu/', src: 'img/envri-hub-next-logo.png' },
	{ label: 'IPSES', href: 'https://prod.ipses-softdth.it:9091/', src: 'img/ipses-logo.png' },
];

const featureList = [
	{
		title: 'A Modern Map-Based Interface',
		imageUrl: '/img/dataportal_example.png',
		description: 'Search, discover, and visualize geospatial data through an intuitive and modern web portal. This interface was originally developed for and is proven in the production environment of EPOS ERIC. Built for researchers and data scientists.',
		link: '/documentation/guides/user-guide',
		linkLabel: 'Read the User Guide',
	},
	{
		title: 'Powerful Data Management',
		imageUrl: '/img/backoffice.png',
		description: 'Manage all aspects of your data services, system configurations, and user access through a comprehensive back-office interface.',
		link: '/documentation/system-reference/services/backoffice',
		linkLabel: 'Explore Back-Office Docs',
		isReversed: true,
	},
	{
		title: 'Contribute & Extend',
		imageUrl: '/img/components.png',
		description: 'Built on modern microservices architecture using Docker and Kubernetes. Extend the platform with custom services, contribute improvements, report issues, or fork it for your own research infrastructure needs.',
		link: '/documentation/contributors',
		linkLabel: 'Learn how to contribute',
		isReversed: false,
	},
	{
		title: 'Free & Open Source',
		imageUrl: '/img/epos-github.png',
		description: 'The entire EPOS Platform is released under GPL v3, making it completely free to deploy, modify, and use for your research infrastructure. Every component and library is open source and community-owned.',
		link: '/documentation/license',
		linkLabel: 'View License Details',
		isReversed: true,
	}
];

// --- Reusable Components ---
const Feature = ({ imageUrl, title, description, link, linkLabel, isReversed }) => (
	<div className={clsx('row', styles.featureRow, isReversed && styles.featureRowReversed)}>
		<div className="col col--6">
			<div className="text--center">
				<img src={useBaseUrl(imageUrl)} alt={title} className={styles.featureImage} />
			</div>
		</div>
		<div className={clsx('col col--6', styles.featureTextContainer)}>
			<Heading as="h2">{title}</Heading>
			<p>{description}</p>
			<Link to={link}>{linkLabel} &rarr;</Link>
		</div>
	</div>
);

// --- Page Sections ---
function HeroSection() {
	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<img src={useBaseUrl('/img/epos-logo.svg')} alt="EPOS Logo" className={styles.heroLogo} />
				<Heading as="h1" className={styles.heroTitle}>EPOS Platform Open Source</Heading>
				<p className={styles.heroSubtitle}>The EPOS Platform is an open-source, service-based data integration and visualization system built on a microservices architecture.</p>
				<div className={styles.buttons}>
					<Link className="button button--primary button--lg" to="/documentation/quickstart">Quickstart</Link>
					<Link className="button button--secondary button--lg" to="/documentation/system-reference/architecture">System Reference</Link>
				</div>
			</div>
		</header>
	);
}

function AlternatingFeaturesSection() {
	return (
		<section className={styles.featuresSection}>
			<div className="container">
				{featureList.map((props, idx) => <Feature key={idx} {...props} />)}
			</div>
		</section>
	);
}

function ProductionDeploymentsSection() {
	return (
		<section className={styles.deploymentsSection}>
			<div className="container">
				<div className={styles.deploymentsHeader}>
					<Heading as="h2">In Production</Heading>
					<p>The EPOS Platform Open Source is actively powering research infrastructures across Europe</p>
				</div>
				<div className={styles.deploymentsLogos}>
					{provenInProductionLinks.map((link, idx) => (
						<a key={idx} href={link.href} className={styles.deploymentLogo} target="_blank" rel="noopener noreferrer">
							<img src={useBaseUrl(link.src)} alt={link.label} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

function AboutSection() {
	return (
		<section className={styles.aboutSection}>
			<div className="container">
				<Heading as="h2">About EPOS</Heading>
				<p className={styles.aboutDescription}>
					The EPOS Platform is backed by EPOS ERIC (European Plate Observing System), a long-term
					research infrastructure supported by the European Commission. This open-source release
					makes the same technology powering pan-European Earth science data accessible to research
					communities worldwide.
				</p>
				<div className={styles.buttons}>
					<Link href="https://www.epos-eu.org/about-epos">
						Learn About EPOS ERIC &rarr;
					</Link>
				</div>
			</div>
		</section>
	);
}

// --- Main Page Component ---
export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="An open-source, service-based data integration and visualization system.">
			<HeroSection />
			<main>
				<AlternatingFeaturesSection />
				<ProductionDeploymentsSection />
				<AboutSection />
			</main>
		</Layout>
	);
}
