import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };

    console.log(this.props.name + " Constructor is called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/octocat/followers");
    const responseData = await data.json();
    this.setState({
      userInfo: responseData,
    });

    console.log("user ->", responseData);
  }

  render() {
    const { login, id, location } = this.state.userInfo;
    console.log(login);
    return (
      <div>
        <h2>Followers List</h2>
        {this.state.userInfo.map((user) => (
          <div key={user.id}>
            <h4>Name: {user.login}</h4>
            <p>ID: {user.id}</p>
            <img src={user.avatar_url} alt={user.login} width="80" />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default UserClass;
