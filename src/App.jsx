import HomePage from './components/HomePage/HomePage'
import ListaTareas from './components/ListaTareas/ListaTareas'
import MasterPage from './components/MasterPage/MasterPage'
import { Route, Switch } from 'wouter'

const App = () => {
  return (
    <MasterPage>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/ListaTareas" component={ListaTareas} />
      </Switch>
    </MasterPage>
  )
}

export default App
