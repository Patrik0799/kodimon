import React from 'react'
import styled from "styled-components";
import Button from '../Button/Button';
import {useNavigate } from "react-router-dom"
import { connect } from 'react-redux';
import { fetchPokemon1, fetchPokemon2, initialSetLeftPokemonHP, initialSetRightPokemonHP, logTo1,setFakeLogs } from '../../actions';

const BattleMenu = ({
  fetchPokemon1,
  fetchPokemon2, 
  initialSetLeftPokemonHP, 
  startPokemonHP, 
  initialSetRightPokemonHP, 
  startPokemon2HP, 
  pokemonHP,
  pokemon2HP,
  setFakeLogs
  }) => {

  const navigate = useNavigate();
  
  //Logic when New Game or New Opponent button is clicked, Menu button is just navigating back to "/".
  const newGame = () =>{
    fetchPokemon1(Math.floor(Math.random() * (600 - 1) + 1));
    fetchPokemon2(Math.floor(Math.random() * (600 - 1) + 1));
    initialSetLeftPokemonHP(startPokemonHP);
    initialSetRightPokemonHP(startPokemon2HP);
    setFakeLogs([]);
  }

  const newOpponent = () => {
    let randomNum = Math.floor(Math.random() * (2 - 1) + 1);

    if(pokemonHP < pokemon2HP){
      fetchPokemon1(Math.floor(Math.random() * (600 - 1) + 1));
      initialSetLeftPokemonHP(startPokemonHP);
      initialSetRightPokemonHP(startPokemon2HP);
    }
    else if(pokemon2HP < pokemonHP){
      fetchPokemon2(Math.floor(Math.random() * (600 - 1) + 1));
      initialSetRightPokemonHP(startPokemon2HP);
      initialSetLeftPokemonHP(startPokemonHP);
    }
    else{
      if(randomNum == 1){
        fetchPokemon1(Math.floor(Math.random() * (600 - 1) + 1));
        initialSetLeftPokemonHP(startPokemonHP);
        initialSetRightPokemonHP(startPokemon2HP);
      }
      else{
        fetchPokemon2(Math.floor(Math.random() * (600 - 1) + 1));
        initialSetRightPokemonHP(startPokemon2HP);
        initialSetLeftPokemonHP(startPokemonHP);
      }
    }
  }

  return (
    <BattleMenuComponent>
        <h3 className='battle-text' >Menu</h3>
        <div className='battle-menu-buttons default-border'>
            <Button onClick={()=>{navigate("/")}}className="item-button" children={"Home"}/>
            <Button onClick={newGame} className="item-button" children={"New Game"}/>
            <Button onClick={newOpponent} className="item-button" children={"New opponent"}/>
        </div>
    </BattleMenuComponent>
  )
}

  const mapStateToProps = (state) => {
    return {
      startPokemonHP: state.startPokemonHP,
      startPokemon2HP: state.startPokemon2HP,
      pokemonHP: state.pokemonHP,
      pokemon2HP: state.pokemon2HP
    }
  }

export default connect(mapStateToProps, {fetchPokemon1, fetchPokemon2, initialSetLeftPokemonHP, initialSetRightPokemonHP, logTo1, setFakeLogs})(BattleMenu)

const BattleMenuComponent = styled.div`
  width: 230px;
  height: 265px;
  margin-top:40px;

  .battle-menu-buttons {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .battle-menu-buttons {
    text-align:center;
  }
  .battle-text {
    font-family: Bellota;
    font-size: 17px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  .default-border {
    border: 4px solid #FFCC00;
    border-radius: 18px;
    background-color: #FFF7D6;
  }
`