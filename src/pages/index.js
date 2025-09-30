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
	{ label: 'ENVRI-Hub NEXT', href: 'https://catalogue.staging.envri.eu/', src:'img/envri-hub-next-logo.png' },
	{ label: 'IPSES', href: 'https://prod.ipses-softdth.it:9091/', src:'img/ipses-logo.png' },
];

const featureList = [
	{
		title: 'A Modern Map-Based Interface',
		imageUrl: '/img/dataportal_screenshot.png',
		description: 'Search, discover, and visualize geospatial data through an intuitive and modern web portal. This interface was originally developed for and is proven in the production environment of EPOS ERIC. Built for researchers and data scientists.', link: '/documentation/guides/user-guide',
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
				<Heading as="h1" className={styles.heroTitle}>EPOS Platform</Heading>
				<p className={styles.heroSubtitle}>The EPOS Platform is an open-source, service-based data integration and visualization system built on a microservices architecture.</p>
				<div className={styles.buttons}>
					<Link className="button button--primary button--lg" to="/documentation/quickstart">Quickstart</Link>
					<Link className="button button--secondary button--lg" to="/documentation/system-reference/architecture">System Reference</Link>
				</div>
			</div>
		</header>
	);
}

function SeeItInActionSection() {
	return (
		<section className={styles.seeItInAction}>
			<div className="container">
				<Heading as="h2" className="text--center">Powered by EPOS OpenSource</Heading>				
				<div className={styles.actionLinks}>
					{provenInProductionLinks.map((link, idx) => <a href={link.href}><img src={ link.src } ></img> </a>)}
				</div>
			</div>
		</section>
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

function CommunitySection() {
	return (
		<section className={styles.communitySection}>
			<div className="container text--center">
				<Heading as="h2">Join the Community</Heading>
				<p>Our project is open-source and we welcome contributions from everyone.</p>
				<div className={styles.buttons}>
					<Link className="button button--primary button--lg" href="https://github.com/epos-eu">View on GitHub</Link>
					<Link className="button button--secondary button--lg" to="/documentation/contributors">Meet the Team</Link>
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
				<SeeItInActionSection />
				<AlternatingFeaturesSection />
				<CommunitySection />
			</main>
		</Layout>
	);
}
