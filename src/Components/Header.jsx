import { useState } from "react";
const Title =()=>{
     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDRYf2mFoz2fviMm805pc6F_S4fKRWuBKtB91Hzk&s" alt="wtf logo"/>;
}

const Header =()=>{
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    function authenticate(){
        return isLoggedIn;
    }
    
    return (
        <div className="header">
            <Title/>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
            {authenticate()? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>login</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>}
            
            
        </div>
    )
}
export default Header;