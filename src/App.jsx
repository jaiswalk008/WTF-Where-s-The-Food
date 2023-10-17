import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login  from "./Components/Login";
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
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {path:"/restaurant/:id",
            element:<RestaurantMenu/>
            }
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);