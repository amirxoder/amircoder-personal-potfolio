import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'


//styled
import styled from 'styled-components'
function Navigation() {
    return (
        <NavigationStyled>
            <div className='avatar'>
                <img className='img' src={avatar} />
            </div>
            <ul className='nav-items' alt='avatar'>
                <li className='nav-item'>
                    <NavLink to='/home' activeClassName='active-class'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' activeClassName='active-class'>About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/resume' activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/portfolios' activeClassName='active-class'>Portfolios</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Blogs' activeClassName='active-class'>Blogs</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' activeClassName='active-class'>Contact</NavLink>
                </li>
            </ul>
            <footer className='footer'>
                <p>@2021 My Personal Website</p>
            </footer>
        </NavigationStyled>
    )
}



//Styles

const NavigationStyled = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    height:100%;
    width:100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width:100%;
        border-bottom :1px solid var(--border-color);
        text-align:center;
        padding:2rem 0;
        
        img{
            
            border-radius:50%;
            width:80%;
            border:8px solid var(--border-color)

        }
    }

    .nav-items{
        width:100%;
        text-align:center;
        .active-class{
            background-color:var(--primary-color);
            color: var(--font-dark-color);
            font-weight:900;
        }
        li{
            display: block;
            margin:1rem 0;
            a{
                display:block;
                position: relative;
                padding: .3em 0;
                z-index:99;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content:'';
                    position:absolute;
                    bottom:0;
                    left:0;
                    width:0px;
                    height:100%;
                    opacity:.1;
                    background-color: var(--primary-color);
                    transition: width .3s cubic-bezier(.34,.29,.07,.97);
                    z-index:-1;
                }
            
            }
            
            a:hover::before{
                width:100%;
                
            }
        }
    }
    footer{
        width:100%;
        text-align:center;
        border-top: 1px solid var(--border-color);
        p{
            padding:1rem 0;
            font-size:.8rem;
        }
    }

`

export default Navigation
