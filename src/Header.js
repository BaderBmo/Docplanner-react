import React from 'react';
const titles=[
    {id:"about-us" ,link:"#", text:"About us"},
    {id:"career" ,link:"#", text:"Career"},
    {id:"departments", link:"#", text:"Departments",drop:["Marketing & PR", "Customer Success & Sales", "IT, Product, Design & UX",
     "Finance & Administration","HR & more" ]}]

const Header = () => {
return <div className="header">
    <div>
        <img className="header-logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="header-logo"/>
    </div>
    <div className="navbar">
        {titles.map(el =>
            <Menu el={el}/>
        )}
    </div>
</div>}

const Menu = (props) => <div>
<a id={props.el.id} href={props.el.link}>{props.el.text}{props.el.drop &&
    <div className="drop-down-menu">
        {props.el.drop.map(el =>
        <p  href="#">{el}</p>)}
    </div>}
</a>
</div>


export default Header;