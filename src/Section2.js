import React from 'react'
const patientDoctor=[{family:"left-box",title:"For patients", text1:"Find a doctor, book a visit and ", 
text2:"solve any health-related doubt", isSelect:true},
{family:"right-box",  title:"For doctors", text1:"Save time managing visits and ",text2:"cut no-shows by half"}]

const Section2 = () =>
<section className="two-boxes">
    {patientDoctor.map(el =>
    <Box description={el}/>
    )}
</section>

const Box = (props) =>
<div className={props.description.family}>
    <h6>{props.description.title}</h6>
    <p>{props.description.text1}<br/>{props.description.text2}</p>
{props.description.isSelect &&
    <select id="select">
        <option value="CHOOSE COUNTRY">CHOOSE COUNTRY</option>
        <option value="ARGENTINA">ARGENTINA</option>
        <option value="AUSTRALIA">AUSTRALIA</option>
        <option value="BRAZIL">BRAZIL</option>
        <option value="CHILE">CHILE</option>
        <option value="COLOMBIA">COLOMBIA</option>
        <option value="CZECH">CZECH</option>
        <option value="FRANCE">FRANCE</option>
        <option value="ITALY">ITALY</option>
        <option value="MEXICO">MEXICO</option>
        <option value="PERU">PERU</option>
        <option value="POLAND">POLAND</option>
        <option value="PORTUGAL">PORTUGAL</option>
        <option value="SPAIN">SPAIN</option>
        <option value="TURKEY">TURKEY</option>
        <option value="UK">UK</option>
    </select>
    }
</div>


export default Section2;