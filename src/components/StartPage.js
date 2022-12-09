import React from 'react'
import styled from "styled-components"
import {useNavigate } from "react-router-dom"

import kodimon_1 from "../assets/kodimon 1.png";
import logo from "../assets/Kodi-logo.svg";
import Button from './Button/Button'

const StartPage = () => {

const navigate = useNavigate();

return (
  <StartPage_style>
    <img className="flex-item kodimon_logo" src={logo} alt="logo" />
    <img className="flex-item kodimon_text"src={kodimon_1} alt="logo-text"/>
    <Button className="flex-item start_button" 
            children={"New Game"} 
            onClick={()=>{
              navigate("/battle");
            }}/>
    </StartPage_style>
  )
}

export default StartPage

const StartPage_style = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  .flex-item{
    position:relative;
  }
  .kodimon_logo {
    position: relative;
    transform: rotate(-0.10turn);
    top: 10px;
  }
  .kodimon_text {
    width: 700px;
    position: relative;
    top: -130px;
  }
  Button {
    position: relative;
    top: -80px;
  }
`