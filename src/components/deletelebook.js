import React, {  useEffect, useState } from "react";
import './content.css'
import axios from 'axios'
import Delete from "./delete";
const Deletebook = ( {close,kk,tt}) => {

    const [id,setId] = useState(kk);
    const [title,setTitle] = useState(tt);

  const [loading, setLoading] = useState('')
  const getDB = ()=>{
    let a=id;

    setLoading("Getting data")
    axios.post("https://server-pnhmanager.herokuapp.com/api/deletebook", {id:a}).then((result)=>{
      console.log(result.data);
      window.location.reload();
    })
  }
  return(
    <div className="modal" >
    <button className="close" onClick={close}>
      &times;
    </button>
  
  
  <div className="header">  </div>
  
    <div className="content" >
     <h1 style={{display:'flex',justifyContent:'center'}}>Xác nhận xoá sách {title}</h1>


    <div  style={{display:'flex',justifyContent:'center'}} >
    <p>{loading}</p>
    </div>
    </div>
    
    
       <div className="actions">
      
         <button  onClick={getDB} className='button btnn'>Xoá</button>
   
     
    </div>
  </div>

)};
export default Deletebook