import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import Button from "../Button/Button";

import { connect } from 'react-redux';
import { setToLeftPokemon, setToRightPokemon, initialSetLeftPokemonHP, newSetLeftPokemonHP, initialSetRightPokemonHP, newSetRightPokemonHP, logTo1, logTo2, initialLeftToRightDMG, initialRightToLeftDMG, setMissed, setFakeLogs } from '../../actions';

const ArrowCard = ({
  LeftPokemonSpeed, 
  RightPokemonSpeed,
  LeftPokemonName,
  RightPokemonName,
  fakeLogs,
  setFakeLogs,
  LeftPokemonAttack,
  RightPokemonAttack,
  LeftPokemonDefence,
  RightPokemonDefence,
  LeftPokemonHP,
  RightPokemonHP,
  setToLeftPokemon, 
  setToRightPokemon,
  initialSetLeftPokemonHP,
  newSetLeftPokemonHP,
  initialSetRightPokemonHP,
  newSetRightPokemonHP,
  direction,
  pokemonHP,
  pokemon2HP,
  logTo1,
  logTo2,
  initialLeftToRightDMG,
  initialRightToLeftDMG,
  miss,
  setMissed
  }) => {

  const [disable, setDisable] = useState(false);

  useEffect(() =>{

    if(LeftPokemonSpeed > RightPokemonSpeed){
      setToRightPokemon();
    }
    else{
      setToLeftPokemon();
    }

    logTo1(1);
    initialSetLeftPokemonHP(LeftPokemonHP);
    initialSetRightPokemonHP(RightPokemonHP);

    initialRightToLeftDMG(damageCalculator(RightPokemonAttack, LeftPokemonDefence));
    initialLeftToRightDMG(damageCalculator(LeftPokemonAttack, RightPokemonDefence));
    
  }, [])

  //For calculating Pokemon to Pokemon damage, including the chance to miss.
  //If the Pokemons defence is greater than 100, then the Pokemon attacking deals 0 damage.
  const damageCalculator = (attack, defence) =>{
    const ATT = attack/2;
    const DEF = defence;
    const toMissNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let damageDealt = (ATT - DEF/100 * ATT).toFixed(2);

    if(damageDealt < 0){
      damageDealt = 0;
    }
    
    if(toMissNumber === 1){
      setMissed(1);
      damageDealt = 0;
    } else {
      setMissed(0);
    }
  
    return damageDealt
    
  }

  const disableButton = () =>{
    setDisable(true);
    setTimeout(()=>{setDisable(false)}, 1000);
  }

  //Function that adds messages to logs depending on who attacks.
  const addToFakeLogs = (attackName, defenceName, damage) =>{

    const copyFakeLogs = fakeLogs;

    if(miss === 1 && damage === 0){
      copyFakeLogs.push({
        PokemonWhoAttack: attackName, 
        PokemonWhoDefends: defenceName,
        Action: "MISSED",
        Text: ""
      })
    }
    else if(damage > 0){
      copyFakeLogs.push({
        PokemonWhoAttack: attackName, 
        PokemonWhoDefends: defenceName,
        Action: "attacked",
        Text: `for ${damage} dmg.`
      })
    }
    else{
      copyFakeLogs.push({
        PokemonWhoAttack: attackName, 
        PokemonWhoDefends: defenceName,
        Action: "attacked",
        Text: `for ${damage} dmg.`
      })
    }
    
    setFakeLogs(copyFakeLogs);

  }

  //Depending on where the arrow is pointing, either RightAttacksLeft() is called or LeftAttacksRight(), on button click.
  //Arrow is pointing to the one being attacked
  const RightAttacksLeft = () => {
    disableButton();

    const damageDealtToLeft = damageCalculator(RightPokemonAttack, LeftPokemonDefence);

    addToFakeLogs(RightPokemonName, LeftPokemonName, damageDealtToLeft, pokemonHP);

    newSetLeftPokemonHP(damageDealtToLeft);
    setToRightPokemon();
    logTo1(2);
  }

  const LeftAttacksRight = () => {
    disableButton();
    
    const damageDealtToRight = damageCalculator(LeftPokemonAttack, RightPokemonDefence);
    
    addToFakeLogs(LeftPokemonName,RightPokemonName, damageDealtToRight, pokemon2HP);

    newSetRightPokemonHP(damageDealtToRight);
    setToLeftPokemon();
    logTo2(3);
  }

  return (
    <ArrowCardComponent>
        <img className={`${direction===0 ? "arrow-left" : "arrow-right"}`} src={Arrow} alt=""/>
        <Button children={"Attack"} onClick = {direction == 0 ? RightAttacksLeft : LeftAttacksRight} disabled={disable}/>
    </ArrowCardComponent>
  )
}

  const mapStateToProps = (state) =>{
    return{
      direction: state.direction,
      pokemonHP: state.pokemonHP,
      pokemon2HP: state.pokemon2HP,
      miss: state.miss,
      fakeLogs: state.logs
    }
  } 

  export default connect(mapStateToProps, {
    setToLeftPokemon, 
    setToRightPokemon, 
    initialSetLeftPokemonHP, 
    newSetLeftPokemonHP, 
    initialSetRightPokemonHP, 
    newSetRightPokemonHP, 
    logTo1, 
    logTo2, 
    initialLeftToRightDMG, 
    initialRightToLeftDMG,
    setMissed,
    setFakeLogs
  })(ArrowCard)

const ArrowCardComponent = styled.div `
    width: 200px;
    height: 120px;
    text-align:center;
    margin-top: 230px;

    .arrow-left{
      padding-bottom: 20px;
      padding-top:20px
    }
    .arrow-right{
      transform: rotate(180deg);
      padding-bottom: 20px;
      padding-top:20px
    }
    
`