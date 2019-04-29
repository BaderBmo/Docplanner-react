import React from 'react'
const cards=[
    {family:"card-1" ,
    src:"https://www.docplanner.com/img/flag.png" ,
    alt:"flag-icon" ,
    title:"Leader in 10 countries" ,
    text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},

    {family:"card-2" ,
    src:"https://www.docplanner.com/img/patients.png" ,
    alt:"head-icon" ,
    title:"30 million unique patients" ,
    text:"visit us every month"},

    {family:"card-3" ,
    src:"https://www.docplanner.com/img/visits.png" ,
    alt:"tick-icon" ,
    title:"1 million appointments" ,
    text:"booked last month"},

    {family:"card-4" ,
    src:"https://www.docplanner.com/img/doctors.png" ,
    alt:"people-icon" ,
    title:"2 million active doctors" ,
    text:"trust in our solutions"}]

const Section4 = () =>
<section className="big-green-section">
<div className="container">
    <div className="left-side">
        <h6>The world's<br/>biggest healthcare platform </h6>
        <p>We work from 6 offices all over the world, bringing Docplanner<br/>Group to life in almost 20 countries.</p>
    </div>

    <div className="right-side">
        {cards.map(el => <Card el={el}/>)}          
    </div>
</div>
</section>

const Card = (props) =>
<div className={props.el.family}>
    <img src={props.el.src} alt={props.el.alt}/>
    <h6>{props.el.title}</h6>
    <p>{props.el.text}</p>
</div>
export default Section4;