
import React from 'react'

import styled from 'styled-components'
import Partical from '../Components/Partical'



function Home() {
    return (
        <HomeStyled>
            <div className='p-particle-js' >
                <Partical />
            </div>
            <div className='typography'>
                <div className="text">
                    <h1>I am <span>Amir</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor consequatur adipisci aperiam officiis repellat illum tempore voluptatum, architecto veniam!</p>
                </div>
                <div className='icons'>
                    <a><i class='bx bxl-facebook icon' ></i></a>
                    <a href='https://www.linkedin.com/in/amir-coder-31747320b/'><i class='bx bxl-linkedin icon' ></i></a>
                    <a href='https://github.com/amirxoder'><i class='bx bxl-github icon' ></i></a>
                </div>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width:100%;
    
    min-height: 100vh;
    /* position: relative; */
    .p-particle-js{
        position: absolute;
        top:0;
        width:120%;
        
        
    }
    .typography{
        position:absolute;
        top:50%;
        left:50%;   
        transform: translate(-50%, -50%); 
        .text{
            width:600px;
            h1{
                margin-bottom:1rem
            }
        }  
        p{
            text-align:justify;
        }
        .icons{
            margin-top:1rem;
            width:100px;
            display:flex;
            justify-content:space-between;
            .icon{
                transition:transform .3s ease,color .3s ease;
            }
            .icon:hover{
                transform:scale(1.2);
                cursor: pointer;
                color:var(--primary-color)

            }
        }
    }
`


export default Home
