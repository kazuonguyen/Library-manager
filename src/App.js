import React, {  useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Sidebar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Borrowbooks from './components/borrowbooks';
import '../src/components/table.css'
import Noti from './components/noti';
  // function test(){
  //   return(
  //     <h1>Hello</h1>
  //   )
  // }
function testLocal(){
  localStorage.setItem('rememberMe', '1223');
}
function App() {
 const [key,setKey]=useState('');
 const [username,setUsername] = useState('');
 const [pass, setPass] = useState('');
  useEffect(()=>{
    const rememberMe = localStorage.getItem('rememberMe')
    console.log(rememberMe);
    setKey(rememberMe);

  })
  const  funsetPass = (e)=>{
    setPass(e.target.value);
  }
  const funsetUser = (e)=>{
    setUsername(e.target.value);
  }
  const submitForm = ()=>{
    if(username==="hungtvt2222@gmail.com"&&pass==="22445588"){
      testLocal();
      const rememberMe = localStorage.getItem('rememberMe')
      setKey(rememberMe);

    }
  }
  return (
   <>
      {key=="1223"?  <Router>
  <Navbar ></Navbar>
  <div className='nd'  style={{height:'85%', display:'flex',flexDirection:'column-reverse',justifyContent:'center'}}>
      <Routes >
   
      <Route exact path='/'    element={<Home/>}/>

          <Route path='/products' element={<Borrowbooks/>}/> 
         <Route path='/reports' element={<Noti/>}/> 
         </Routes>

         </div>

  </Router>:  <div style={{height:'100%',display:'flex', flexDirection:'column-reverse',justifyContent:'center'}} > <form style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>

<div style={{width:'500px',backgroundColor:'white',padding:'5px',borderRadius:'25px '}}>
                <h3 style={{textAlign:'center'}}>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={funsetUser} value={username} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={funsetPass} value={pass} type="password" className="form-control" placeholder="Enter password" />
                </div>

               

                <button style={{width:'50%',margin:'0 25% 0 25%'}} type="submit" onClick={submitForm} className="btn btn-primary ">Submit</button>
         
         </div>
            </form>
            </div>    }
 
</>  );
}

export default App;
