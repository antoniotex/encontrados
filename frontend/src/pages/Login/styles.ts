import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
    border-radius: 10px;
    margin-top: 100px;
    padding: 30px 0;
`
export const Title = styled.span`
    font-size: 30px;
    margin-bottom: 10px;
`
export const Description = styled.span`
    font-size: 14px;
    margin-bottom: 20px;
`
export const Input = styled.input`
    margin: 10px 0;
`
export const ForgotLink = styled.a`
    margin:10px 0;
`
export const LoginButton = styled.button`
    margin-top: 20px;
`