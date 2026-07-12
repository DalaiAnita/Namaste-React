import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
       <div>
        <h1>About Us Page...</h1>
        {/* <User name={"Anita Singh"} age={"26"} location={"Bangalore"} /> */}
        <UserClass name={"Anita Dalai"} age={"26"} location={"Bangalore"} />
       </div>
    )
}

export default About;