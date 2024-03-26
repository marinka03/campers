import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AppLayout from "./components/AppLayout";
import Favorites from "./pages/Favorites";
import { useEffect } from "react";
import { allItems } from "./redux/operations";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allItems());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
