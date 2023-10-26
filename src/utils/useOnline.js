import { useState  , useEffect} from "react"

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () =>setIsOnline(true);
  const handleOffline = () => setIsOnline(false);
  useEffect(() => {
    window.addEventListener("online", handleOnline );
    window.addEventListener("offline",handleOffline);

    //unmounting phase
    return () =>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline" , handleOffline); 
    }
  }, []);
  return isOnline;
};
export default useOnline;
/* Event listeners stay on the page even if we move to another component  */