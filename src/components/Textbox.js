import React,{useState} from 'react'

export default function Textbox() {
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
  return (
    <div className="container">
    <div className="form-floating my-3">
        <textarea className="form-control" value={text} onChange={handlerOnChange} id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Your text</label>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlerOnClick1}>Change to UPPERCASE</button>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlerOnClick2}>Change to lowercase</button>
    </div>
    <h2>Summary</h2>
    <p>{text.length} characters, {text.split(" ").length} words</p>
    <iframe title="quote" src="https://kwize.com/quote-of-the-day/embed/&txt=0&font=&color=000000&background=ffffff&fid=0"></iframe>
    </div>
  )
}
