import React, { useState } from "react";
import { useRef } from "react";
import "./Background.css";

const Mandaps = [
  {
    image: '../../../public/North.png',
    styel: "NORTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../south.png",
    styel: "SOUTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../beach.png",
    styel: "BEACHSIDE MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: '../../../public/North.png',
    styel: "NORTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../south.png",
    styel: "SOUTH INDIAN MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../beach.png",
    styel: "BEACHSIDE MANDAPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const WorldMandapas = [
  {
    image: "../../../world1.png",
    styel: "Luxury Ballrooms",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../world2.png",
    styel: "Garden Weddings",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../world3.png",
    styel: "Rustic Ban Weddings",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

const Dreamy = [
  {
    image: "../../../destination1.png",
    styel: "ROYAL PALACE SETTINGS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image: "../../../destination2.png",
    styel: "ROYAL PALACE SETTINGS 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image:"../../../destination3.png",
    styel: "DESTINATION INSPIRED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

function Background(data) {
  const [activeComponent, setActiveComponent] = useState("Component1");
  const scrollContainer = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default vertical scrolling
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += event.deltaX *2; // Scroll horizontally
    }
  };

  
const MandapList = ({ data }) => {
  return (
    <div className="mandapasBgimages" 
    ref={scrollContainer}
      onWheel={handleScroll}>
      {data.map((item, index) => (
        <span key={index} className="mandap-card">
          <img src={item.image} alt={item.styel} className="mandap-image" />
          <div className="mandap-details">
            <h3>{item.styel}</h3>
            <p>{item.description}</p>
          </div>
        </span>
      ))}
    </div>
  );
};
  return (
    <>
      <div className="mainBackground">
        <div className="venu">
          <h2>VENUE</h2>
          <img src="/VENUE.png" alt="Venue" />
        </div>

        <div className="Mandaps">
          <button onClick={() => setActiveComponent("Component1")}>Indian Mandaps</button>
          <button onClick={() => setActiveComponent("Component2")}>World Inspired Weddings</button>
          <button onClick={() => setActiveComponent("Component3")}>Fairytale & Dreamy Settings</button>
        </div>

        <div className="ramhere">
          {activeComponent === "Component1" && <MandapList data={Mandaps} />}
          {activeComponent === "Component2" && <MandapList data={WorldMandapas} />}
          {activeComponent === "Component3" && <MandapList data={Dreamy} />}
        </div>
      </div>
    </>
  );
}



export default Background;
