import { Component } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"
import validator from 'validator'
import {
    LoginContainer,
    LoginFormContainer,
    HeadingContainer,
    Heading,
    InputLabelContainer,
    Label,
    InputBox,
    CheckBoxLabelContainer,
    LoginButton,
    CheckBox,
    ErrorMsg,
    ParaElement,
    SignupElement
} from "./styledComponents";

class signIn extends Component {
    state = { email: '', password: '', showErrorMsg: false, errorMsg: '', showEmailErrorMsg: false }

    onChangeEmail = event => {
        console.log("EMAIL")
        this.setState({ email: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    onChangeShowPassword = () => {
        const PasswordEl = document.getElementById('password')
        if (PasswordEl.type === "password") {
            PasswordEl.type = 'text'
        }
        else {
            PasswordEl.type = 'password'
        }
    }

    submitForm = async event => {
        event.preventDefault()
        this.setState({showEmailErrorMsg:false,errorMsg:''})
        console.log("submit")
        const { email, password } = this.state
        if (validator.isEmail(email)) { 
            const userDetails = { email, password }
        const url = 'https://appointmentback.onrender.com/loginIn'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json"
              }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            console.log("data.jwt_token", data.jwt_token)
            this.onSubmitSucess(data.jwtToken)
        }
        else {
            this.onSubmitFailure(data.error_msg)
        }

          } else { 
            this.setState({showEmailErrorMsg:true,errorMsg:'enter a valid email'})
          } 
        
    }

    onSubmitSucess = jwtToken => {
        const {history} = this.props
        Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
        history.replace('/home')
      }
    onSubmitFailure = errorMsg => {
        this.setState({ showErrorMsg: true, errorMsg })
    }


    render() {
        const { email, password, showErrorMsg, errorMsg, showEmailErrorMsg } = this.state
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Redirect to='/home' />
        }
        return (
            <ThemeContext>
                {value => {
                    const { isDarkTheme } = value;
                    return (
                        <LoginContainer darkMode={isDarkTheme}>
                            <LoginFormContainer
                                darkMode={isDarkTheme}
                                onSubmit={this.submitForm}>
                                <HeadingContainer >
                                   <Heading>Login</Heading>
                                </HeadingContainer>
                                <InputLabelContainer>
                                    <Label darkMode={isDarkTheme} htmlFor="username">Email</Label>
                                    <InputBox
                                        id="email"
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={this.onChangeEmail} />
                                </InputLabelContainer>
                                {showEmailErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                                <InputLabelContainer>
                                    <Label darkMode={isDarkTheme} htmlFor="password">Password</Label>
                                    <InputBox
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={this.onChangePassword} />
                                </InputLabelContainer>
                                

                               
                                <LoginButton type="submit" onClick={this.submitForm}>Login</LoginButton>
                                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

                            <ParaElement>Don't have an account? 
                             <Link to="/signUp">
                            <SignupElement>Signup</SignupElement>
                            </Link>
                            </ParaElement>
                            </LoginFormContainer>
                        </LoginContainer>
                    )

                }}
            </ThemeContext>
        )
    }
}

export default signIn