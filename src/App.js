import React,{useState} from 'react';

import NewBody from './components/NewBodytype/NewBody';
import Bodytypes from './components/Bodytypes';
import Navbar from './components/Navbar';
import './App.css';

let Dummybody =[
  {
    id: 'e1',
    type:'Pull down',
    set: 'Set 15',
    part: 'Make Back'
  },
  {
   id: 'e2',
   type:'Incline Benchpress',
   set: 'Set 12',
   part: 'Make Chest'
 },
 {
   id: 'e3',
   type:'Dubllepress',
   set: 'Set 16',
   part: 'Make Biceps'
 },
 {
   id: 'e4',
   type:'Bench dip',
   set: 'Set 12',
   part: 'Make Tricep'
 },
 {
   id: 'e5',
   type:'Shoulder press',
   set: 'Set 10',
   part: 'Make Shoulder'
 },
];
function App() {

     const [types,setTypes]= useState(Dummybody)
     const addBodyHandler =(type)=>{
      const updatedBody=[type,...types];
      setTypes(updatedBody);
     }
  return (
    <div>
      
      <Navbar></Navbar>
        <NewBody onAddBody={addBodyHandler}/>
        <Bodytypes type ={types}/>
    </div>
  );
};

export default App;
