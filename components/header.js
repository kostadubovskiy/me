import React from 'react';
import Link from "./link.js";
import { useRouter } from "next/router";
import { routes } from "../data/routes.js";
import Social from "./social.js";


class Header extends React.Component {
  render() {
    return(
      <>
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
      </>
    )
  }
}

export default Header;
