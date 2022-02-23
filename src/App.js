import "./App.css"
import { Switch, Route } from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopData from "./pages/shop/shop.component.jsx"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={ShopData} />
      </Switch>
    </div>
  )
}

export default App
