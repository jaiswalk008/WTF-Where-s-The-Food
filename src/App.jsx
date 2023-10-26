import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
import Error from "./Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login  from "./Components/Login";
import Profile from './Components/ProfileClass';
import { lazy  , Suspense} from "react";
import Shimmer from "./Components/Shimmer";
const AppLayout=()=>{
    const userName = localStorage.getItem('username');

    return (!userName) ? (<Login/>) : (
        <>
            <Header/>
            <Outlet/>
            {/* children from applayout will be filled in the outlet component */}
            <Footer/>
            
        </>
        
    )
}
/* / - means from the root
/about means after localhost:1234
/profile means localhost:1234/profile
while profile means /about/profile */

/*
    LOGIC BUNDLING
    chunking ,code splitting ,dynamic bundling , lazy loading ,  on demand loading , dynqamic import
    upon on demand loading it takes time to load the new instamart.js file but react tries to
    render it immediatly becuase its still a SPA so we NEED TO SUSPEND LOADING and we use <Suspense/> 
    import("./Components/Instamart") - its a promise 
*/
const Instamart = lazy(() =>import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/About",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile name={"Karan"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);