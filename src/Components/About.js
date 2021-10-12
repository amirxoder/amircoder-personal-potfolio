import React from 'react'
import styled from 'styled-components';
import about from '../Img/about.svg'
import { Button } from './Button';
import Heading from './Heading';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';



const About = () => {
    return (
        <AboutSection id='aboutme'>

            <Heading title='About Me' />
            <AboutContainer>
                <div className='rightAbout'>
                    <img src={about} alt='aboutme photo' />
                </div>
                <div className='leftAbout'>
                    <p>My name is Amir, I am 23 years old, I live in Lorestan Prov in Iran. Iam currently studing at Islamic Azad University.I've also been studing a lot on my own to learn new technologes and skills.</p>
                    <p>I started as a Front-end developer in 2020. Since thene I have been atleast 6hrs a day to studis.I see that I am on the right path beacuse I see the result that the dedicates bring.</p>
                    <div className='btns'>
                        <Button href="">
                            <span>Linkedin</span>
                            <LinkedInIcon />
                        </Button>
                        <Button>
                            <span>Resume</span>
                            <ArrowCircleDownIcon />
                        </Button>
                    </div>
                </div>
            </AboutContainer>
        </AboutSection>
    )
}

const AboutSection = styled.section`
    height:80vh;
    width:100%;
    background-color:${({ theme }) => theme.background};
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const AboutContainer = styled.div`
    max-width:1600px;
    width:70%;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:3rem;
    p{
        margin-bottom:1rem;
        text-align:justify;
        line-height:1.6;
        width:500px;
    }
    .btns{
        display:flex;
        gap:1rem;
        margin-top:2rem;
        span{
            color:#f5f5f5;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction:column-reverse;
        p{
            width:400px;
        }
        .rightAbout{
            img{
                width:200px;
            }
        }
    }


`

export default About
