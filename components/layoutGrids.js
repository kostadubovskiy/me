import React from 'react';
import styled from 'styled-components';

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: "1em";
`

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: "1em";
`

const IntroductionGrid = styled.div`
  display: grid;
  grid-gap: "1em";
`
const ContentGrid = styled.div`
  display: grid;
  grid-gap: "1em";
`

const MarginL = styled.div`
  grid-column: 1;
    grid-row: 1/;
`

const MarginR = styled.div`
  grid-column: 6;
  grid-row: 1/;
`
