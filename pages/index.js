import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>  // A bit about me
        <p>
          Hey! I&#8217;m Kosta. I&#8217;m a highschool
          sophomore from NYC. I&#8217;m speak English, Russian and some Spanish but
          I was born in Geneva, Switzerland. I lived in Boston as well as
          Palo Alto, California for 2 years each, I&#8217;ve been living in NYC
          since 2010. I love math, computer science, philosophy, travel, music,
          neuroscience, psychology, and more! I&#8217;m currently
          exploring web and app development, which might be how you ended up
          here :D.<br/> <br/>
          <a href="https://twitter.com/kostadubovskiy" target="_blank">Tweet at me!</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
