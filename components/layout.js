import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "@material-ui/core/Icon";

const name = 'Kosta Dubovskiy'
export const siteTitle = 'Kosta Dubovskiy'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content= {`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? ( // displays pfp, if on homepage it's a bit bigger though
          <>
            <Image
              priority
              src="/images/profile.nosync.jpg"
              className={utilStyles.borderCircle}
              height={160}
              width={160}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <div class='menu'>
            <div class='pfpicon'>
              <Link href="/">
                <a>
                    <Image
                      priority
                      src="/images/profile.nosync.jpg"
                      className={utilStyles.borderCircle}
                      width={75}
                      height={75}
                      alt={name}
                      style="max-width:75;max-height:75;"
                    />
                </a>
              </Link>
              <h2 className={utilStyles.headingMd}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>Home</a>
                </Link>
              </h2>
              <h2 className={utilStyles.headingMd}>
                <Link href="../pages/about">
                  <a className={utilStyles.colorInherit}>About Me</a>
                </Link>
              </h2>
              <h2 className={utilStyles.headingMd}>
                <Link href="../pages/work">
                  <a className={utilStyles.colorInherit}>Past Work</a>
                </Link>
              </h2>
              <h2 className={utilStyles.headingMd}>
                <Link href="../pages/contact">
                  <a className={utilStyles.colorInherit}>Contact</a>
                </Link>
              </h2>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
