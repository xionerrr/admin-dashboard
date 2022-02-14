import { Form } from 'components/Form'
import { StyledInputBlock, StyledLabel } from 'components/Login/styled'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes/routes'
import { setUser } from 'store/reducers/user/actions'
import { StyledInput, StyledInputs, StyledSubmitInput } from './styled'

export const RegisterComponent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const emailChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }
  
    const handleRegister = (e:FormEvent, email:string, password:string) => {
        e.preventDefault()
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}:any) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(ROUTES.HOME)
            })
            .catch(() => {
                console.error("error reg")
            })
    }

    return (
        <Form onSubmit={(e) => handleRegister(e, email, pass)}>
                <StyledInputs>
                    <StyledInputBlock>
                        <StyledLabel>E-mail</StyledLabel>
                        <StyledInput 
                            type="email"
                            value={email}
                            onChange={emailChanger}
                            placeholder="[a-z0-9]"
                            autoComplete="off"
                            required
                        />
                    </StyledInputBlock>
                    <StyledInputBlock>
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput 
                            type="password"
                            value={pass}
                            onChange={passChanger}
                            placeholder="^.*[a-zA-Z]+.*$"
                            autoComplete="new-password"
                            required
                        />
                    </StyledInputBlock>
                </StyledInputs>
                <StyledSubmitInput 
                    onClick={(e) => handleRegister(e, email, pass)}
                    type="submit"
                    value="Sign Up"
                />
        </Form>
    )
}
