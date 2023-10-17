import { useState } from "react";
import { Link } from "react-router-dom";
const Title =()=>{
     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDRYf2mFoz2fviMm805pc6F_S4fKRWuBKtB91Hzk&s" alt="wtf logo"/>;
}


const Header =()=>{
   
    const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem('username'));
    function authenticate(){
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div className="header">
            <Title/>
            <ul>
                {/* still <a> will appear in the html because link uses <a> under the hood */}
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                <Link to="#"><li>Cart</li></Link>
            </ul>
             
           {isLoggedIn? <button onClick={authenticate}>logout</button> : 
           <button onClick={authenticate}>login</button>}
        </div>
    )
}
export default Header;