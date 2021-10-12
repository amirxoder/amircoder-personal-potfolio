import React, { useState } from 'react'
import styled from 'styled-components'


const SkillsBox = ({ title, logo }) => {
    const [show, setShow] = useState(false)
    const changeShowHandler = () => {
        setShow(!show)

    }


    return (
        <Skill onMouseEnter={changeShowHandler} onMouseLeave={changeShowHandler}>
            <span className={show ? 'active' : ''}>{title}</span>
            <i className={logo}></i>
        </Skill>
    )
}

const Skill = styled.div`
    width:100px;
    height:100px;
    background-color:${({ theme }) => theme.background};
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    margin:2rem;
    border-radius:10px;
    border-bottom:5px solid transparent;
    transition:all .3s ease-in-out;
    box-shadow:0 10px 20px rgba(29, 24, 79,.04);
    cursor: pointer;
    &:hover{
        border-bottom: 5px solid #5542FB;
        box-shadow:0 10px 20px rgba(29, 24, 79,.1);
        transform:scale(1.01);
    }
    .active{
        opacity:1;  
        transform:translateY(0px);
        transition:all .3s;
    }
    i{
        color:#5542FB;
        font-size:3.5rem;
    }
    span{
        position: absolute;
        top:-28px;
        font-size:12px;
        background-color:${({ theme }) => theme.background};
        width:100px;
        text-align:center;
        border-radius:2rem;
        opacity:0;
        transform:translateY(-20px);
        transition:all .3s;
    }
    
`

export default SkillsBox
