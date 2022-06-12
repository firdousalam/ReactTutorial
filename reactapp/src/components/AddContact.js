import React from 'react';

class AddContact extends React.Component{
    state = {
        name : "",
        email:""
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "")
        {
            alert("please enter name");
            return false;
        }
        if(this.state.email === "")
        {
            alert("please enter Email");
            return false;
        }
        this.props.addContactHandler(this.state);
        this.setState({name : "",email:""});
    }
    render(){
        return (
            <div className ="ui main"> 
                <h2>
                    Add Contact
                </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name= "name" value={this.state.name} placeholder="Enter your name" 
                            onChange={(e) => this.setState({name:e.target.value})}/>
                          
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name= "email" placeholder="Enter your email" value={this.state.email}  
                        onChange={(e) => this.setState({email:e.target.value})}/>
                          
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