const Shimmer = () => {
    return (
      <div className="shimmer">
        {Array.from({ length: 20 }).map((element, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-animation"></div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Shimmer;
  