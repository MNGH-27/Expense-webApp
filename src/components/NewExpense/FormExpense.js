import React,{useState , useSpring} from 'react'
import './FormExpense.css'

function Formexpense(props){


    const [enteredtitle , changetitle] = useState('');
    const [enteredamount , changeamount] = useState('');
    const [entereddate , changedate] = useState('');

    const TitlechangeHandler = (event) => {
        changetitle(event.target.value);
    }
    const AmountchangeHandler = (event) => {
        changeamount(event.target.value);
    }
    const DatechangeHandler = (event) => {
        changedate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const NewData = {
            title: enteredtitle,
            amount : +enteredamount,
            date : new Date(entereddate),
        };
        props.onSaveExpenseData(NewData);

        clearInput();
    }

    function clearInput(){
        changetitle('');
        changedate('');
        changeamount('');
    }

    const [container_height , changeheight] = useState("15px");
    const [main_Div_visibility , change_main_Div_visibility] = useState("hidden");
    const [btn_display , change_btn_display] = useState("flex");
  
    function CloseformHandler(){
        changeheight("15px");
        change_main_Div_visibility("hidden");
        change_btn_display("flex");
        clearInput();
    }

    function OpenformHandler(){
        changeheight("300px");
        change_main_Div_visibility("visible");
        change_btn_display("none");
        console.log("this is Come here");
    }

    return(
        <form onSubmit={submitHandler} className="cover-input smallDiv" id="conatiner">
            <div className="cover-input close-div" id="open-container" style={{height:container_height , visibility:main_Div_visibility}}>
                <div className="input-item">
                    <label>Title</label><br/>
                    <input  type="text" onChange={TitlechangeHandler} value={enteredtitle} required/>
                </div>
                <div className="input-item">
                    <label>Amount</label><br/>
                    <input type="number" min="0.01" step="0.01" onChange={AmountchangeHandler} value={enteredamount} required/>
                </div>
                <div className="input-item">
                    <label>Date</label><br/>
                    <input type="date" onChange={DatechangeHandler} value={entereddate} required/>
                </div>
                <div className="btn-container">
                    <button type="btn" onClick={CloseformHandler}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
            <div className="" id="close-container" style={{display:btn_display}}>
                <button type="button" onClick={OpenformHandler}>Add new expense</button>
            </div>
        </form>
    )
}

export default Formexpense;