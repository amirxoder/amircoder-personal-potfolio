import styled from 'styled-components'

export const Button = styled.a`
    padding:.5rem 1.3rem;
    margin: 1rem 0;
    border:none;
    cursor: pointer;
    font-size:1.2rem;
    border-radius:5px;
    background-color:#5542FB;
    color:#f5f5f5;
    background-color:#5542FB;
    box-shadow:0 10px 10px rgba(85, 66, 251,.1); 
    transition: all .2s ease-in-out;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap :10px;
    max-width:200px;
    &:hover{
        transform:translateY(-3px);
        background-color:#5542FB;
    }
    @media screen and (max-width: 768px){
        max-width:120px;
    }
`