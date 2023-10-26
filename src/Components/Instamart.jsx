const Instamart = () =>{
    const arr = new Array(100).fill(100);
    return (
        <div>
           { arr.map((element) => {
                return <h1>Instamart</h1>
            })}
        </div>
    )

}
export default Instamart;