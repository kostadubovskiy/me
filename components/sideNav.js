import React from 'react';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const SideNav = (props) => {
  return (
  <div className="sidenav">
    <h2 className={utilStyles.menuText}>
      <Link href="/">
        <a className={utilStyles.colorInherit}>Home</a>
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/about">
        <a className={utilStyles.colorInherit}>About Me</a>
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/work">
        <a className={utilStyles.colorInherit}>Work</a>
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/contact">
        <a className={utilStyles.colorInherit}>Contact</a>
      </Link>
    </h2>
  </div>
   );
};
export default SideNav;
