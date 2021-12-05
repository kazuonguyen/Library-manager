import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.css'
import styled from '../components/inpuat.css'
import Popup from 'reactjs-popup';
import Addbook from '../components/addbook';
import Deletebook from '../components/deletelebook';
function Home({props}) {


  const [data,setData] = useState([])
  const [isLoaded, setisLoaded] = useState(false);
  const [req, setReq] = useState(props);
  useEffect(()=>{
    console.log(req);
    if(req==null){
    axios.get('http://localhost:5000/api/getbooks').then(result=>{
      let a = result.data;
      setData(a);
      setisLoaded(true);
    })
  }
  else{
    let aa=req;
    axios.post('http://localhost:5000/api/category',{category: aa}).then(result=>{
      let a = result.data;
      setData(a);
      setisLoaded(true);
    })
  }
  })
  function renderBookData(){
    return data.map((data, index) => {
      const { _id, url, title } = data
      return (
      <Popup key={_id.toString()} trigger={        <div  className="gallery">

        <img src={url} alt="Forest" width="600" height="400"></img>
      <div className="desc">{title}</div>
    
    </div>} modal
    nested
    >
{(close) => <Deletebook  close={close} kk={_id.toString()} tt={title}/>}
      </Popup>
      )
    })
  }
  return (
    <>
    <div style={{width:'100%',textAlign:'center'}}>
      <Popup trigger={      <button className="button btnn">Add</button>}
      modal
      nested
      >
        {close=><Addbook close={close}/>}
      </Popup>
    </div>
    {
      isLoaded?
      
    <div style={{overflow:'auto',backgroundColor:'rgb(3 72 51 / 35%)',margin:'2px',borderRadius:'20px'}} >
{renderBookData()}
  </div>
 : <div style={{textAlign:'center'}}>
   <h1>Loading...</h1>
 </div>
}
    </>
  );
}

export default Home;