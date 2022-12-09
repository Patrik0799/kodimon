import React, { useEffect } from 'react'
import styled from "styled-components";

import PokemonCard from "./PokemonCard/PokemonCard";
import ArrowCard from './ArrowCard/ArrowCard';
import LogWindow from './LogWindow/LogWindow';
import BattleMenu from './BattleMenu/BattleMenu';
import PopUp from './PopUp/PopUp';

import { connect } from "react-redux";
import { fetchPokemon1, fetchPokemon2, setFakeLogs} from '../actions';

const BattlePage = ({
  pokemon, 
  pokemon2, 
  fetchPokemon1, 
  fetchPokemon2,
  pokemonHP,
  pokemon2HP,
  startPokemonHP,
  startPokemon2HP,
  setFakeLogs
  }) =>{

//Fetching both pokemon
useEffect(()=> {
  fetchPokemon1(Math.floor(Math.random() * (600 - 1) + 1));
  fetchPokemon2(Math.floor(Math.random() * (600 - 1) + 1));
  setFakeLogs([]);
  }, [fetchPokemon1, fetchPokemon2])

if(!pokemon2.name || !pokemon.name){
  return null;
}

return (
  <BattlePageComponent>
    <div className='battle-pokemon'>
      <PokemonCard 
        initialHP = {startPokemonHP}
        newHP = {pokemonHP}
        name = {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
        image = {pokemon.sprites.other.dream_world.front_default}
        hp = {pokemon.stats[0].base_stat}
        attack = {pokemon.stats[1].base_stat}
        defence = {pokemon.stats[2].base_stat}
        speed = {pokemon.stats[5].base_stat}
      />
      <ArrowCard 
        LeftPokemonSpeed={pokemon.stats[5].base_stat} 
        RightPokemonSpeed={pokemon2.stats[5].base_stat}
        LeftPokemonAttack={pokemon.stats[1].base_stat}
        RightPokemonAttack={pokemon2.stats[1].base_stat}
        LeftPokemonDefence={pokemon.stats[2].base_stat}
        RightPokemonDefence={pokemon2.stats[2].base_stat}
        LeftPokemonHP={pokemon.stats[0].base_stat}
        RightPokemonHP={pokemon2.stats[0].base_stat}
        LeftPokemonName = {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
        RightPokemonName = {pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1).toLowerCase()}
      />
      <PokemonCard
        initialHP = {startPokemon2HP} 
        newHP = {pokemon2HP}
        name = {pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1).toLowerCase()}
        image = {pokemon2.sprites.other.dream_world.front_default}
        hp = {pokemon2.stats[0].base_stat}
        attack = {pokemon2.stats[1].base_stat}
        defence = {pokemon2.stats[2].base_stat}
        speed = {pokemon2.stats[5].base_stat}
      />
    </div>
    <div className='menu-logs'>
      {(pokemonHP === 0 || pokemon2HP === 0) ? <div></div> : <BattleMenu />}
      <div></div>
      <LogWindow 
        LeftPokemonName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()} 
        RightPokemonName={pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1).toLowerCase()}
      />
      {(pokemonHP === 0 || pokemon2HP === 0) ? <div></div> : ""}
      {(pokemonHP === 0 || pokemon2HP === 0) ? <div></div> : ""}
    </div>
    <PopUp 
        pokemonHP={pokemonHP}
        pokemon2HP={pokemon2HP} 
        pokemonName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
        pokemon2Name={pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1).toLowerCase()}
    />
  </BattlePageComponent>
  )
}

const mapStateToProps = (state) =>{
  return {
    pokemon: state.pokemon,
    pokemon2: state.pokemon2,
    pokemonHP: state.pokemonHP,
    pokemon2HP: state.pokemon2HP,
    startPokemonHP: state.startPokemonHP,
    startPokemon2HP: state.startPokemon2HP
  }
}

export default connect(mapStateToProps, {fetchPokemon1, fetchPokemon2, setFakeLogs})(BattlePage)

const BattlePageComponent = styled.div `
  .battle-pokemon {
    display: flex;
    justify-content: space-around;
  }
  .menu-logs {
    display: flex;
    justify-content: space-around;
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