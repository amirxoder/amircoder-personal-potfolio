import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

function Partical() {
    return (
        <Particle>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 30,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "none",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }} />
        </Particle>
    )
}

const Particle = styled.div`
    z-index:-1;
`
export default Partical
