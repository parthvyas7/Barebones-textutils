import React,{useState} from 'react'

export default function Textbox(props) {
  const [text, changeText] = useState('');
  const handlerOnChange = (event) => {
    changeText(event.target.value)
  }
  const handlerOnClick1 = () => {
    let newText=text.toUpperCase();
    changeText(newText);
  }
  const handlerOnClick2 = () => {
    let newText=text.toLowerCase();
    changeText(newText);
  }
  const handlerOnClick3 = () => {
    let copyText = document.getElementById("floatingTextarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
  }
  const handlerOnClick4 = () => {
    changeText("");
  }
  return (
    <div className="container">
    <div className="form-floating mx-5 my-5">
        <textarea className="form-control" placeholder="Your text" value={text} onChange={handlerOnChange} id="floatingTextarea" style={{height: "100px"}}></textarea>
        <label htmlFor="floatingTextarea" style={{color: props.style === "light" ? "#363537" : "#FFFFF"}}>Your text</label>
        <button type="button" className={`btn btn-${props.style} mx-2 my-2`} onClick={handlerOnClick1} disabled={text.length===0}>Change to UPPERCASE</button>
        <button type="button" className={`btn btn-${props.style} mx-2 my-2`} onClick={handlerOnClick2} disabled={text.length===0}>Change to lowercase</button>
        <button type="button" className={`btn btn-${props.style} mx-2 my-2`} onClick={handlerOnClick3} disabled={text.length===0}>Copy to clipboard</button>
        <button type="button" className={`btn btn-${props.style} mx-2 my-2`} onClick={handlerOnClick4} disabled={text.length===0}>Reset</button>
    </div>
    <h2>Summary</h2>
    <p>{text.length} characters, {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words</p>
    <iframe frameBorder="0" title="quote" src={`${props.style === "light" ?"https://kwize.com/quote-of-the-day/embed/&txt=0&font=&color=000000&background=ffffff": "https://kwize.com/quote-of-the-day/embed/&txt=0&font=&color=fafafa&background=080808"}`}></iframe>
    </div>
  )
}
