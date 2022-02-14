import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
`

export const RegisterRedirect = styled.div`
    display: flex;
    gap: 10px;
`

export const RegisterRedirectText = styled.span`
`

export const RegisterRedirectLink = styled(Link)`
    color: #000;
`