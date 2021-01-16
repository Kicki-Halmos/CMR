import styled from 'styled-components'

const ButtonStyle = styled.button `
    background:#293b0d;
    color: white;
    font-family:inherit;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    &:hover{
            color: #b8123c;
        }
    
    a{color: white;
        text-decoration: none;
        &:hover{
            color: #b8123c;
            
        }
    }

`

export {ButtonStyle}
