import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 2px 20px #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;

    &:hover {
        transform: scale(1.02);
    }
`

export const CardBody = styled.div``

export const ImagePost = styled.img`
    height: 16rem;
    width: 100%;
    object-fit: cover;
`

export const Info = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 5px;
    flex-direction: column;
    justify-content: flex-end;
`

export const Title = styled.h2`
    font-size: 18px;
    margin: 5px;
    padding-bottom: 15px;
`

export const DatePost = styled.h2`
    font-size: 11px;
    color: #aaa;
`