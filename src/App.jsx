// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import CatalogPage from './Pages/CatalogPage/CatalogPage';

const App = () =>  {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<CatalogPage/>}/>
      <Route path='/favorites' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
