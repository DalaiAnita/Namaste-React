import React, {createContext, lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import "../index.css";
import UserContext from "./Utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";


const Grocery = lazy(() => import("./components/Grocery.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"))

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Anita Dalai"
    }
    setUserName(data.name);
  }, []);



  return (
    //solution to Props drilling via React Context
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:'/contact',
        element: <Suspense fallback={<Shimmer />}><Contact /></Suspense>
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
