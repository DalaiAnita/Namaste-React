import React from "react";
import ReactDOM from "react-dom/client"



//using React.createElement
const header1 = React.createElement("div",{className: "title"},[
    React.createElement("h1", {key: "h1"}, "I am a h1 tag"),
    React.createElement("h2", {key: "h2"}, "I am a h2 tag"),
    React.createElement("h3", {key: "h3"}, "I am a h3 tag"),
]);

//using jsx
const header2 = (
    <div className="title">
        <h1>I am a h1 tag from jsx</h1>
        <h2>I am a h2 tag from jsx</h2>
        <h2>I am a h3 tag from jsx</h2>
    </div>
)

//using functional component
const Paragraph = () => {
    return (<p>Hello I am a pragraph and i will 
        be used inside the Functional header component and it is called component cpomposition</p>)
}

const FunctionHeader = () => {
return (
    <div className="title">
        <h1 className="firstHeader">I am a h1 tag from functional component</h1>
        <h2 className="secondHeader">I am a h1 tag from functional component</h2>
        <h3 className="thirdHeader"> I am a h1 tag from functional component</h3>
        <Paragraph />
    </div>
)
}

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="logo"
          />
        </div>
        <div className="search-container">
            <input 
              type="text" 
              placeholder="Search here.."
            />
        </div>
        <div className="user-container">
            👤 Anita
        </div>
      </div>
    );
}

// const TitleComponent = ()=>{
//     return <h2>Title Component</h2>
// }

// const HeadingComponent = () => {
//     return <div className="container">
//         <h1>Heading Component</h1>
//     <TitleComponent />
//     </div>
// }
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<Header />);