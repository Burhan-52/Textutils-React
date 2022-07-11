import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'

export default function Textform(props) {
    const handleclickuc = () => {
        let newtext = text.toUpperCase()
        settext(newtext)
    }
    const handleclicklc = () => {
        let newtext = text.toLowerCase()
        settext(newtext)
    }
    const clear = () => {
        // if (settext.value == ('')) {
        //     alert("clear")
        // }
        let newtext = ''
        settext(newtext)
    }
    const handleclicktrim = () => {
        let newtext = text.trim()
        // if (text.split(' ') == text.split('')) { 
        settext(newtext)

    }
    // const search = () => {
    //     let newtext = text.search(text)
    //     settext(newtext)

    // }

    const handle = (event) => {
        settext(event.target.value)
    }


    const [text, settext] = useState('');
    return (
        <>
            {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={search} >Search</button>
            </form> */}
            <form>
                <div className="form-group" style={{ color: props.style === 'light' ? 'black' : 'white    ' }}>
                    <h1> <label htmlFor="exampleFormControlTextarea1">{props.heading}</label></h1>
                    <textarea className="form-control" placeholder='Enter the text' value={text} onChange={handle} id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
                <button type="button" onClick={handleclickuc} className="btn btn-primary mx-2 my-2 ">convert to UPPERCASE</button>
                <button type="button" onClick={handleclicklc} className="btn btn-primary mx-2 my-2">convert to lowercase</button>
                <button type="button" onClick={handleclicktrim} className="btn btn-primary mx-2 my-2">Space Trim</button>
                <button type="button" onClick={clear} className="btn btn-primary mx-2 my-2">Clear</button>

            </form>
            <div className='container my-5' style={{ color: props.style === 'light' ? 'black' : 'white    ' }}>
                <h1>Summary</h1>
                <p>{text.split(' ').filter((element)=>element.length!==0).length} word and {text.length} character</p>
                {/* <p>{text===""?"0":text.trim().split(' ').length} word and {text.length} character</p> */}
                <p>{0.008 * text.split(' ').filter((element)=>element.length!==0).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text to preview it'}</p>

            </div>
        </>
    )
}
