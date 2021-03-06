import React from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { auth } from "../../firebase/firebase.utils"

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      {" "}
      <Logo />{" "}
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        Shop
      </Link>
      <Link to='/contact' className='option'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>Sign In</Link>
      )}
    </div>
  </div>
)

export default Header
