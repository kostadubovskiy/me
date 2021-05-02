import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Contact({ allPostsData }) {
  return (
    <Layout contact>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>Email</h3>
        <ul>
         <li><a href="mailto:kostadubovskiy@gmail.com">kostadubovskiy@gmail.com</a></li>
        </ul>
        <h3>Phone</h3>
        <ul>
          <li><a href="sms:7188776801">718-877-6801</a></li>
        </ul>
        <h3>Zoom</h3>
        <ul>
          <li><a href="https://calendly.com/kostadubovskiy/15min">Schedule</a></li>
        </ul>
        <h3>Socials</h3>
        <ul>
          <li><a href="https://twitter.com/KostaDubovskiy">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/kostadubovskiy/">Linkedin</a></li>
          <li><a href="https://www.instagram.com/kostadubovskiy/">Instagram</a></li>
        </ul>
      </section>
    </Layout>
  )
}
