import React from 'react';
import styled from "styled-components";
import HealthBar from '../HealthBar/HealthBar';

const PokemonCard = ({name, image, hp, attack, defence, speed, newHP, initialHP}) => {
    return (
        <PokemonCardComponent>
            <div className='pokemon'>
                <HealthBar initialHP = {initialHP} newHP = {newHP}/>
                <h1>{name}</h1>
                <img src={image} alt=''/>
            </div>
            <h3>Stats</h3>
            <div className='stats'>
                <h4 className='stat'>HP: {hp}</h4>
                <h4 className='stat'>Attack: {attack}</h4>
                <h4 className='stat'>Defense: {defence}</h4>
                <h4 className='stat_2'>Speed: {speed}</h4>
            </div>
        </PokemonCardComponent>
  )
}

export default PokemonCard

const PokemonCardComponent = styled.div `
    width: 250px;
    height: 405px;
    font-family: Bellota;
    
    h1 {
        font-size: 17px;
        text-align: center;
        margin-top:10px;
    }
    h3 {
        font-size: 17px;
        margin-bottom: 5px;
        padding-left: 10px;
    }
    img {
        height: 150px;
        width: 140px;
        text-align: center;
        margin-top: 5px;
    }
    .pokemon {
        text-align:center;
    }
    .stat {
        margin-top: 2px;
        margin-bottom:1px;
        padding-left: 10px;
    }
    .stat_2 {
        margin-top: 2px;
        margin-bottom:25px;
        padding-left: 10px;
    }
    .stats {
        font-size: 14px;
        border: 4px solid #FFCC00;
        border-radius: 18px;
        background-color: #FFF7D6;
        padding-top: 5px;
    }
`