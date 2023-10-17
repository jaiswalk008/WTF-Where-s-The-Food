import { useState } from "react";
const Login = () =>{
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    return(
        <div>
            <form>
                <label for="name">Name</label>
                <input name="name" id="name" type="text" value={userName} 
               onChange={(e) => setUserName(e.target.value)} required/><br/><br/>
                <label for="password">Password</label>
                <input id="password" type="password" name="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <button onSubmit={localStorage.setItem('username' , userName)} type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login;