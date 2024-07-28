import styled from 'styled-components'
export const NavBarDesktopContent=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-width: 98%;`

export const WebsiteLogo=styled.img`
width: 40%;
`
export const OptionItem = styled.div`
 
  font-size: 13px;
  color:white;
  
   
   display: flex;
  justify-content: space-between;
  width: 15%;
  height: 50px;
`
export const NavDesktopContainer=styled.nav`
 display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 15px;
  background-color: black;
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  width: 100%;
  @media screen and (max-width: 576px) {
    display: none;
  }`