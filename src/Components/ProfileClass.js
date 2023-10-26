import React from "react";
import axios from "axios";
class Profile extends React.Component {
    constructor(props){
        super(props);
        //react uses a single object to create state variables
        this.state={
            count:0,
            count2:0,
            userInfo:{}
        }
        // console.log('constructor');
    }
    //similar to useEffect but not equal
    //called after first render
    async componentDidMount(){
        const res = await axios.get('https://api.github.com/users/jaiswalk008');
        console.log(res.data);
        this.setState({userInfo:res.data})
    }
    //called after every next render
    // componentDidUpdate(prevPros, prevState){
    //     // if(this.state.count!= prevState.count){

    //     // }
    //     this.timer = setInterval(() => console.log('component did updtaed'),1000);
    // }

    // componentWillUnmount(){
    //     //called when dom is unloaded i.e., when we go to another page
    //     clearInterval(this.timer)
     
    // }

    //lifecycle - constructor then render then componentDidMount
//Profile is not a normal js class and we need to mention its a class component so it imports
//from React.Component
    render(){
        
        return (
            //class based component won't work without render method 
           <>
            <h1>Class based Profile Component</h1>
            <img style={{height:"200px" , width:"200px"}} src={""+this.state.userInfo.avatar_url}></img>
            <h2>Developer Name: {this.state.userInfo.name}</h2>
            <h4> Bio : {this.state.userInfo.bio}</h4>
            <h4>Location : {this.state.userInfo.location}</h4>
            <h4>Count: {this.state.count}</h4>
            {/* <h4>Count2 : {this.state.count2}</h4> */}
            {/* WE WILL NOT UPDATE STATE DIRECTLY LIKE THIS.STATE.COUNT++ */}
            {/* NOte if button is clicked componentDidUpdate is consoled not componentDidMNount */}
            <button onClick={() => {
                this.setState({count:this.state.count+1 })
                
            }} >Increment count</button>
           </>
        )
    }
}
export default Profile;

/*
RENDER PHASE
    Parent constructor
    Parent render
    first child constructor
    first child render
    second child constructor
    second child render
    DOM UPDATED FOR CHILDREN
COMMIT PHASE STARTS

    first child componentDidMount
    second child componentDidMount
    Parent componentDidMount

IF componentDidMount IS MADE ASYNC
    Parent constructor
    Parent render
    first child constructor
    first child render
    Parent componentDidMount because child componentDidMount is async so it will be executed later
    json data
    child componentDidMount
    child render (as new data is available)
*/