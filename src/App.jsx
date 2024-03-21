// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import AppLayout from "./Components/AppLayout";
import Favorites from "./Pages/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<Favorites/>} />
        <Route path="*" element={<HomePage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
