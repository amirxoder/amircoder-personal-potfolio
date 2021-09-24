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
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    margin-left:16.3rem;
    height: 100vh;
    

`

export default MainContent
