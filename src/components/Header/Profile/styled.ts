import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface StyledProps {
    isVisible: null | boolean 
}

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    margin-right: 32px;
`
export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`
export const ProfileAccountEmail = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    color: #1F4173;
`
export const ProfileInfoLogOutModal = styled.div<StyledProps>`
    right: 0px;
    bottom: -30px;
    position: absolute;
    display: ${props => props.isVisible ? "flex" : "none"}
`
export const ProfileInfoModalButton = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    border-bottom: 2px solid #555;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    color: #1F4173;
`
export const ProfileMoreButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
`
export const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)`
`
export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
`