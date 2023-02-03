import React , {useState} from 'react'

export default function TextBox(props) {
    const handleLowClick = ()=>{
      console.log("lower case was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText);
      if (newText==='') {
        props.showAlert("No Word To Convert","warning");
      }
      else{
        props.showAlert("Converted To Lowercase","success");
      }

    }
    const handleCopyClick = ()=>{
      console.log("text copied");
      let newtext = document.getElementById("mybox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      if (newtext===" ") {
        props.showAlert("No Word To Copy","warning");
      }
      else{
        props.showAlert("Words Has Been Copied","success");
      }
    }
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        if (newText==='') {
          props.showAlert("No Word To Convert","warning");
        }
        else{
          props.showAlert("Converted To Upppercase","success");
        }
    }
    const handleClearClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = " ";
        setText(newText);
        if (newText==='') {
          props.showAlert("No Word To Clear","warning");
        }
        else{
          props.showAlert("Display has been cleared","success");
        }
    }
    const handleCapitalizedClick =()=>{
      const arr = text.split(" ");
      for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);    
      }
      let newText = arr.join(" ");
      setText(newText);
      if (newText===null) {
        props.showAlert("No Word To capitalized","warning");
      }
      else{
        props.showAlert("Words has been capitalized","success");
      }
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      if (newText==='') {
        props.showAlert("Enter and sentance ","warning");
      }
      else{
        props.showAlert("Extra spaces has been removed","success");
      }
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text,setText] = useState("");
    // setText('new text');
  return (
    <>
    <div className='container' style={{ color: props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control my-3" style={{ background: props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'}}  value={text} placeholder="Enter text here..." onChange = {handleOnChange} id="mybox" rows="8"></textarea>
           <div>
            <button className="btn btn-success mx-3 my-3"  onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-success mx-3 my-3"  onClick={handleLowClick}>Convert To Lower Case</button>
            <button className="btn btn-success mx-3 my-3"  onClick={handleCapitalizedClick}>Convert To Capitalized Case</button>
            <button className="btn btn-success mx-3 my-3"  onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-success mx-3 my-3"  onClick={handleClearClick}>Clear Page</button>
            <button className="btn btn-success mx-3 my-3"  onClick={handleCopyClick}>Copy Text</button>
          </div>
        </div>
    </div>
    <div className="container" style={{ color: props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summary</h2>
      <p>Number of words <b>{text.split(" ").length}</b>
      <br /> Number of characters <b>{text.length}</b>  </p>
      <p><b>{0.008 * text.split(" ").length}</b> Minute read</p>

      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  )
}
