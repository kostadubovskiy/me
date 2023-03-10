import React from 'react';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const SideNav = (props) => {
  return (
  <div className="sidenav">
    <h2 className={utilStyles.menuText}>
      <Link href="/">
<<<<<<< HEAD
        Home
=======
        <a className={utilStyles.colorInherit}>Home</a>
>>>>>>> d0ed5d2bd4ff3ee369984c656ab840da420001dd
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/about">
<<<<<<< HEAD
        About Me
=======
        <a className={utilStyles.colorInherit}>About Me</a>
>>>>>>> d0ed5d2bd4ff3ee369984c656ab840da420001dd
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/work">
<<<<<<< HEAD
        Work
=======
        <a className={utilStyles.colorInherit}>Work</a>
>>>>>>> d0ed5d2bd4ff3ee369984c656ab840da420001dd
      </Link>
    </h2>
    <h2 className={utilStyles.menuText}>
      <Link href="/contact">
<<<<<<< HEAD
        Contact
=======
        <a className={utilStyles.colorInherit}>Contact</a>
>>>>>>> d0ed5d2bd4ff3ee369984c656ab840da420001dd
      </Link>
    </h2>
  </div>
   );
};
export default SideNav;
