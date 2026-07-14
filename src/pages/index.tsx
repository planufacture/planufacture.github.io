import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Documentation
        </Heading>
        <p className="hero__subtitle">
          Find answers, learn features, and master your production planning.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

type ModuleGroup = {
  title: string;
  modules: {title: string; description: string; link: string}[];
};

const moduleGroups: ModuleGroup[] = [
  {
    title: 'Planning & Scheduling',
    modules: [
      {
        title: 'Schedule',
        description: 'Gantt timeline for viewing and adjusting work orders across production lines',
        link: '/docs/schedule',
      },
      {
        title: 'Work Orders',
        description: 'Create, manage, release, and track production orders',
        link: '/docs/work-orders',
      },
      {
        title: 'Demand Forecast',
        description: 'View, upload, and manage demand forecasts for planning',
        link: '/docs/demand-forecast',
      },
    ],
  },
  {
    title: 'Inventory & Materials',
    modules: [
      {
        title: 'Inventory',
        description: 'Current stock levels, days cover, and stock projections over time',
        link: '/docs/inventory',
      },
      {
        title: 'Materials',
        description: 'Material availability, shortage detection, and purchase order creation',
        link: '/docs/materials',
      },
      {
        title: 'Batch Trace',
        description: 'Lot-level traceability, event history, and recall management',
        link: '/docs/batch-trace',
      },
    ],
  },
  {
    title: 'Orders',
    modules: [
      {
        title: 'Sales Orders',
        description: 'Customer orders, delivery dates, and line item tracking',
        link: '/docs/sales-orders',
      },
      {
        title: 'Purchase Orders',
        description: 'Supplier orders, material deliveries, and order status',
        link: '/docs/purchase-orders',
      },
    ],
  },
  {
    title: 'Configuration',
    modules: [
      {
        title: 'SKUs',
        description: 'Product definitions, inventory parameters, and production networks',
        link: '/docs/skus',
      },
      {
        title: 'Bill of Materials',
        description: 'BOM definitions, material quantities, and primary/alternate components',
        link: '/docs/bill-of-materials',
      },
      {
        title: 'Processes',
        description: 'Production process definitions, batch parameters, and resource routing',
        link: '/docs/processes',
      },
      {
        title: 'Resources',
        description: 'Production lines, changeover times, and capacity settings',
        link: '/docs/resources',
      },
      {
        title: 'Availability',
        description: 'Operational time patterns and shift schedules for resources',
        link: '/docs/availability',
      },
    ],
  },
  {
    title: 'Reporting',
    modules: [
      {
        title: 'Capacity Report',
        description: 'Resource utilization, capacity analysis, and bottleneck identification',
        link: '/docs/capacity-report',
      },
    ],
  },
];

function ModuleDirectory() {
  return (
    <section className={styles.moduleDirectory}>
      <div className="container">
        {moduleGroups.map((group, groupIdx) => (
          <div key={groupIdx} className={styles.moduleGroup}>
            <Heading as="h2" className={styles.groupTitle}>
              {group.title}
            </Heading>
            <div className={styles.moduleGrid}>
              {group.modules.map((mod, modIdx) => (
                <Link key={modIdx} to={mod.link} className={styles.moduleCard}>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewUserBanner() {
  return (
    <section className={styles.newUserBanner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <div>
            <Heading as="h3" className={styles.bannerTitle}>
              New to Planufacture?
            </Heading>
            <p className={styles.bannerText}>
              Start with the overview to understand key concepts, navigation, and how the modules connect.
            </p>
          </div>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read the Overview
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Comprehensive user guide for Planufacture production planning and scheduling platform">
      <HomepageHeader />
      <main>
        <ModuleDirectory />
        <NewUserBanner />
      </main>
    </Layout>
  );
}
