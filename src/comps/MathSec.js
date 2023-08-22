// import { useState } from 'react';
import './MathSec.css';
import Btn from './smallComps/Btn';

const MathSec = (props) => {
    let btnTitle = "lesgo";
    return (
        <section className='mBox' id='mbox' style={{backgroundColor: props.color}}>
            <h2 className='mBox-h2'>{props.topic}</h2>
            <div className='mBox-sub'>
                <strong className='mBox-str'>Includes</strong>
                <ul>
                    <li>{props.subTopic[0]}</li>
                    <li>{props.subTopic[1]}</li>
                    <li>{props.subTopic[2]}</li>
                    <li>{props.subTopic[3]}</li>
                </ul>
                <Btn title={btnTitle}/>
            </div>
        </section>
    )
}

export default MathSec;