import { Route, Routes } from 'react-router-dom';
import './App.css';
import Meals from './Components//Meals/Meals';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import MealDetails from './Components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/meals' element={<Meals></Meals>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/meals/:mealId' element={<MealDetails></MealDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
