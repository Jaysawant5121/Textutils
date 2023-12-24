import React,{useState} from 'react';
export default function TextForm(props){
  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
    // console.log("Edited");
  }
  
  const downCase =() =>{
    let lowerCase=text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Coverted to Lowercase", "success");
  }
  const cleared =()=>{
   setText("");
  //  props.showAlert("Text cleared", "success");

  }
  const[text,setText]=useState("");
  return(
   <>
<div className= "container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
  <div className='mb-3'>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
    </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button type='button' className="btn btn-warning mx-2" onClick={downCase}>Convert To Lower Case</button>
  <button type='button' className="btn btn-danger mx-2" onClick={cleared}>Clear</button>
</div> 
    <div className='container my-2' style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Text summary</h1>
      <p>{text.trim('').split(" ").length} words and {text.trim('').length} characters</p>
      {/* <p>{text.split(" ").length} words and         characters</p> */}
      {/* Average to read a sentence */}
      <p>{0.08 * text.trim('').split(" ").length} Minutes to read this sentence</p>
      <h2>Preview </h2>
      <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
   </>     

    );




}