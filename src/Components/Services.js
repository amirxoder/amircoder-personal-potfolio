import React from 'react'
import styled from 'styled-components'
import { servicesData } from '../Data/servicesData'
import Heading from './Heading'
import ServicesBox from './ServicesBox'


const Services = () => {
    return (
        <ServicesSection id='services'>
            <Heading title='Services' />
            <ServicesContainer>
                {servicesData.map(item => (
                    <ServicesBox
                        logo={item.logo}
                        title={item.serviceTitle}
                        desc={item.desc}
                    />
                ))}
            </ServicesContainer>
        </ServicesSection>
    )
}

const ServicesSection = styled.section`
    width:100%;
    min-height:80vh;
    background-color:${({ theme }) => theme.background};
    display:flex;
    align-items:center;
    /* justify-content:sp; */
    flex-direction:column;
    `
const ServicesContainer = styled.div`
    max-width:1600px;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:8rem;
    @media screen and (max-width: 768px){
        flex-direction:column;
    }
`

export default Services
