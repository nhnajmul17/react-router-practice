import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
// import Restaurent from './components/Restaurent/Restaurent';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';
import Restaurent from './components/Restaurent/Restaurent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/restaurent'>
            <Restaurent></Restaurent>
          </Route>
          <Route path='/meal/:mealId'>
            <Meal></Meal>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
