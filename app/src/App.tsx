import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainPage as Home } from 'page/home/mainPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}
