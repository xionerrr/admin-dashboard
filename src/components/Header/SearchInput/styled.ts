import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import { sizes } from 'styles/media';

export const StyledSearchInputBlock = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;

    @media (${sizes.laptopL}) {
        svg {
            font-size: 1.2rem; 
        }
    }

    @media (${sizes.laptop}) {
        svg:first-child {
            display: none;
        }
    }
`

export const StyledSearchInput = styled.input`
    width: 392px;
    max-width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #E6EAF0;
    padding: 12px 45px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;

    @media (${sizes.desktopL}) {
        width: 290px;
    }

    @media (${sizes.desktop}) {
        width: 264px;
    }

    @media (${sizes.laptopL}) {
        width: 164px;
    }

    @media (${sizes.laptop}) {
        width: 32px;
        padding: 12px 22px;
        cursor: pointer;
    }
`

export const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
    position: absolute;
    left: 17px;
`

export const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    right: 24px;
    @media (${sizes.laptop}) {
        left: 12px;
        cursor: pointer;
    }
`