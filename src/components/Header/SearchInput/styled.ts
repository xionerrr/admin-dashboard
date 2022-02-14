import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

export const StyledSearchInputBlock = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const StyledSearchInput = styled.input`
    width: 392px;
    max-width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #E5E5E5;
    padding: 12px 45px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
`

export const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
    position: absolute;
    left: 17px;
`

export const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    right: 24px;
`