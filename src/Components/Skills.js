import React from 'react'
import styled from 'styled-components'
import { skillsData } from '../Data/skillsData'
import Heading from './Heading'
import SkillsBox from './SkillsBox'


const Skills = () => {
    return (
        <SkillsSection id="skills">
            <Heading title='Skills' />
            <SkillsContainer>
                <div className='leftSkills'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in fermentum tellus. Integer lobortis faucibus libero, id ultricies ante vestibulum at. Nam sed metus sit amet neque condimentum accumsan. Pellentesque pellentesque faucibus ligula id fermentum. Etiam tempus</p>
                </div>
                <div className='rightSkills'>
                    {skillsData.map((item, index) => (
                        <SkillsBox
                            key={index}
                            title={item.title}
                            logo={item.logo}
                        />
                    ))}
                </div>
            </SkillsContainer>
        </SkillsSection>
    )
}

const SkillsSection = styled.section`
    width:100%;
    min-height:90vh;
    background-color:${({ theme }) => theme.backgrounder};
    display:flex;
    flex-direction:column;
    align-items:center;
    
    
`
const SkillsContainer = styled.div`
    max-width:1600px;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10rem;
    .rightSkills{
        flex:1;
        display:flex;
        flex-wrap:wrap;
    }
    .leftSkills{
        flex:1;
        p{
            width:550px;
            text-align:justify;
            line-height:1.4;
        }
    }
    @media screen and (max-width: 768px){
        flex-direction:column;
        margin-top:2rem;
        .leftSkills{
            p{
                width:400px;
                margin-bottom:2rem;
            }
        }
    }
`

export default Skills
