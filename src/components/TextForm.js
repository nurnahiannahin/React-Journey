import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    SetText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    SetText(newText);
  };
  const handleCopyClick = () => {
    let text = document.getElementById('myText');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // Handle Extra Spaces

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    SetText(newText.join(" "));
  }
  const handleClearClick = () => {
    SetText('');
  };

  const handleOnChange = (event) => {
    SetText(event.target.value);
  }
  const [text, SetText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode=='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode=='dark'?'white':'black', backgroundColor: props.mode=='dark'?'#403d39':'white'}} id="myText" rows="9"></textarea>
        </div>
        <button className={`${props.mode=='light'?'btn btn-primary':'btn btn-secondary'} mx-2`} onClick={handleUpClick}>Text to Uppercase</button>
        <button className={`${props.mode=='light'?'btn btn-primary':'btn btn-secondary'} mx-2`}  onClick={handleLowerClick}>Text to Lowercase</button>
        <button className={`${props.mode=='light'?'btn btn-primary':'btn btn-secondary'} mx-2`}  onClick={handleClearClick}>Clear Text</button>
        <button className={`${props.mode=='light'?'btn btn-primary':'btn btn-secondary'} mx-2`}  onClick={handleCopyClick}>Copy Text</button>
        <button className={`${props.mode=='light'?'btn btn-primary':'btn btn-secondary'} mx-2`}  onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} character</p>

    </div>
    <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text above to preview it.."}</p>
    </div>
    </>
  )
}
