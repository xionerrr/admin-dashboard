import { RegisterComponent } from 'components/Register'
import { RegisterRedirect, RegisterRedirectLink, RegisterRedirectText, StyledRegister } from './styled'

export const Register = () => {
    return (
        <StyledRegister>
            <RegisterComponent />
            <RegisterRedirect>
                <RegisterRedirectText>
                    Have an account?
                </RegisterRedirectText>
                <RegisterRedirectLink to="/login">
                    Login
                </RegisterRedirectLink>
            </RegisterRedirect>
        </StyledRegister>
    )
}
