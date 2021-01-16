import styled from 'styled-components'

const ContainerStyle = styled.div`
color: #293b0d;
width: 100vw;
min-height:100vh;
max-height: 100%;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size:1.2rem;
`





const LinkStyle = styled.div `
border-top: 1px solid #b8123c;
    a{
        color:#293b0d;
        font-size: 1.5rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        
        &:hover{
            color:#b8123c;
            text-decoration: none;

        }
    }
`

const NavStyle = styled.nav`
background-color: #293b0d;
`

const NavLinkStyle = styled(LinkStyle)`
border:transparent;
a{  color: white;
    font-size: 1.2rem;
}
`

const CardStyle = styled.div`
background-color: #293b0d;
color: white;
`

export {ContainerStyle, LinkStyle, CardStyle, NavLinkStyle, NavStyle}