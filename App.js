import React from "react";
import ReactDOM from "react-dom/client"



// //using React.createElement
// const header1 = React.createElement("div",{className: "title"},[
//     React.createElement("h1", {key: "h1"}, "I am a h1 tag"),
//     React.createElement("h2", {key: "h2"}, "I am a h2 tag"),
//     React.createElement("h3", {key: "h3"}, "I am a h3 tag"),
// ]);

// //using jsx
// const header2 = (
//     <div className="title">
//         <h1>I am a h1 tag from jsx</h1>
//         <h2>I am a h2 tag from jsx</h2>
//         <h2>I am a h3 tag from jsx</h2>
//     </div>
// )

// //using functional component
// const Paragraph = () => {
//     return (<p>Hello I am a pragraph and i will 
//         be used inside the Functional header component and it is called component cpomposition</p>)
// }

// const FunctionHeader = () => {
// return (
//     <div className="title">
//         <h1 className="firstHeader">I am a h1 tag from functional component</h1>
//         <h2 className="secondHeader">I am a h1 tag from functional component</h2>
//         <h3 className="thirdHeader"> I am a h1 tag from functional component</h3>
//         <Paragraph />
//     </div>
// )
// }

// const Header = () => {
//     return (
//       <div className="header">
//         <div className="logo-container">
//           <img
//             className="logo"
//             src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
//             alt="logo"
//           />
//         </div>
//         <div className="search-container">
//             <input 
//               type="text" 
//               placeholder="Search here.."
//             />
//         </div>
//         <div className="user-container">
//             👤 Anita
//         </div>
//       </div>
//     );
// }

// const TitleComponent = ()=>{
//     return <h2>Title Component</h2>
// }

// const HeadingComponent = () => {
//     return <div className="container">
//         <h1>Heading Component</h1>
//     <TitleComponent />
//     </div>
// }

// * Header
// *----Logo
// *----Nav Items

// * Body
// * ----Search
// * ----RestaurantContainer
// * ----ResturantCard
// * ----Image
// * ----Name of Restaurants, star rating, Cuisines, delivery time etc

// * Footer
// * ----Copyright
// * ----Links
// * ----Address
// * ----Contact

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"
                alt="good food" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    return (
        <div className="card">
            <img 
                className="card-img"
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="restaurant"/>

                <div className="card-body">
                    <h3>{props.resName}</h3>


                    <div className="card-info">
                        <span className="rating">⭐ {props.rating} </span>
                        <span className="delivery-time">⏱️ {props.time} mins</span>
                    </div>

                     <p className="cuisines">
                        {props.cuisine}
                    </p>

                    <p className="price">₹{props.price} for two</p>
                </div>


        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurants.." />
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard 
            resName="Burger King" 
            cuisine="Burgers, Fast Food, Beverages" 
            time="25"
            price="300"
            rating="4.3"
            />
        <RestaurantCard 
            resName="KFC" 
            cuisine="Burgers, Fast Food, Beverages" 
            time="35"
            price="500"
            rating="4.5"
            />
        <RestaurantCard 
            resName="WOW Momos" 
            cuisine="Fried Momos, Tandoori Momos " 
            time="20"
            price="350"
            rating="4.4"
            />
        <RestaurantCard 
            resName="Paradise" 
            cuisine="Dum Biryani, Veg Biryani " 
            time="30"
            price="450"
            rating="4.1"
            />
            <RestaurantCard 
            resName="Burger King" 
            cuisine="Burgers, Fast Food, Beverages" 
            time="25"
            price="300"
            rating="4.3"
            />
        <RestaurantCard 
            resName="KFC" 
            cuisine="Burgers, Fast Food, Beverages" 
            time="35"
            price="500"
            rating="4.5"
            />
        <RestaurantCard 
            resName="WOW Momos" 
            cuisine="Fried Momos, Tandoori Momos " 
            time="20"
            price="350"
            rating="4.4"
            />
        <RestaurantCard 
            resName="Paradise" 
            cuisine="Dum Biryani, Veg Biryani " 
            time="30"
            price="450"
            rating="4.1"
            />
      </div>
    </div>
  );
};
const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppLayout />);