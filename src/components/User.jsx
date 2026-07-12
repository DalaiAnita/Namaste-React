import { useState } from "react";


const User = ({name,age, location}) => {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(1);
    return (
        <div>
            <h1>User from Funactional Component</h1>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
            <h5>Location: {location}</h5>
            <h5>Count: {count}</h5>
            <h5>Count2: {count2}</h5>
        </div>
    )
}

export default User;