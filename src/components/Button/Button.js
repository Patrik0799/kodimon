import React from 'react';
import styled from "styled-components";

const Button = ({children, onClick, disabled}) => {
  return (
    <ButtonComponent onClick={onClick} disabled={disabled}>
        {children}
    </ButtonComponent>
  )
}

export default Button

const ButtonComponent = styled.button`
  color: #fff;
  background-color: #0073BC;
  border-radius: 35px;
  border: 4px solid #73B9E5;
  font-family: Bellota;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  opacity: ${props=>props.disabled ? "30%" : "100%"};
`