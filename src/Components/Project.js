import React from 'react'
import styled from 'styled-components'
import { projectData } from '../Data/projectData';
import Heading from './Heading';
import ProjectBox from './ProjectBox';

const Project = () => {
    return (
        <ProjectSection id='projects'>
            <Heading title='Projects' />
            <ProjectContainer>
                {projectData.map(item => (

                    <ProjectBox
                        title={item.projectName}
                        desc={item.projectDes}
                        depLink={item.deployLonk}
                        github={item.githubLink}
                    />
                ))}
            </ProjectContainer>
            <Github>
                <a href='https://github.com/amirxoder'>Github Repository</a>
            </Github>
        </ProjectSection>
    )
}

const ProjectSection = styled.section`
    width:100%;
    min-height:100vh;
    background-color:${({ theme }) => theme.backgrounder};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    
`;


const ProjectContainer = styled.div`
    max-width:1600px;
    width:70%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    @media screen and (max-width: 768px){
        width:100%;
        justify-content:center;
    }

`;

const Github = styled.h2`
    a{
        color:#5542FB;
        border:1px solid #5542FB;
        padding:.8rem 1.3rem;
        border-radius:1rem;
    }
`

export default Project
