import { LoginComponent } from 'components/Login'
import { LoginRedirect, LoginRedirectLink, StyledLogin } from './styled'

export const Login = () => {
    return (
        <StyledLogin>
            <LoginComponent />
            <LoginRedirect>
                <LoginRedirectLink to="/register">Sign Up</LoginRedirectLink>
            </LoginRedirect>
        </StyledLogin>
    )
}