import { Link } from 'react-router-dom';
import styled from "styled-components";

import { sizes } from 'styles/media';

export const StyledNav = styled.div`
    display: flex;
    align-items: center;
    color: #1F4173;
    list-style: none;
    gap: 27px;
    height: 100%;
`

export const StyledLinks = styled.ul`
    display: flex;
    align-items: center;
    color: #1F4173;
    list-style: none;
    gap: 27px;
    @media (${sizes.desktop}) {
        gap: 18px;
    }
`

export const LinkWrapper = styled.li`
    /* display: flex;
    gap: 9px; */
    display: flex;
    align-items: center;
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;
    svg {
        color: #1F4173;
    }
    @media (${sizes.laptopL}) {
        svg {
            font-size: 1.2rem;
        }
    }
`

export const LinkText = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #1F4173;
    opacity: 0.5;
    @media (${sizes.desktopL}) {
        font-size: 13px;
    }
`