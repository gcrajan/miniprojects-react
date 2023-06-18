import React,{useState} from 'react'
import AddContact from './AddContact';
import './App.css';

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);
  function getData(val){
    setData(val.target.value);
  }
  function getPrint(data){
    data==null ? setPrint(false) : setPrint(true)
  }
  return (
    <div className="App">
      <div className="title">❤ Enter...Copy Paste ❤</div>
      <div className='mainDiv'>
        <div className="inputDiv">
          <textarea className='inputBox' type="text" onChange={getData} placeholder="Enter value to copy"/>
          <button className='inputBtn' onClick={()=> getPrint(data)}>Send</button>        
        </div>
        
        {print ?<div className='contentDiv'> <AddContact copyText={data} /></div> : null }
      </div>
    </div>
  );
}

export default App;
