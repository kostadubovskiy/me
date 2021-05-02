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
      <section className={utilStyles.headingMd}>
        <p>
          Hey! I&#8217;m Kosta. I&#8217;m a highschool
          sophomore from NYC, and I speak English and Russian as well as some Spanish.
          I was born in Geneva, Switzerland and I lived in Boston as well as
          California for 2 years each. Since then, I&#8217;ve been living in NYC.
          I love math, computer science, philosophy, travel, music,
          neuroscience, psychology, and more! I&#8217;m currently
          exploring web and app development, which might be how you ended up
          here! :D<br/> <br/>
          <a href="https://twitter.com/kostadubovskiy" target="_blank">Tweet at me!</a>
        </p>
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
