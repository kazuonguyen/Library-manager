import React, {  useState } from "react";
import './content.css'
import axios from "axios";
const Delete = ({ close }) => {
  const [name, setName] = useState('');

  const  nameChange= (e)=>{
      setName(e.target.value);
  }

  
  const [loading, setLoading] = useState('')
  const getDB = ()=>{
    let a=name;
    setLoading("Getting data")
    axios.post("https://server-pnhmanager.herokuapp.com/api/delete", {name: a}).then((result)=>{
      console.log(result.data);
      window.location.reload();
    })
  }
  return(
    <div className="modal" >
    <button className="close" onClick={close}>
      &times;
    </button>
  
  
  <div className="header"> Xóa người mượn </div>
  
    <div className="content" >
     <h1 style={{display:'flex',justifyContent:'center'}}>ID người mượn</h1>
    <div  style={{display:'flex',justifyContent:'center'}} >
       <input value={name} onChange={nameChange} placeholder='id'></input>
       </div>
    
   
    <div  style={{display:'flex',justifyContent:'center'}} >
    <p>{loading}</p>
    </div>
    </div>
    
    
       <div className="actions">
      
         <button  onClick={getDB} className='button btnn'>Xóa</button>
   
     
      <button
        className="button btnn"
        onClick={() => {
          console.log('modal closed ');
          close();
        }}
      >
        Thoát
      </button>
    </div>
  </div>

)};
export default Delete