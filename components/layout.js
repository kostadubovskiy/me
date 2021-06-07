import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "@material-ui/core/Icon";
import Grid from '@material-ui/core/Grid';

import styled, { css } from 'styled-components';

import Home from '../pages/index.js';

const name = 'Kosta Dubovskiy'
export const siteTitle = 'Kosta Dubovskiy'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  font-family: Comfortaa;
`

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 1em;
`//background: #5f8582;

const HeaderName = styled.div`
  grid-row: 1;
  grid-column: 2;
  text-align: center;
  font-family: Brush Script MT;
  font-size: 1.3vw;
`

const HeaderNav = styled.div`
  grid-row: 2;
  grid-column: 2;
  display:flex;
  justify-content: space-evenly;
	font-size: 1.3vw;
`

export const BodyGrid = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 1em;
`//  background: #6d8ea8;

export const IntroductionGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-column: 2;
  grid-template-columns: 3fr 2fr;
  font-family: Arial;
`//background: #a3bfcf;

export const ContentGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-column: 2;
  padding: 1em;
`//background: #a4c4de;

export const WorkPreview1 = styled.div`
  display: grid;
  grid-column-template: 3fr 2fr;
  grid-row-template: 1fr;
  grid-gap: 1em;
  padding: 1em;
  line-height: 2;
  background: #f5fbfc;
  font-size: 1.5vw;
`//background: #ddd;

export const WorkPreview2 = styled.div`
  display: grid;
  grid-column-template: 2fr 3fr;
  grid-row-template: 1fr;
  grid-gap: 1em;
  padding: 1em;
  line-height: 2;
  background: #f5fbfc;
  font-size: 1.5vw;
`//background: #ddd;

export const ArticlePreview = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 1em;
  line-height: 2;
  background: #e4eaf0;
  border-radius: 8px;
  grid-column-template: 6fr 1fr;
  box-shadow: 0 4px 10px #ccd9db;
  transition: color 0.3s, transform 0.3s;
  &:hover {
    width: 100%;
    height: 100%;
    transform: translateY(-10px);
  }
`

const FooterGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-column: 1/6;
  grid-column-template: 2fr 1fr;
  grid-row-template: 3fr 1fr;
  background: #c3dce6;
  font-family: Comfortaa;
  font-size: 1.2vw;
`//background-image: linear-gradient(#f5fbfc, #5f808c);

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Logo.png" />
        <meta name="og:title" content={siteTitle} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa"/>
      </Head>

      <PageGrid>
        <HeaderGrid>
          <HeaderName>
            <h1 style={{}}>Kosta Dubovskiy</h1>
          </HeaderName>
          <HeaderNav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About Me</a>
            </Link>
            <Link href="/work">
              <a>Work</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </HeaderNav>
        </HeaderGrid>

        {children}

        <FooterGrid>
          <div style={{padding:'1em', gridRow: 1, gridColumn: 1}}>
            <p>Footer stuff</p>
          </div>
          <div style={{padding:'1em', gridRow: 1, gridColumn: 2/3}}>
            <p>Footer stuff 2</p>
          </div>
        </FooterGrid>
      </PageGrid>
    </>
  )
}
