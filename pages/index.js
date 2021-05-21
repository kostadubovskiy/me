import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { IntroductionGrid, ContentGrid, BodyGrid, WorkPreview } from '../components/layout.js'
import Image from 'next/image'

const name = 'Kosta Dubovskiy'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BodyGrid>
        <IntroductionGrid>
          <div style={{gridColumn:1, padding:'5%'}}>
            <p>Hey! I&#8217;m Kosta. I&#8217;m a highschool
            sophomore from NYC, and I speak English and Russian as well as some Spanish.
            I was born in Geneva, Switzerland and I lived in Boston as well as
            California for 2 years each. Since then, I&#8217;ve been living in NYC
            I love math, computer science, philosophy, travel, music,
            neuroscience, psychology, and more! I&#8217;m currently
            exploring web and app development, which might be how you ended up
            here! :D<br/> <br/>
            <a href="https://twitter.com/kostadubovskiy" target="_blank">Tweet at me!</a></p>
          </div>

          <div style={{gridColumn:2, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding:'5%'}}>
            <div>
              <a>
                <Image
                  priority
                  src="/images/profile.nosync.jpg"
                  className={utilStyles.borderCircle}
                  width={200}
                  height={200}
                  alt={name}
                  style="max-width:160;max-height:160;"
                />
              </a>
            </div>
          </div>
        </IntroductionGrid>
        <ContentGrid>
          <WorkPreview>
            <div style={{gridColumn:1}}>
              <h2>Check out my recent article!</h2>
            </div>
            <a property="og:url" content='https://blog.usejournal.com/how-alan-turing-cracked-natures-code-f6c18e2dc17a' target='_blank'>How Alan Turing Cracked Nature&#8217;s Code</a>
          </WorkPreview>
        </ContentGrid>
      </BodyGrid>
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
