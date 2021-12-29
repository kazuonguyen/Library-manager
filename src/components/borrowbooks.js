import React,{Component, useEffect} from "react";
import Content from "./content";
import Popup from "reactjs-popup";
import axios from "axios";
import Delete from "./delete";
import styled from  './inpuat.css'


function Borrowbooks({props}){
  useEffect(()=>{
    console.log(props)
  })
class Tables extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
      students: [
      
      ],
      isLoaded: false,
      count:0,
      priviuos: []
    }
    this.getData = this.getData.bind(this);
  }
   convertDay(a){
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
   getData(){
      axios.get('https://server-manager456.herokuapp.com/api/helloworld').then(result=>{
         let a = result.data;
          a = a.map(item=>{
            return{
              id: item._id.toString(),
              name: item.name,
              age: item.age,
              email: this.convertDay(item.email),
              phone: item.phone
            }
          })
          if(this._isMounted){
        this.setState({students:a, isLoaded:true, count:1,priviuos: this.state.students})
          }
   
        })
       
      }
      componentDidMount(){
        this._isMounted=true;
        this.getData();
        

        console.log(this.state.priviuos)
      }
   
  componentWillUnmount() {
    this._isMounted = false;
  }

  
      
      renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email,phone } = student
      return (
        <tr style={{userSelect:'text'}}  key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = ["id","Tên","Sách","Ngày mượn","SĐT"]
    return header.map((key, index) => <th   key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
      <div> 
        {this.state.isLoaded? <table id='students'>
          <tbody>
            <tr >{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table> : <h1 style={{display:"flex", justifyContent:"center"}}>Loading...</h1> }
        
        </div>
    )
  }
}


    return (
        
        <div style={{width:'100%', display:'flex',alignItems:'center',justifyContent:'center',maxHeight:'100%'}}>
            <div style={{width:'75%', minWidth:'400px', backgroundColor:'white', paddingTop:'25px', borderRadius:'30px',boxShadow: '5px 10px 8px #888888',position: 'relative',
height: 'fit-content',overflow: 'auto',maxHeight:'100%'}}>
        <h3 style={{display:'flex', justifyContent:'center'}}>Số người mượn sách:</h3>
        <Tables></Tables>
        <div style={{display:'flex',justifyContent:'center'}}  >
        <Popup 
    trigger={<button className={'button'+' '+ 'btnn'}> Thêm người mượn </button>}
    modal
    nested
  >
    {close => <Content  close={close} />}
  </Popup> 
  <Popup 
    trigger={<button className="button btnn"> Xóa người mượn </button>}
    modal
    nested
  >
    {close => <Delete  close={close} />}
  </Popup> 
  </div>
        </div>
        </div>
    )
}
export default Borrowbooks