import React, { useState } from 'react'
import styled from 'styled-components'
import { navData } from '../Data/navData'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Nav = () => {

    const [show, setShow] = useState(false)

    const showMenuHandler = () => {
        setShow(!show)
    }



    return (
        <Header id="#" className='nav'>
            <NavContainer show={show}>
                <div className='logo'>
                    <a href='#'><h1>Amir <span>Coder</span></h1></a>
                </div>
                <div>
                    <MenuIcon className='menuIcon' onClick={showMenuHandler} />
                </div>
                <div className='navList' onClick={showMenuHandler}>
                    <ul className='navItems' onClick={showMenuHandler}>
                        {navData.map((item, index) => (
                            <li key={index}><a onClick={showMenuHandler} href={item.link}>{item.title}</a></li>
                        ))}
                        <CloseIcon className='closeIcon' onClick={showMenuHandler} />
                    </ul>
                </div>
            </NavContainer>
        </Header>
    )
}

const Header = styled.header`
    width:100%;
    padding:1rem 0;
    position:fixed;
    top:0;
    z-index:99;
    @media all and (max-width:768px){
        padding:.5rem 0;
}
    .closeIcon,.menuIcon{
        display:none;
    }
`

const NavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:1600px;
    width:70%;
    margin:auto;
    position: sticky;
    top:0;
    .logo{
        span{
            color:#5542FB;
            font-weight:400;
            text-transform:uppercase;
            font-size:.8em;
        }
    }
    .navItems{
        display:flex;
        align-items:center;
        z-index:999;
        a{
            margin-left:1.3rem;
            padding-bottom:15px;
            position: relative;
            &:hover{
                color: #5542FB;
            }
            &::after{
                position: absolute;
                content:'';
                bottom:0;
                left:0;
                width:0%;
                height:2px;
                background-color: #5542FB;
                border-radius:5rem;
                transition:width .3s ease-in-out;
            }
            &:hover::after{
                width:100%;
            }
        }
    }
    
    
    @media (max-width : 768px){
        width:100%;
        padding:0 1rem;
        z-index:999;
        .navList{
            position: fixed;
            width:100%;
            height:100%;
            top:0;
            left:0;
            display:flex;
            justify-content:center;
            align-items:center;
            transition: all .4s;
            transform:translateX(${({ show }) => (show ? '0' : '+100%')});
            opacity: ${({ show }) => (show ? '1' : '0')};
        }
        .navItems{
            flex-direction:column;
            gap:3rem;
            a{
                font-size:2.4rem;
            }
        }

        .closeIcon{
        display:block;
        position:absolute;
        top:3%;
        right:10%;
        cursor: pointer;
        font-size:1.9rem;
        color:#5542FB;
        transition:transform .3s ease-in-out;
        &:hover{
            transform:scale(1.2);
        }
        
    }
        .menuIcon{
        display:block;
        cursor: pointer;
        font-size:2rem;
        &:hover{
            background-color:#5542FB;
            border-radius:3px;
        }
    }
}
    
    
`

export default Nav
