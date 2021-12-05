import React, {  useState } from "react";
import './content.css'
import axios from 'axios'
const Addbook = ({ close }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const  titleChange= (e)=>{
      setTitle(e.target.value);
  }
  const urlChange =  (e) =>{
    setUrl(e.target.value);
  }
  
  const [loading, setLoading] = useState('')
  const getDB = ()=>{
    let a=title;
    let b = url;
    setLoading("Getting data")
    axios.post("https://server-pnhmanager.herokuapp.com/api/addbooks", {url: b , title:a}).then((result)=>{
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
     <h1 style={{display:'flex',justifyContent:'center'}}>Thông tin sách</h1>
    <div  style={{display:'flex',justifyContent:'center'}} >
       <input value={title} onChange={titleChange} placeholder='Tên sách'></input>
       </div>
    
    <div  style={{display:'flex',justifyContent:'center'}} >
     <input value={url} onChange={urlChange}  placeholder='URL hình ảnh'></input>
    </div>

    <div  style={{display:'flex',justifyContent:'center'}} >
    <p>{loading}</p>
    </div>
    </div>
    
    
       <div className="actions">
      
         <button  onClick={getDB} className='button btnn'>Thêm</button>
   
     
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
export default Addbook