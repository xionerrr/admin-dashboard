import { Link } from 'react-router-dom';
import styled from "styled-components";
import { sizes } from 'styles/media';

interface ProgressProps {
    progress: number;
}

export const StyledTaskList = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    margin-left: 24px;  
    height: 100%;
    @media (${sizes.desktop}) {
        margin-left: 16px;
    }
`

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 23px;
    @media (${sizes.desktop}) {
        margin-right: 16px;
    }
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;
    svg {
        color: #000;
    }
    @media (${sizes.laptopL}) {
        svg {
            font-size: 1.2rem;
        }
    }
`

export const LinkText = styled.span`
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    font-weight: 600;
    color: #1F4173;
`

export const ProgressWrapper = styled.div`
    width: 197px;
    height: 6px;
    background: #E6EAF2;
    border-radius: 22px;
    position: relative;
    @media (${sizes.laptopM}) {
        display: none;
    }
`

export const Progress = styled.div<ProgressProps>`
    width: ${props => props.progress}%;
    height: 100%;
    border-radius: 22px;
    position: absolute;
    top: 0;
    left: 0;
    background: #003AD2;
`

export const TaskListText = styled.div`
    font-size: 13px;
    line-height: 16px;
    color: #1F4173;
    font-weight: 400;
    @media (${sizes.desktop}) {
        display: none;
    }
`
