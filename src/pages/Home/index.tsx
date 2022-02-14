import { Navigate } from 'react-router-dom'

import { StyledHome, Content, Sidebar, Main } from './styled'
import { Header } from 'components/Header'
import { ROUTES } from 'routes/routes'
import { useAuth } from 'hooks/useAuth'

export const Home = () => {

    const {isAuth, email} = useAuth()

    return isAuth
    ? 
    (
        <StyledHome>
            <Header email={email} />
            <Content>
                <Sidebar>
                    Sidebar
                </Sidebar>
                <Main>
                    Main
                </Main>
            </Content>
        </StyledHome>
    )
    :
    (
        <Navigate to={ROUTES.LOGIN}/>
    )
}
