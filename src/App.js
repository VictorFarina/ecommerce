import "./App.css"
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.jsx"
import Header from "./components/header/header.component.jsx"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx"

function App() {
  return (

    <div>
    
      <Header/>

      <Switch>
        <Route path='/' component = {Homepage}/>
        <Route path='/shop' component= {ShopPage}/>
        <Route path='/signin' component= {SignInAndSignUpPage}/>
      </Switch>
    </div>

  )
}

export default App
