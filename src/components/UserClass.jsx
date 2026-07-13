import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Constructor is called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/octocat/followers");
    const responseData = await data.json();
    console.log("response", responseData);
    console.log(this.props.name + "Component Did mount");
  }

  render() {
    console.log(this.props.name + "Render is called");
    const { name, age, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>User from Class component</h2>
        <h5>Name: {name}</h5>
        <h5>Age: {age}</h5>
        <h5>Location: {location}</h5>
        <h5>Count: {count}</h5>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increse Count
        </button>
      </div>
    );
  }
}

export default UserClass;
