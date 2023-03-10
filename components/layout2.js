import React from 'react'
import Head from 'next/head'
import Image from "next/legacy/image"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "@material-ui/core/Icon";

import Header from "./header.js"
import Footer from "./footer.js"
import SideNav from "./sideNav.js"

const name = 'Kosta Dubovskiy'
export const siteTitle = 'Kosta Dubovskiy'

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/Logo.png" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content= {`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <div class="landing">
                <h1 style={{textAlign: 'center', color: 'black', fontSize: 40}}>Kosta Dubovskiy</h1>
                <Image
                  src="/images/travel_collage.nosync.jpg"
                  width='500%'
                  height='500%'
                  alt={'Travel Photos'}
                />
              </div>
              <div class='menu'>
                <div class='pfpicon'>
                  <a>
                    <Image
                      priority
                      src="/images/profile.nosync.jpg"
                      className={utilStyles.borderCircle}
                      width={75}
                      height={75}
                      alt={name}
                      style="max-width:160;max-height:160;"
                    />
                  </a>
                </div>
                <SideNav />
              </div>
            </>
          ) : (
            <div class='menu'>
              <div class='pfpicon'>
                <Link href="/">
                    <Image
                      priority
                      src="/images/profile.nosync.jpg"
                      className={utilStyles.borderCircle}
                      width={75}
                      height={75}
                      alt={name}
                      style="max-width:75;max-height:75;"
                    />
                </Link>
              </div>
              <SideNav />
            </div>
          )}
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
