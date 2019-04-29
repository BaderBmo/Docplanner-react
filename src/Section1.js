import React from 'react';

const phrases=[
    {id:"p1", text:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},
    {id:"p2", text:"We also help doctors to better manage their practice and build their online reputation.With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}]

const Section1 = () => 
<section className="motto-and-presentation">
    <div className="motto">
        <img className="first-section-logo" src="https://www.docplanner.com/img/sygnet.png" alt="first-section-logo"/>
        <p>Making the healthcare experience more human</p>
    </div>
    <div className="presentation">
        {phrases.map(el => <Phrase description={el}/>)}
    </div>
</section>

const Phrase = (props) =>
<p id={props.description.id}>{props.description.text}</p>



export default Section1;