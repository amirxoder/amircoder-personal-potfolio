import React from 'react'
import styled from 'styled-components'


const ServicesBox = ({ logo, title, desc }) => {
    return (
        <Service>
            <i className={logo}></i>
            <h5>{title}</h5>
            <p>{desc}</p>
        </Service>
    )
}

const Service = styled.div`
    height:260px;
    background-color:${({ theme }) => theme.backgrounder};
    width:300px;
    padding:1rem;
    margin:2rem;
    border-radius:5px;
    box-shadow:0 10px 20px rgba(29, 24, 79,.04);
    transition: transform .2s ease-in-out;
    &:hover{
        transform:translateY(-10px) scale(1.01);
    }
    i{
        color:#5542FB;
        font-size:2.3rem;
        text-align:center;
        width:100%;
        margin-bottom:1rem;
    }
    h5{
        font-size:1.2rem;
        font-weight:400;
        height:40px;
        text-align:center;
    }
    p{
        font-weight:700;
        text-align:center;
        line-height:1.5;
    }


`

export default ServicesBox
