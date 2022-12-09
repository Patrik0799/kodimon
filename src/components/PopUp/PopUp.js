import React from 'react'
import BattleMenu from '../BattleMenu/BattleMenu'
import styled from 'styled-components'

const PopUp = ({pokemonHP, pokemon2HP, pokemonName, pokemon2Name}) => {
  
  return (pokemonHP == 0 || pokemon2HP == 0) ? (
    <PopUpComponent>
        {pokemonHP == 0 ? <h4>{pokemonName} lost!</h4> : <h4>{pokemon2Name} lost!</h4>}
        {pokemonHP == 0 ? <h1>{pokemon2Name} won!</h1> : <h1>{pokemonName} won!</h1>}
        <BattleMenu />
    </PopUpComponent>
  ) : "";
  
}

export default PopUp

const PopUpComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: Bellota;
        font-size: 70px;
        margin-bottom: 0px;
    }
    h4 {
      font-family: Bellota;
      font-size: 30px;
      margin-bottom: 0px;
    }

`