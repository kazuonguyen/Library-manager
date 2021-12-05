import React,{Component, useEffect} from "react";
import Content from "./content";
import Popup from "reactjs-popup";
import axios from "axios";
import Delete from "./delete";
import styled from  './inpuat.css'


function Borrowbooks(props){
  useEffect(()=>{
    console.log("successed")
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
   getData(){
      axios.get('https://server-pnhmanager.herokuapp.com/api/helloworld').then(result=>{
         let a = result.data;
          a = a.map(item=>{
            return{
              id: item._id.toString(),
              name: item.name,
              age: item.age,
              email: item.email

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
      const { id, name, age, email } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = ["id","name","age","email"]
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
      <div> 
        {this.state.isLoaded? <table id='students'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table> : <h1 style={{display:"flex", justifyContent:"center"}}>Loading...</h1> }
        
        </div>
    )
  }
}


    return (
        
        <div style={{width:'100%', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{height:'auto',width:'75%', minWidth:'400px', backgroundColor:'white', paddingTop:'25px', borderRadius:'30px'}}>
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