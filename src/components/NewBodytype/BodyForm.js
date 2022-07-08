import React,{useState} from "react";

import './BodyForm.css';

const BodyForm=(props)=>{
   const[enteredtype,setEnteredType]= useState('');
   const[enteredset,setEnteredSet]= useState('');
   const[enteredpart,setEnteredPart]= useState('');

   const typeChangHandler = (event)=>{
      setEnteredType.log(event.target.value)
   };
   const setChangHandler = (event)=>{
      setEnteredSet(event.target.value)
   };
   const partgHandler = (event)=>{
      setEnteredPart (event.target.value)
   };
   const submitHandler=(event)=>{
    event.preventDefaulte();

    const typsbody={
       type:enteredtype,
       set:enteredset,
       part:enteredpart
    }

    props.savebodyDataHandler(typsbody);
    console.log(typsbody);

    setEnteredType("");
    setEnteredSet("");
    setEnteredPart("");


   };
   return(
       <form onSubmit={submitHandler}>
          <div className="PART__controls">
             <div className="PART__control">
                <label>type</label>
                <input typ="text" value={enteredtype} onChange={typeChangHandler}/>
             </div>
             <div className="PART__control">
                <label>set</label>
                <input typ="number" value={enteredset} min="0.01" step="0.01"onChange={setChangHandler}/>
             </div>
             <div className="PART__control">
                <label>part</label>
                <input typ="text" value={enteredpart} onChange={partgHandler}/>
             </div>

          </div>
          <div className="new-bodyPART__action">
             <button types="submit">Add exercise</button>
          </div>
       </form>
   );
}
export default BodyForm;