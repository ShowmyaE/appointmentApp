import { Component } from "react";
import { Link } from 'react-router-dom'
import { NavBarDesktopContent, NavDesktopContainer, WebsiteLogo, OptionItem } from "./styledComponents";
import ThemeContext from "../../context/ThemeContext";

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const { isDarkTheme, toggleTheme } = value
          const onToggleTheme = () => {
            console.log("isDarkTheme", isDarkTheme)
            toggleTheme()
          }
          // const websiteLogo = isDarkTheme
          //     ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          //     : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          // const themeImageURL = isDarkTheme
          //     ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          //     : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          return (
            // <NavDesktopContainer darkMode={isDarkTheme}>
            //     <NavBarDesktopContent>
            //         <Link to="/home">
            //             <WebsiteLogo src="client\public\Logo.webp" alt="website logo" />
            //         </Link>
            //         <Link to="/aboutus" >
            //             <OptionItem>

            //                 About Us

            //             </OptionItem>
            //         </Link>
            //         <Link to="services" >
            //             <OptionItem>

            //                 Services

            //             </OptionItem>
            //         </Link>
            //         <Link to="/getonboard" >
            //             <OptionItem>

            //                 Get Onboard

            //             </OptionItem>
            //         </Link>
            //         <Link to="/insights" >
            //             <OptionItem>

            //                 insights

            //             </OptionItem>
            //         </Link>
            //         <Link to="/contactus" >
            //             <OptionItem>

            //                 Contact Us

            //             </OptionItem>
            //         </Link>





            //     </NavBarDesktopContent>
            // </NavDesktopContainer>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>

              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/getBook" >
                  Booking Details
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Insights</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contactUs" >
                  Contact Us
                </Link>
              </li>
            </ul>
          )
        }}

      </ThemeContext.Consumer>



    )
  }

}
export default Header