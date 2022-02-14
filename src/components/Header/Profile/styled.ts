import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { sizes } from 'styles/media';

interface StyledProps {
    isVisible: null | boolean 
}

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    margin-right: 32px;
    height: 100%;

    @media (${sizes.desktopL}) {
        margin-right: 0px;
        margin: 0 24px 0 16px;
    }

    @media (${sizes.laptopM}) {
        gap: 15px;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    .MuiSvgIcon-root {
        width: 40px;
        height: 40px;
    }

    @media (${sizes.desktopL}) {
        gap: 9px;
    }

    @media (${sizes.laptopM}) {
        .MuiSvgIcon-root {
            width: 32px;
            height: 32px;
        }
    }
`
export const ProfileAccountEmail = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    color: #1F4173;
    @media (${sizes.laptopM}) {
        font-size: 15px;
    }
`

export const ProfileInfoLogOutModal = styled.div<StyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0px;
    bottom: -40px;
    position: absolute;
    opacity: ${props => props.isVisible ? "1" : "0"};
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-top: 1px solid #555;
    transition: all .2s ease;
    background: #fff;
    &:hover {
        border-left: 1px solid #555;
        border-right: 1px solid #555;
        border-bottom: 1px solid #555;
        border-top: 1px solid #555;
    }
`

export const ProfileInfoModalButton = styled.button`
    width: 213px;
    background: transparent;
    border: none;
    padding: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    color: #1F4173;
    cursor: pointer;
    @media (${sizes.laptopM}) {
        width: 186px;
    }
`

export const ProfileMoreButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    .MuiSvgIcon-root {
        width: 1em;
        height: 1em;
    }
    @media (${sizes.laptopM}) {
        .MuiSvgIcon-root {
            width: 1.3rem;
            height: 1.3rem;
        }
    }
`

export const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)`
    cursor: pointer;
`

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`

`