import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to {siteConfig.title} Documentation
        </Heading>
        <p className="hero__subtitle">
          Everything you need to master production planning and scheduling
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://demo.planufacture.tech"
            style={{marginLeft: '1rem'}}>
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  const quickLinks = [
    {
      title: '📋 Work Orders',
      description: 'Create, manage, and track production work orders',
      link: '/docs/work-orders',
    },
    {
      title: '📅 Schedule',
      description: 'Plan and optimize your production timeline',
      link: '/docs/schedule',
    },
    {
      title: '📦 Materials & Inventory',
      description: 'Manage inventory, allocations, and blending',
      link: '/docs/materials',
    },
    {
      title: '📊 Capacity & Demand',
      description: 'Track capacity utilization and forecast demand',
      link: '/docs/capacity-report',
    },
    {
      title: '� Batch Trace',
      description: 'Full lot traceability and recall management',
      link: '/docs/batch-trace',
    },
    {
      title: '⚙️ Resources & SKUs',
      description: 'Configure production lines, products, and BOMs',
      link: '/docs/resources',
    },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className={styles.quickLinksTitle}>
          Quick Links
        </Heading>
        <div className={styles.quickLinksGrid}>
          {quickLinks.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.quickLinkCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Comprehensive user guide for Planufacture production planning and scheduling platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
