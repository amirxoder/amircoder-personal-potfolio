import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectBox = ({ title, desc, depLink, github }) => {
    return (
        <Project>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className='btns'>
                <Button href={depLink}>
                    <InsertLinkIcon />
                    <span>Website</span>
                </Button>
                <Button href={github}>
                    <GitHubIcon />
                    <span>Github</span>
                </Button>
            </div>
        </Project>
    )
}

const Project = styled.div`
    width:400px;
    height:300px;
    background-color:${({ theme }) => theme.background};
    padding:2rem;
    margin:1rem; 
    border-radius:1rem;
    box-shadow:0 10px 20px rgba(29, 24, 79,.07);
    transition: transform .2s ease-in-out;
    &:hover{
        transform:translateY(-10px) scale(1.01);
    }
    h4{
        font-size:1.7rem;
        text-transform:uppercase;
        margin-bottom:1rem;
        height:30px;
    }
    p{
        text-align:justify;
        margin-bottom:2rem;
        height:90px;
    }
    .btns{
        display:flex;
        width:100%;
        justify-content:space-between;
        span{
            color:#f5f5f5;
        }
    }

`

export default ProjectBox
