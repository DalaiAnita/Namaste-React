// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//     return (
//        <div>
//         <h1>About Us Page...</h1>
//         {/* <User name={"Anita Singh"} age={"26"} location={"Bangalore"} /> */}
//         <UserClass name={"Anita Dalai"} age={"26"} location={"Bangalore"} />
//        </div>
//     )
// }

// export default About;


class About extends Component {
    constructor(props){
        super(props);
        console.log("parent Constructor is called");
    }

    componentDidMount(){
        console.log("parent Component Did mount is called");
    }

render(){
    console.log("parent Render is called")
    return (
        <div>
            <h1>Class based About page</h1>
            <UserClass name={"First Child"} age={"26"} location={"Bangalore"} />
            <UserClass name={"Second Child"} age={"26"} location={"Bangalore"} />
            <UserClass name={"Third Child"} age={"26"} location={"Bangalore"} />
            <UserClass name={"Forth Child"} age={"26"} location={"Bangalore"} />

        </div>
    )
}
}

export default About;