import React from "react";
// retrun jsx of contact
import user from "../Image/myImg.png"
const ContactCard =(props)=>{
    const {id,name,email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <div className="header">{id}
                {name}
                </div>
                <div>{email}</div>
               
            </div>
            <div className="right floated content">
                    <i className="trash alternate outline icon"
                    style={{color : "red", marginTop : "10px" }}></i>
                </div>
        </div>
    )
};
export default ContactCard;