import styled from "styled-components";

import { sizes } from 'styles/media';

export const LogoWrapper = styled.div`
  width: 192px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (${sizes.desktop}) {
    width: 152px;
  }

  @media (${sizes.laptopM}) {
    width: 132px;
  }
`

export const StyledLogo = styled.h2`
  font-size: 32px;
  line-height: 39px;
  font-weight: 400;
  color: #0043F1;
  @media (${sizes.desktop}) {
    font-size: 28px;
  }
`