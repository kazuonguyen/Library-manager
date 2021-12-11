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
  const [url,setUrl] = useState('');
  useEffect(()=>{
    setisLoaded(false);
    console.log(props);
    let isMounted = true;       
    if(req==null){
    axios.get('https://server-pnhmanager.herokuapp.com/api/getbooks').then(result=>{
      let a = result.data;
    if(isMounted){  setData(a);
      setisLoaded(true);
    }
    })
  }
  else{
    
    axios.post('https://server-pnhmanager.herokuapp.com/api/category',{category: props}).then(result=>{
      let a = result.data;
      if(isMounted){
      setData(a);
      setisLoaded(true);
      }
    })
  }
  return () => { isMounted = false }; 
  },[props])
  function renderBookData(){
    return data.map((data, index) => {
      const { _id, url, title,category } = data
      return (
      <Popup key={_id.toString()} trigger={        <div  className="gallery">

        <img src={url} alt="Forest" width="600" height="400"></img>
      <div className="desc"><h2>{title}</h2>
      <h4>&bull;{category}</h4>
      </div>
        
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
      <Popup trigger={      <button className="button btnn">Thêm sách</button>}
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