import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            最新の投稿を読む →
          </Link>
        </div>
      </div>
    </header>
  );
}

function PurposeSection() {
  return (
    <section className={styles.purposeSection}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.sectionTitle}>
          思考の整理と技術的アウトプットの場
        </Heading>
        <p className={styles.sectionDescription}>
          このブログは、私の思考を整理し、技術的な知見を効果的に共有するための場所です。
          学びの記録と知識の体系化を通じて、より明確な思考と表現を目指しています。
          また、AIツールも活用しながら、より効率的な知識の整理と深い洞察の獲得に取り組んでいます。
        </p>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="シンプルで洗練されたブログ・ナレッジベース">
      <HomepageHeader />
      <main>
        <PurposeSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
