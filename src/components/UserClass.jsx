import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        login:"anitadalai"      }
    };


    console.log(this.props.name + " Constructor is called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/octocat");
    const responseData = await data.json();
    this.setState({
        userInfo: responseData
    });

    console.log("user ->", responseData)

  }



  render() {
    const { login, id, location } = this.state.userInfo;
    console.log(login)
    return (
      <div>
        <h2>User from Class component</h2>
        <h5>Name: {login}</h5>
        <h5>Age: {id}</h5>
        <h5>Location:{location} </h5>
      </div>
    );
  }
}

export default UserClass;
