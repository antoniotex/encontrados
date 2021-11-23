import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: 1024px){
        flex-direction: column;
    }
`

export const Content = styled.div`
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    width: 900px;
`

export const ContentTitle = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin: 0;
`

export const ContentUser = styled.p`
    font-size: 12px;
    color: #999;
`

export const Contentmage = styled.img`
    width: 100%;
    margin-bottom: 20px;
    height: 40rem;
    object-fit: contain;
`

export const ContentDescription = styled.p`
    font-size: 16px;
    color: #444;
`

export const Contact = styled.div``

export const Info = styled.div`
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    height: fit-content;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
`

export const InfoName = styled.div``

export const InfoAge = styled.div``

export const InfoCity = styled.div``

