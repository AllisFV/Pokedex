import "./HeaderStyles.css";

import React from 'react';

function Header() {
  return (
    <>
      <div className="container">
        <div id="logo"></div>
        <p id="pokedexHead">Pokédex</p>
        <div id="order">AZ</div>
      </div>

      <div>
        <input type="search" placeholder="Buscar" />
      </div>

    </>

  )
}

export default Header