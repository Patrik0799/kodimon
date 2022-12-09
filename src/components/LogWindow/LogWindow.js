import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

import LogMessage from '../LogMessage/LogMessage';

const LogWindow = ({fakeLogs}) => {

    if(fakeLogs.length > 10) {
      fakeLogs.splice(1,1);
    }

    return (
        <LogsWindowComponent>
            <h3 className='battle-text'>Logs</h3>
            <div className='logs default-border'>
               {fakeLogs?.map((log, index)=>{
                //Mapping through every log that is given by the addToFakeLogs() function in the ArrowCard component.
                    return(
                      <LogMessage
                          key={index} 
                          PokemonWhoAttack={log.PokemonWhoAttack}
                          PokemonWhoDefends={log.PokemonWhoDefends}
                          Action={log.Action}
                          Text={log.Text}
                      />
                    )
                })}
            </div>
        </LogsWindowComponent>
  )
}

const mapStateToProps = (state) => {
  return {
    logAdd: state.logAdd,
    fakeLogs: state.logs
  }
}
export default connect(mapStateToProps)(LogWindow)

const LogsWindowComponent = styled.div`
  height: 305px;
  width: 550px;
  margin-top: 10px;
  
  .logs {
    height: 240px;
    padding-top: 10px;
    padding-left: 10px;
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
  h4 {
    margin: 2px 2px;
  }
`