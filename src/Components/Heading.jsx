import React from 'react'
import styled from 'styled-components'


const Heading = ({ title }) => {
    return (
        <>
            <Title>
                {title}
                <span>{title}</span>
            </Title>

        </>
    )
}

const Title = styled.h2`
    position:relative;
    font-size:3rem;
    z-index:2;
    padding-top:2rem;
    width:400px;
    margin-bottom:1rem;
    
    &::after{
        content:'';
        position:absolute;
        bottom:0;
        left:0;
        width:30%;
        height:4px;
        background-color:#5242fb;
        border-radius:5rem;
    }
    span{
        position:absolute;
        color:#5242fb;
        left:0;
        bottom:-20px;
        font-size:5rem;
        font-weight:700;
        letter-spacing:-1px;
        z-index:-1;
        opacity:.1;

    }
`

export default Heading
