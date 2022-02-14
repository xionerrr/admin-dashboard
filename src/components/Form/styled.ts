import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 50px 30px;
    background-color: transparent;
    border: 2px solid #ECECEC;
    border-radius: 16px;
    gap: 20px;
    button {
        width: 50%;
        margin: 0 auto;
        border: none;
        font-size: 14px;
        padding: 10px 30px;
        cursor: pointer;
        background: #3183FF;
        border-radius: 24px;
        color: #fff;
    }
`