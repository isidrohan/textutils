import React, { useState } from "react";

export default function (props) {
  // const[myStyle,setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#4f5057" : "white",
    border: "1px solid",
    // borderColor: props.mode==='dark'?'white':'#5c5d66',
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong> How it works</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              if you have a long paragraph and you want to make some changes to that, like if you want to the whole para into uppercase, then copy your para and paste it into the text area and click the "Convert to uppercase" button to convert the whole para into uppercase, same you can also use other buttons according to your choice. So, this is how the textutils works.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>User Friendly </strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            this app is created by taking care of the user's eye, that's why this app has a dark mode feature too so, users can switch it according to their needs and use it seamlessly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
