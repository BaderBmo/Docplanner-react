import React from 'react'
const cards =[
      {CardFamily:"warsaw" ,
      PicFamily:"warsaw-pic" ,
      TextFamily:"warsaw-text" ,
      CityName:"Warsaw"},
     
      {CardFamily:"barcelona" ,
      PicFamily:"barcelona-pic" ,
      TextFamily:"barcelona-text" ,
      CityName:"Barcelona"},
      
      {CardFamily:"istanbul" ,
      PicFamily:"istanbul-pic" ,
      TextFamily:"istanbul-text" ,
      CityName:"Istanbul"},
      
      {CardFamily:"rome" ,
      PicFamily:"rome-pic" ,
      TextFamily:"rome-text" ,
      CityName:"Rome"},
      
      {CardFamily:"mexico-city" ,
      PicFamily:"mexico-pic" ,
      TextFamily:"mexico-text" ,
      CityName:"Mexico-City"},
      
      {CardFamily:"curitiba" ,
      PicFamily:"curitiba-pic" ,
      TextFamily:"curitiba-text" ,
      CityName:"Curitiba"}]


const Section6 = () =>
<section class="cities">
{cards.map(el => 
            <div>
                <Card el={el}/>
            </div>)}
</section>

const Card = (props) =>
<a href="#">
    <div className={props.el.CardFamily}>
        <div className={props.el.PicFamily}></div>
        <div className={props.el.TextFamily}><p>{props.el.CityName}</p><button className="city-button">SEE OPENINGS</button></div>
    </div>
</a>
export default Section6;