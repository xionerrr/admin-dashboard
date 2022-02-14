import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledLinks = styled.ul`
    display: flex;
    align-items: center;
    color: #1F4173;
    list-style: none;
    gap: 27px;
`;

export const LinkWrapper = styled.li`
    /* display: flex;
    gap: 9px; */
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;
    svg {
        color: #1F4173;
    }    
`

export const LinkText = styled.div`
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    font-weight: 600;
    color: #1F4173;
`;