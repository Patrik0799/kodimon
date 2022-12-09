import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const HealthBar = ({initialHP, newHP}) => {

    const [percentage, setPercentage] = useState();
    const [newwidth, setWidth] = useState();
    const [color, setColor] = useState("");
    const [borderColor, setBorderColor] = useState("");

    useEffect(() =>{
        percentageHealth(initialHP, newHP);
    })

    //Function that calculates percentage left of given HP 
    const percentageHealth = (initialHP, newHP) =>{
        const initialhp = initialHP;
        const newhp = newHP;
        let percentageHP = Math.round(newhp/initialhp * 100);

        if(percentageHP >= 50){
            setColor("#62FF84");
            setBorderColor("#079325");
        }
        else if(percentageHP < 50 && percentageHP > 30){
            setColor("#FFCC00");
            setBorderColor("#FFA500")
        }
        else{
            setColor("#FF7575");
            setBorderColor("#FF0000");
        }

        setPercentage(percentageHP);
        setWidth(percentageHP/100 * 230);
    }

    return (
        <HealthBarComponent WID={newwidth} colorMain={color} colorBorder={borderColor}>
            <h3>{percentage} %</h3>
            <div className='progress'>
                <div className='progress-done'>    
                </div>
            </div>
        </HealthBarComponent>
  )
}

export default HealthBar

const HealthBarComponent = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;

h3{
    margin-bottom: 2px;
}
.progress {
    background-color: #fff;
    border: 3px solid ${(props) =>props.colorBorder};
    border-radius: 20px;
    height: 12px;
    width: 230px;
}
.progress-done {
    background-color: ${(props) => props.colorMain};
    border-radius: 20px;
    height: 100%;
    width: ${(props) => props.WID}px;
}
`