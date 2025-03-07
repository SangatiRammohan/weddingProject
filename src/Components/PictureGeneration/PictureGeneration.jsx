import React from 'react';
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: '700px',
  height: '413px',
  borderRadius: '24px',
   border: '12px solid #D4AF37',
  padding: '24px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  alignContent:'center',
  justifyContent: 'center',
  position: 'relative', 
  top: '100px',
  left: '50%',
  marginBottom: '130px',
   transform: 'translate(-50%, 10%)',
  

  


};

const root={
  width:"100%",
  minHeight:"100vh",
  backgroundImage: "url('../../../public/bgPicture.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center", 
  backgroundRepeat: "no-repeat",
}
const titleStyle = {
  fontFamily: 'Cormorant Garamond', 
  fontSize: '32px',
  color: '#333',
  marginBottom: '16px',
  textAlign: 'center',
};

const messageStyle = {
  fontFamily: 'Lora', 
  fontSize: '18px',
  color: '#666',
  textAlign: 'center',
  marginBottom: '24px',
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
};

const iconStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%', 
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', 
};

const infoTextStyle = {
  fontFamily: 'Lora', 
  fontSize: '16px',
  color: '#888',
};

const buttonStyle = {
 
  background: 'linear-gradient(90deg, #D4AF37 0%, #A37611 100%)',

  color: 'white',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  fontFamily: 'Cormorant Garamond', 
  fontSize: '16px',
  cursor: 'pointer',
};





const PictureGeneration = () => {
  const navigate = useNavigate();
  return (
   <div style={root}>
     <div style={containerStyle}>
      <h1 style={titleStyle}>Your Dream Wedding Photos Are on Their Way!</h1>
      <p style={messageStyle}>
        Our AI is now working its magic to create stunning, high-definition
        wedding images for you!
      </p>

      <div>
    <img src="./images/arrows.png" alt="" width={147} height={10}/>
    {/* <img  src="src\assets\rightArrow.png"  alt=""  width={70} height={10}/> */}
</div>
      <div style={iconContainerStyle}>
        <div style={iconStyle}>
          <img src="./images/goldMessage.png" alt="Email Icon" style={imageStyle} /> 
                  </div>
        <span style={infoTextStyle}>
          We'll notify you via email once your images are ready.
        </span>
      </div>

      <div style={iconContainerStyle}>
        <div style={iconStyle}>
          <img src="./images/goldclock.png" alt="Timer Icon" style={imageStyle} /> 
        </div>
        <span style={infoTextStyle}>Estimated Time: 60 minutes</span>
      </div>

      <button style={buttonStyle} onClick={()=>{navigate('/history')}}>Got it, thanks!</button>
      
    </div>
   </div>
  );
};

export default PictureGeneration;