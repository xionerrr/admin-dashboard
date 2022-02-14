import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1920px;
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Sidebar = styled.aside`
    width: 210px;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`

export const Main = styled.main`
    /* width: calc(100vw - 210px); */
    flex: 1;
`


