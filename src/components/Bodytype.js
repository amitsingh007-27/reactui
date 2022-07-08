import React,{useState} from 'react';
import './Bodytype.css';

const Bodytype=(props)=>{

  
    
   return(
     <div className='body-type'>
         <div>{props.type}</div>
         <div className='body-type__des'>
             <h2>{props.set}</h2>
             <div className='body-type__part'>{props.part}</div>
         </div>
         
     </div>
   );
}
export default Bodytype;