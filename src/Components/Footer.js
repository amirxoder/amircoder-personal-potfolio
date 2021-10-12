import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';


const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <InstagramIcon className='socialLogo' />
                <TwitterIcon className='socialLogo' />
                <TelegramIcon className='socialLogo' />
            </FooterContainer>
        </FooterSection>
    )
}

const FooterSection = styled.section`
    width:100%;
    height:10vh;
    background-color:#5542FB;
    display:flex;
    align-items:center;
    justify-content:center;
`

const FooterContainer = styled.div`
    width:200px;
    display:flex;
    justify-content:space-evenly;
    .socialLogo{
        color:#f5f5f5;
        cursor: pointer;
        transition: transform .2s ease-in-out;
        &:hover{
            transform:scale(1.09)
        }
    }
`
export default Footer
