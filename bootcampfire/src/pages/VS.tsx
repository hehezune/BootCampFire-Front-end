import App from "components/VSGame/G3/components/App/App";

import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMyRank } from "store/vsSlice";
import axios from "axios";


export default function VS() {
  const { myGameRank } = useSelector((state: RootState) => state.vs)
  const {isLoggedIn} = useSelector((state: RootState) => state.auth)
  // console.log(myGameRank, isLoggedIn)
  const dispatch = useDispatch();



  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/games/my-rank`);
          dispatch(loadMyRank(response.data.data));
          // console.log(response.data)

        } catch (error) {console.error("Error fetching data:", error);}
      };
      fetchData(); 
    }
  }, [isLoggedIn, dispatch]);


  return (
    <div>
      <h1>VS</h1>
      <div>{myGameRank.score}</div>
      <div style={{ border: "2px solid red", padding: "10px" }}>
      <App/>
      </div>

    </div>
  );
}
