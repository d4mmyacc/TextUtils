import React ,{ useState } from 'react'


export default function Textform(props) {

  const [Text,setText] = useState("");
  const handleUpClick=()=>{
    // console.log("upper case was clicked");
    let newText= Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }

  const handleLowClick=()=>{
    let newText=Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success")
  }
  const handleOnChange=(event)=>{
    // console.log("on change was clicked");
    setText(event.target.value);
  }
  
  const clearText=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text has been cleared","success")
  }

    const replacecasefunc = ()=>{
      let existing_text = prompt("Enter which word to replace : ");
      let replaced_text = prompt("Enter New Text");
      setText(Text.replaceAll(existing_text, replaced_text));
      props.showAlert("Text has been replaced","success")
    } 

    const speak = () => {
      let msg = new SpeechSynthesisUtterance(Text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
      }
          if (toogle.innerHTML === "Speak"){
              window.speechSynthesis.cancel()
          }
      }
  
      const handleReverse = () => {
        /* Convert string to array*/
        let abc = Text.split("");
        /* Reverse array*/
        let rev = abc.reverse();
        /* Convert array to string*/
        let newText = rev.join("");
        setText(newText);
        props.showAlert("Text has been reversed" ,"success") 
      };

      const copyText=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard" ,"success") 
      }

      const handleExtraspaces=()=> {
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed" ,"success") 

      }

  return (
    <>
    <div class="container" style={{color:props.mode==='dark'? 'white':'black'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text}  style={{background:props.mode==='dark'? 'grey':'white', color:props.mode==='dark'? 'white':'black'}} onChange={(e)=>handleOnChange(e)} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={replacecasefunc}>Find and replace</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" id="toggle">Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
      </div>
      <div class="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}> 
          <h2>Your text summary</h2>
          <p>{Text.length>0 ? Text.trim().split(" ").length : 0} words and {Text.length} characters</p>
          <p>{0.008*Text.split(" ").length} Minutes read</p>
          <p>{Text.split(".").length-1} sentences</p>
          <h2>Preview</h2>
          <p>{Text.length>0?Text:"Enter something in the box above to preview it here"}</p>
      </div>
      </>
    )
}
