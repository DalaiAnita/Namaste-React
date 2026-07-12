import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    render(){
        const {name, age, location} = this.props;
        const {count} = this.state;
        return (
          <div>
            <h1>User from Class component</h1>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
            <h5>Location: {location}</h5>
            <h5>Count: {count}</h5>
            <button onClick={() =>{
                this.setState({count : count + 1})
            }}>Increse Count</button>
          </div>
        );
    }
}

export default UserClass;