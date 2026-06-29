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

const RestaurantCard = ({ resData }) => {
  console.log("resData---->", resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant"
      />

      <div className="card-body">
        <h3>{name}</h3>
        <div className="card-info">
          <span className="rating">⭐ {avgRating} </span>
          <span className="delivery-time">⏱️ {sla.deliveryTime} mins</span>
        </div>
        <p className="cuisines">{cuisines.join(",")}</p>

        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};
const restaurantsList = [
    {
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
          deliveryTime: 28,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 03:00:00",
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
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "353404",
        name: "RNR Biryani - Taste of 1953",
        cloudinaryImageId: "titgwthozpmhyzjgdh5u",
        locality: "Shivanahalli",
        areaName: "Rajajinagar",
        costForTwo: "₹350 for two",
        cuisines: ["Biryani", "South Indian", "Kebabs"],
        avgRating: 4.3,
        parentId: "11620",
        avgRatingString: "4.3",
        totalRatingsString: "8.8K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.5,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "5.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
              description:
                "Top-rated for Naati Style Biryani, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Naati Style Biryani, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹40",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-shivanahalli-rajajinagar-rest353404",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "444178",
        name: "Magnolia Bakery",
        cloudinaryImageId: "6f0945b8b18d9f4241dd1cd9a70e23d7",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹500 for two",
        cuisines: ["Bakery", "Desserts", "Ice Cream"],
        avgRating: 4.6,
        parentId: "267303",
        avgRatingString: "4.6",
        totalRatingsString: "16K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
              description:
                "Top-rated for Cakes & Desserts, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
              description: "Top-rated for Gourmet, based on user votes.",
            },
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Cakes & Desserts, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Gourmet, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "8.4K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/magnolia-bakery-indiranagar-rest444178",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "721822",
        name: "Cheesecake & co.",
        cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
        locality: "rt nagar",
        areaName: "Koramangala",
        costForTwo: "₹500 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "387417",
        avgRatingString: "4.6",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹200 OFF",
          subHeader: "ABOVE ₹699",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/cheesecake-and-co-rt-nagar-koramangala-rest721822",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "570511",
        name: "Bakingo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/17/8fd8e6f0-f6f3-4727-95db-8979ef118b0d_570511.JPG",
        locality: "Bangalore South",
        areaName: "Vasanth Nagar",
        costForTwo: "₹299 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.7,
        parentId: "3818",
        avgRatingString: "4.7",
        totalRatingsString: "6.2K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 03:00:00",
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
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/bakingo-south-vasanth-nagar-rest570511",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "588012",
        name: "SMOOR",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/22/d919010b-9e38-4b46-be43-03d03251f70a_588012.JPG",
        locality: "Lavelle Road",
        areaName: "Lavelle Road",
        costForTwo: "₹450 for two",
        cuisines: [
          "Asian",
          "Burgers",
          "Italian",
          "Thai",
          "Sushi",
          "Salads",
          "Pastas",
          "Pizzas",
          "Mexican",
          "Chinese",
        ],
        avgRating: 4.5,
        parentId: "3506",
        avgRatingString: "4.5",
        totalRatingsString: "2.3K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "ABOVE ₹159",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
            ratingCount: "870",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/smoor-lavelle-road-rest588012",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "837953",
        name: "The Pizza Project by Oven Story",
        cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
        locality: "Central Hall",
        areaName: "Seshadripuram",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        parentId: "497031",
        avgRatingString: "4.0",
        totalRatingsString: "149",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-28 23:59:00",
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
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/the-pizza-project-by-oven-story-central-hall-seshadripuram-rest837953",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "696231",
        name: "ITC Sunfeast Baked Creations",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/22/d65009a2-0f75-43be-a3af-cc6f2531f092_696231.JPG",
        locality: "Tasker Town",
        areaName: "Dispensary Road",
        costForTwo: "₹600 for two",
        cuisines: ["bakery", "dessert", "Cakes & Pastries", "Sweets"],
        avgRating: 4.7,
        parentId: "12285",
        avgRatingString: "4.7",
        totalRatingsString: "592",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-06-29 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "70% OFF",
          subHeader: "UPTO ₹130",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
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
        context: "seo-data-95d3f51e-4501-4f2b-a77b-e152f086b45e",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-tasker-town-dispensary-road-rest696231",
        type: "WEBLINK",
      },
    }
  ];
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurants.." />
        <button>Search</button>
      </div>
      <div className="res-container">
        {restaurantsList.map((restaurant) => (
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
