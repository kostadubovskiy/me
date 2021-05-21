import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { IntroductionGrid, ContentGrid, BodyGrid } from '../components/layout.js'

export default function About({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BodyGrid>
        <IntroductionGrid>
          <div>
            <p>
              Hey, this is the work page, thanks for stopping by!
              Feel free to check out any of my recent stuff below :))
            </p>
          </div>
        </IntroductionGrid>
        <ContentGrid>
          <section className={utilStyles.headingMd}>
            <p>
              About Me!
            </p>
          </section>
        </ContentGrid>
      </BodyGrid>
    </Layout>
  )
}
