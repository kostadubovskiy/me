import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { IntroductionGrid, ContentGrid, BodyGrid, WorkPreview1, WorkPreview2, ArticlePreview } from '../components/layout.js'
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
            <h1 style={{fontSize: "7vw"}}>Hey, I&#8217;m Kosta</h1>
          </div>

          <div style={{gridColumn:2, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding:'5%'}}>
            <div>
              <a>
                <Image
                  priority
                  src="/images/profile.nosync.jpg"
                  width={450}
                  height={450}
                  max-width="100%"
                  max-height="100%"
                  alt={name}
                />
              </a>
            </div>
          </div>
        </IntroductionGrid>

        <ContentGrid>
          <WorkPreview1>
            <div style={{gridColumn:1, gridRow:1}}>
              <Image
                priority
                src="/images/alaska-glacier.nosync.JPG"
                layout="intrinsic"
                width={2268}
                height={4032}
                max-width="100%"
                max-height="100%"
                alt={name}
              />
            </div>
            <div style={{gridColumn:2, gridRow:1}}>
              <p>Hey! I&#8217;m Kosta Dubovskiy. I&#8217;m a highschool
              sophomore from NYC, and I speak English and Russian as well as some Spanish.
              I was born in Geneva, Switzerland and I lived in Boston as well as
              California for 2 years each. Since then, I&#8217;ve been living in NYC
              I love math, computer science, philosophy, travel, music,
              neuroscience, psychology, and more! I&#8217;m currently
              exploring web and app development, which might be how you ended up
              here! :D</p>
            </div>
          </WorkPreview1>

          <div>
            <a href='https://t.co/Pu452fQIUc?amp=1' target='_blank'>
              <ArticlePreview>
                <div style={{textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', gridColumn:'1/6', gridRow:2}}>
                  <p style={{fontStyle:'normal', fontSize:"2vw", fontWeight:500}}><a href='https://t.co/Pu452fQIUc?amp=1' target='_blank'>Check out my recent <br/>article!</a></p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gridColumn:'7', gridRow:2}}>
                  <div style={{textAlign:'center', borderRadius: '8px'}}>
                      <figure>
                        <Image
                          priority
                          src="/images/turing-cover.jpeg"
                          layout="intrinsic"
                          width={175}
                          height={175}
                          max-width="100%"
                          max-height="100%"
                        />
                        <a href='https://t.co/Pu452fQIUc?amp=1' target='_blank'><i><figcaption style={{fontSize:"1vw"}}>How Alan Turing Cracked Nature&#8217;s Code</figcaption></i></a>
                      </figure>
                  </div>
                </div>
              </ArticlePreview>
            </a>
          </div>


          <WorkPreview2>
            <div style={{gridColumn:2, gridRow:1}}>
              <Image
                priority
                src="/images/petra-canyon.nosync.png"
                layout="intrinsic"
                width={2319}
                height={3532}
                max-width="100%"
                max-height="100%"
              />
            </div>
            <div style={{gridColumn:1, gridRow:1}}>
              <p>Hey! I&#8217;m Kosta Dubovskiy. I&#8217;m a highschool
              sophomore from NYC, and I speak English and Russian as well as some Spanish.
              I was born in Geneva, Switzerland and I lived in Boston as well as
              California for 2 years each. Since then, I&#8217;ve been living in NYC
              I love math, computer science, philosophy, travel, music,
              neuroscience, psychology, and more! I&#8217;m currently
              exploring web and app development, which might be how you ended up
              here! :D</p>
            </div>
          </WorkPreview2>

          <WorkPreview1>
            <div style={{gridColumn:1, gridRow:1}}>
              <Image
                priority
                src="/images/half-dome-river.nosync.JPG"
                layout="intrinsic"
                width={2319}
                height={3532}
                max-width="100%"
                max-height="100%"
              />
            </div>
            <div style={{gridColumn:2, gridRow:1}}>
              <p>Hey! I&#8217;m Kosta Dubovskiy. I&#8217;m a highschool
              sophomore from NYC, and I speak English and Russian as well as some Spanish.
              I was born in Geneva, Switzerland and I lived in Boston as well as
              California for 2 years each. Since then, I&#8217;ve been living in NYC
              I love math, computer science, philosophy, travel, music,
              neuroscience, psychology, and more! I&#8217;m currently
              exploring web and app development, which might be how you ended up
              here! :D</p>
            </div>
          </WorkPreview1>

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
