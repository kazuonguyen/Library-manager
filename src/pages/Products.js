import React from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import Content from '../components/content';
import '../components/content.css'
function Products() {
  return (
    <div className='products'>
            <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => <Content  close={close} />}
  </Popup> 
    </div>
  );
}

export default Products;