import React from "react";
import "./History.css";
import { Selectbar } from "../SelectOptions/SelectOptons";
import AllHead from '../AllHead'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FourCards = () => {

    const [user, setUser] = useState({ username: "", email: "", phone: "" });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser({
        username: loggedInUser.username,
        email: loggedInUser.email,
        phone: loggedInUser.phone
      });
    }
  }, []);
  

  const navigate = useNavigate();
  const handleButtonClick = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      navigate("/picture");  
    } else {
      alert("Please log in first!");  
    }
  };


    return (
        <>
<AllHead/>
            <div class="parent">
                <div class="blackCard">

                    <span id="part" >User Photos</span>
                    <div>
                        <div class="section">
                            <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                            <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                            <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                            <img class="img2" src="./images/couple.jpg" width={95} height={95}></img>
                        </div>
                    </div>
                    <div id="part2">
                        <div class="accordianset">

                            <Selectbar name="Background" />
                            <Selectbar name="Outfit" />
                            <Selectbar name="Pose" />

                        </div>

                    </div>
                    <span id="part" >Generation Mode</span>
                    <div id="buttons">
                        <button id="fast">Fast</button>
                        <button id="quality">Quality</button>
                    </div>
                    <span id="part1">Image Dimensions</span>
                    <div class="media">
                        <img src="./images/phn1.png" width={40} height={45}></img>
                        <img src="./images/phn2.png" width={40} height={45}></img>
                        <img src="./images/phn2.png" width={40} height={45}></img>
                        <img src="./images/phn2.png" width={40} height={45}></img>
                    </div>
                    <span id="part">Number of Images</span>
                    <div class="numbers">
                        <button id="number_of_images">1</button>
                        <button id="number_of_images">2</button>
                        <button id="number_of_images">3</button>
                        <button id="number_of_images">4</button>
                    </div>

                    <button id="generate"
                    type="button"  onClick={handleButtonClick} className="btn btn-warning generate-btn" >Generate
                    <p><img src="./images/coins.png" width={14.5}></img> 100</p>
                    </button>


                </div>
                <div class="secondPart">
                    <div class="userDetailss">
                        <p id="account">ACCOUNT DETAILS</p>
                    </div>
                    <div class="info">
                        <div class="credentials">
                            <img src='../../../public/images/use.png' height={52} width={50}></img>
                            <div class="details">
                                <p id="name">{user.username}</p>
                                <p id="nametag">Name</p>
                            </div>
                        </div>
                        <div class="credentials">
                            <img src='../../../public/images/email.png' height={52} width={50}></img>
                            <div class="details">
                                <p id="name">{user.email}</p>
                                <p id="nametag">Email</p>
                            </div>
                        </div>
                        <div class="credentials">
                            <img src="../../../public/images/mobile.png" height={52} width={50}></img>
                            <div class="details">
                                <p id="name">+91 {user.phone}</p>
                                <p id="nametag">Phone</p>
                            </div>
                        </div>

                    </div>
                    <div class="contains">
                        <div style={{ display: "flex", justifyContent: "flex-start" }}><span> HISTORY</span></div>
                        <div class="containers">
                            <div class="align">
                                <div id="cards_text">
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                                </div>
                                <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                            </div>
                            <div class="horizontal" >
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple4.png" width="206px" height="206px"></img>
                            </div>
                        </div>
                        <div class="containers">
                            <div class="align">
                                <div id="cards_text">
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                                </div>
                                <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                            </div>
                            <div class="horizontal" >
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple4.png" width="206px" height="206px"></img>
                            </div>
                        </div>
                        <div class="containers">
                            <div class="align">
                                <div id="cards_text">
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                                </div>
                                <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                            </div>

                            <div class="horizontal">
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple4.png" width="206px" height="206px" ></img>
                            </div>
                        </div>
                        <div class="containers">
                            <div class="align">
                                <div id="cards_text">
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> lore ipsum do dira sum</div>
                                    <div id="small_text"><img src="./images/phone.png" width={14.5}></img> 1080*1080</div>
                                </div>
                                <div id="time"><img src="./images/clock.png" width={14.5}></img> 10/2/23 9:30PM </div>
                            </div>
                            <div class="horizontal">
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple2.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple3.png" width="206px" height="206px" ></img>
                                <img id="cards" src="./images/couple4.png" width="206px" height="206px" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FourCards