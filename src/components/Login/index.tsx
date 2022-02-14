import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "components/Form"
import { StyledInput, StyledInputBlock, StyledInputs, StyledLabel, StyledSubmitInput } from './styled'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from "hooks/useAppDispatch";
import { setUser } from "store/reducers/user/actions";
import { ROUTES } from "routes/routes";

export const LoginComponent = () => {
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
  
    const handleLogin = (e: FormEvent, email:string, password:string) => {
        e.preventDefault();
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}:any) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(ROUTES.HOME)
            })
            .catch(() => {
                console.error("error login")
            })
    }

    return (
        <Form onSubmit={(e) => handleLogin(e, email, pass)}>
            <StyledInputs>
                <StyledInputBlock>
                    <StyledLabel>E-mail</StyledLabel>
                    <StyledInput 
                        type="email"
                        value={email}
                        onChange={emailChanger}
                        placeholder="[a-z0-9]"
                        autoComplete="off"
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
                    />
                </StyledInputBlock>
            </StyledInputs>
            <StyledSubmitInput 
                onClick={(e) => handleLogin(e, email, pass)}
                type="submit"
                value="Login"
            />
        </Form>
    )
  }                                                                                         