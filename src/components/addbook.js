import React, {  useEffect, useState } from "react";
import './content.css'
import axios from 'axios'
import $ from 'jquery';

const Addbook = ({ close }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category,setCategory] = useState('')

  const  titleChange= (e)=>{
      setTitle(e.target.value);
  }
  const urlChange =  (e) =>{
    setUrl(e.target.value);
  }
  const categoryChange =  (e) =>{
    setCategory(e.target.value);
  }

  const [loading, setLoading] = useState('')
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "./runapi.js";
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  const getDB = ()=>{
    let a=title;
    let b = $("#output").text();
    let c = category;
    setLoading("Getting data...")
    axios.post("https://node-express-vercel-zeta-eight.vercel.app/home/api/addbooks", {url: b , title:a,category:c}).then((result)=>{
      console.log(result.data);
      window.location.reload();
    })
  }
   
  return(
    <div className="modal" >
    <button className="close" onClick={close}>
      &times;
    </button>
  
  
  
    <div className="content" >
     <h1 style={{display:'flex',justifyContent:'center'}}>Thông tin sách</h1>
    <div  style={{display:'flex',justifyContent:'center'}} >
       <input value={title} onChange={titleChange} placeholder='Tên sách'></input>
       </div>
    
    <div  style={{display:'flex',justifyContent:'center'}} >
    <input type="file" accept="image/*"></input>
   
    </div>
    <h2    id="output"></h2>
    <div  style={{display:'flex',justifyContent:'center'}} >
    <select name="categories" value={category} onChange={categoryChange} id="categories">
  <option hidden>Thể loại</option>
  <option value="Truyện tranh">Truyện tranh</option>
  <option value="Khoa học">Khoa học</option>
  <option value="Sách giáo khoa">Sách giáo khoa</option>
  <option value="Văn học VN">Văn học VN</option>
  <option value="Văn học nước ngoài">Văn học nước ngoài</option>
  <option value="Truyện ngắn nước ngoài">Truyện ngắn nước ngoài</option>
  <option value="Truyện ngắn nước ngoài">Truyện ngắn nước ngoài</option>
  <option value="Truyện ngắn VN">Truyện ngắn VN</option>
  <option value="Tiểu thuyết">Tiểu thuyết</option>
  <option value="Sách tổng hợp">Sách tổng hợp</option>

</select>
    </div>

    <div  style={{display:'flex',justifyContent:'center'}} >
    <p>{loading}</p>
    </div>
    </div>
    
    
       <div className="actions">
      
         <button  onClick={getDB} className='button btnn'>Thêm</button>
   
     
  
    </div>
    
  </div>

)};
export default Addbook
