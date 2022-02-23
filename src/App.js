import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component.jsx'
function App() {

  const testComponent = () =>(
    <div>TEST</div>
  )

  return (

    <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/hats' component={testComponent}/>
        </Switch>
    </div>

  )

}

export default App;
