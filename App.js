import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"
          alt="good food"
        />
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
  );
};

const RestaurantCard = ({resData}) => {
  console.log("resData---->", resData);
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt="restaurant"
      />

      <div className="card-body">
        <h3>{name}</h3>
        <div className="card-info">
          <span className="rating">⭐ {avgRating} </span>
          <span className="delivery-time">⏱️ {sla.deliveryTime} mins</span>
        </div>
        <p className="cuisines">{cuisines.join(',')}</p>

        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};
const resObj = {
  restaurants: [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "10583",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/42eb0361-ebd7-4570-affe-a6894ea0d2ee_10583.JPG",
        locality: "Coles Road",
        areaName: "Frazer Town",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "20K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "70% OFF",
          subHeader: "UPTO ₹130",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "3.0K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9ae85248-2089-41b3-9475-2a6f68925628",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "518369",
        name: "Madras Meal Company",
        cloudinaryImageId: "bqy6rjw55ctn04drgtt2",
        locality: "Majestic",
        areaName: "Malleshwaram",
        costForTwo: "₹350 for two",
        cuisines: ["South Indian"],
        avgRating: 4.6,
        parentId: "128893",
        avgRatingString: "4.6",
        totalRatingsString: "339",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9ae85248-2089-41b3-9475-2a6f68925628",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/madras-meal-company-majestic-malleshwaram-rest518369",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "337335",
        name: "Kannur food kitchen",
        cloudinaryImageId: "a27weqanhnszqiuzsoik",
        locality: "1st  Stage",
        areaName: "BTM Layout",
        costForTwo: "₹200 for two",
        cuisines: ["Kerala", "Biryani", "Beverages"],
        avgRating: 4.2,
        parentId: "114756",
        avgRatingString: "4.2",
        totalRatingsString: "25K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 8.9,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "8.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 04:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9ae85248-2089-41b3-9475-2a6f68925628",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "337336",
        name: "Bhillai food kitchen",
        cloudinaryImageId: "a27weqanhnszqiuzsoik",
        locality: "1st  Stage",
        areaName: "BTM Layout",
        costForTwo: "₹200 for two",
        cuisines: ["Kerala", "Biryani", "Beverages"],
        avgRating: 4.2,
        parentId: "114757",
        avgRatingString: "4.2",
        totalRatingsString: "25K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 8.9,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "8.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 04:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9ae85248-2089-41b3-9475-2a6f68925628",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    }
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurants.." />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
