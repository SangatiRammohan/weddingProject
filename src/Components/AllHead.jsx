import React from "react";
import './AllHead.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Name(){
   const navigate = useNavigate();
   const [isHistoryPage, setIsHistoryPage] = useState(false);
    const [username, setUsername] = useState("");
    
    const handleNavigation=()=>{
      if (isHistoryPage) {
        navigate("/page");
      } else {
        navigate("/history");
      }
      setIsHistoryPage(!isHistoryPage);
    }

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUsername(loggedInUser.username);
    }else{
      setUsername("User Name")
    }
  }, []);
return(
    <div class="heading4">
    <p>SHAADIPIX</p>
    <div className="Loginname"  onClick={handleNavigation}>Welcome !  {username} <img src="../../public/downarrow.png" alt="textimage" /> </div>
    <div id="coins">
        <div className="coinsDiv">
            <img src='../../public/images/coins.png' height={16} width={16}></img>
            <p>100</p>
        </div>
        <button className="tokensbtn">Add tokens</button>
    </div>
</div>
)
}

export default Name