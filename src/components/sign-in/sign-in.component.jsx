import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: "", password: "" })
  }

  handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>              
          <FormInput 
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SignIn
