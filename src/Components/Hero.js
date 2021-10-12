import React from 'react'
import Nav from './Nav';
import styled, { keyframes } from 'styled-components'
import bg from '../Img/bg.svg'
import { Button } from './Button';
import Particle from './Particle';



const Hero = () => {
    return (
        <Home id='#'>
            <Nav />
            <Particle />
            <Content className='content'>
                <ContentContainer>
                    <div className='leftContent'>
                        <p>Hello I'm</p>
                        <h2>AmirReza Azadbakht</h2>
                        <h5>FronEnd Developer</h5>
                        <Button>Hire Me!</Button>
                    </div>
                    <div className='rightContent'>
                        <img src={bg} alt='heroBackground' />
                    </div>
                    <ScrollContainer>
                        <Scroller></Scroller>
                    </ScrollContainer>
                </ContentContainer>
            </Content>

        </Home>
    )
}

const Home = styled.section`
    height:100vh;
    width: 100%;
    position: relative;
    overflow:hidden;
`

const Content = styled.div`
    width:100%;
    height: calc(100% );
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:-1;
    
`

const ContentContainer = styled.div`
    max-width:1600px;
    width:70%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:4rem;
    .leftContent{
        z-index:3 ;
        p{
            font-size:1.3rem;
        }
        h2{
            font-weight:900;    
            font-size:3.5rem;
            position: relative;
            z-index:2;
            &::before{
                content:'';
                position: absolute;
                bottom:5px;
                left:0;
                height:20px;
                width:100%;
                background-color:rgba(85, 66, 251,.3);
                z-index:-1;
            }
        }
        h5{
            font-size:2rem;
            text-transform:uppercase;
            letter-spacing:3px;
        }
    }
    .rightContent{
        img{
            position:absolute;
            right:-10%;
            bottom:-30px;
            width:1200px;
            z-index:2;
            
        }
    }
    @media screen and (max-width:768px){
        .leftContent{
            
            h2{
                font-size:2.5rem;
                line-height:1;
                width:400px;
                margin:1rem 0;
                &::before{
                content:'';
                position: absolute;
                bottom:5px;
                left:0;
                height:20px;
                width:100%;
                background-color:rgba(85, 66, 251,.3);
                z-index:-1;
            }
            }
            h5{
                font-size:1rem;
            }
        }
        .rightContent{
            img{
                width:500px;
                bottom:0;
            }
        }
    }
    
`
const scroll = keyframes`

    0%{
        transform:translate(-50%, -80%);
    }

    50%{
        transform:translate(-50% , -20%);
    }

    100%{
        transform:translate(-50% , -80%);
    }
`

const ScrollContainer = styled.div`
    position:absolute;
    bottom:4%;
    left:50%;
    width:50px;
    height:80px;
    border:2px solid ${({ theme }) => theme.text};
    border-radius:5rem;
    @media screen and (max-width: 768px){
        left:2%;
        height:50px;
        width:20px;
    }

`
const Scroller = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    height:24px;
    width:3px;
    background-color:#5542FB;
    animation: ${scroll} 1s ease-in-out infinite;
    border-radius:6rem;
    @media screen and (max-width: 768px){
        height:14px;
    }
    
`


export default Hero
