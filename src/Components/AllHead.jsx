import React from "react";
import './AllHead.css'
import { useEffect, useState } from "react";

function Name(){
    const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUsername(loggedInUser.username);
    }
  }, []);
return(
    <div class="heading4">
    <p>SHAADIPIX</p>
    <div>{username}</div>
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