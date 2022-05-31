import React from 'react';

class AddContact extends React.Component{
    render(){
        return (
            <div className ="ui main"> 
                <h2>
                    Add Contact
                </h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name= "name" placeholder="Enter your name" />
                          
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name= "email" placeholder="Enter your email" />
                          
                    </div>
                    <div className="field">
                       <button className="ui button blue">Submit</button>
                          
                    </div>
                </form>
            </div>

        );
    }
}
export default AddContact;