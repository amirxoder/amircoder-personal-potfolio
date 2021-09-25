import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Resume from '../Pages/Resume'


function MainContent() {
    return (
        <MainContentStyled>

            <Switch>
                <Route path='/resume' component={Resume} />
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
            </Switch>
            <div className='lines'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
            </div>

        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    overflow:hidden;
    margin-left:16.3rem;
    height: 100vh;
    position: relative;
    .lines{
        position: absolute;
        top:0;
        z-index:-1;
        width:100%;
        min-height:100vh;
        display:flex;
        justify-content: space-evenly;
        .line1 ,.line2, .line3, .line4{
            min-height:100vh;
            width:1px;
            background-color:var(--border-color);
        }
    }

`

export default MainContent
