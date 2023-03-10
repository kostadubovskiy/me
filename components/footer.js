import React from 'react';
import Link from "./link.js";
import { useRouter } from "next/router";
import { routes } from "../data/routes.js";
import Social from "./social.js";

import styled from 'styled-components';

const FooterStyler = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax("100", "auto");
  grid-gap: "1em";
  justify-items: stretch;
  /*also can use center, end, stretch(the default)*/
  align-items: stretch;
  /*same options*/

`
const Newsletter = styled.div`
  background: #ddd;
`
const Contact = styled.div`

`


class Footer extends React.Component {
  render() {
    return (
      <FooterStyler>
        <Newsletter>
          Newsletter Section
        </Newsletter>
        <Contact>
          Contact section
        </Contact>
      </FooterStyler>
    )
  }
}

export default Footer;
