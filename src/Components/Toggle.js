import React from 'react'
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import styled from 'styled-components'


const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme}>
            {theme === 'dark' ? <Brightness2Icon className='toggle__btn' /> : <Brightness5Icon className='toggle__btn' />}
        </ToggleContainer>
    )
}

const ToggleContainer = styled.div`
    position: fixed;
    top: 50%;
    left:20px;
    transition:all .3s;
    cursor: pointer;
    z-index:100;
    &:active{
        transform:translateY(-10px)
    }
    .toggle__btn{
        font-size:2rem;
    }
`

export default Toggle
