import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <nav>
        <ul>
          <li key={1}><NavLink to={'/'}>HomePage</NavLink></li>
          <li key={2}><NavLink to={'/catalog'}>CatalogPage</NavLink></li>
          <li key={3}><NavLink to={'/favorites'}>Favorites</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default HomePage;
