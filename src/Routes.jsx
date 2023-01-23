import GroceriesList from './pages/GroceriesList/GroceriesList'
import { Route, Switch } from 'wouter'
import HomePage from './pages/HomePage/HomePage'
import TaskList from './pages/TaskList/TaskList'
const Routes = () => {
  return (
    <Switch>
      <Route path="/Home" component={HomePage} />
      <Route path="/TaskList" component={TaskList} />
      <Route path="/Groceries" component={GroceriesList} />
    </Switch>
  )
}

export default Routes
