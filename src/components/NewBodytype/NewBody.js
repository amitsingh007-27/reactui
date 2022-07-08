import React from "react";

import BodyForm from "./BodyForm";
import './NewBody.css';
const NewBody=(props)=>{

    const savebodyDataHandler=(enteredBodyData)=>{
        const bodyData={
            ...enteredBodyData,
            id:Math.random().toString()
        }
        props.onAddBody(bodyData);
        console.log(bodyData);
    };
    return(
        <div className="new-part">
            <BodyForm
             onSaveBodyData
            ={savebodyDataHandler}/>
        </div>
    );
};
export default NewBody;