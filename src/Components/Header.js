
const Title =()=>{
     return <img src="https://th.bing.com/th/id/OIP.j9ihD-QxgghPCBF6jWOkVAHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" alt="wtf logo"/>;
}

export default Header =()=>{
    return (
        <div className="header">
            <Title/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
        </div>
    )
}