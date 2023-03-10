import React from 'react';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const SideNav = (props) => {
  return (
  <div className="sidenav">
    <h2 className={utilStyles.menuText}>
      <Link href="/">
        Home
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/about">
        About Me
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/work">
        Work
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/contact">
        Contact
      </Link>
    </h2>
  </div>
   );
};
export default SideNav;
