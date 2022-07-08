import React from 'react';
import './Bodytypes.css';
import Bodytype from './Bodytype';


const Bodytypes=(props)=>{
  
    return(
        <div className='bodytypes'>
             {
               props.type.map(
                 body=>(
                  <Bodytype>
                            
                            type={Bodytypes.type}
                            set ={body.set} 
                            part={body.part} 
                </Bodytype>
                 )
               )
             }
          
        </div>
    );
};
export default Bodytypes;