import React from 'react'


//styled
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width:16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    position:fixed; 

`

export default Sidebar
