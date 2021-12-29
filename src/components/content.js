import React, {  useState } from "react";
import './content.css'
import axios from 'axios'
const Content = ({ close }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail]  = useState('');
  const [phone, setPhone] = useState('');
  const  nameChange= (e)=>{
      setName(e.target.value);
  }
  const ageChange =  (e) =>{
    setAge(e.target.value);
  }
  const emailChange = (e)=>{
    setEmail(e.target.value)
  }
  const phoneChange = (e)=>{
    setPhone(e.target.value)
  }
  const [loading, setLoading] = useState('')
  function convertDay(a){
    let  tm=0;
     let day='',month='',year='';
      for(let i=0;i<=a.length-1;i++){
        if(a[i]!='-'){
          if(tm==0)  month+=a[i];
          else if(tm==1) day+=a[i];
          else if(tm==2) year+=a[i];
        }
        else tm++;
      }
      return day+'-'+month+'-'+year;
    }
  const getDB = ()=>{
    let a=name;
    let b = age;
    let c = email;
    let d = phone;
    setLoading("Getting data")
    axios.post("https://server-manager456.herokuapp.com/api/user", {name: a , age: b, email:convertDay(c),phone:d}).then((result)=>{
      console.log(result.data);
      window.location.reload();
    })
  }
  return(
    <div className="modal" >
    <button className="close" onClick={close}>
      &times;
    </button>
  
  
  <div className="header"> Thêm người mượn </div>
  
    <div className="content" >
     <h1 style={{display:'flex',justifyContent:'center'}}>Thông tin người mượn</h1>
    <div  style={{display:'flex',justifyContent:'center'}} >
       <input value={name} onChange={nameChange} placeholder='username'></input>
       </div>
    
    <div  style={{display:'flex',justifyContent:'center'}} >
     <input value={age} onChange={ageChange}  placeholder='book(s)'></input>
    </div>
    <div  style={{display:'flex',justifyContent:'center'}} >
     <input  value={email} onChange={emailChange} placeholder='date'></input>
    </div>
    <div  style={{display:'flex',justifyContent:'center'}} >
     <input  value={phone} onChange={phoneChange} placeholder='phone'></input>
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
export default Content