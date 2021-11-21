import './singleitem.css'
import React,{useState} from 'react';
import Modal from 'react-modal';
import {useDispatch,useSelector} from 'react-redux';
import { ReactDOM } from 'react-dom';
import { addToCart } from './../../actions/cartActions';
function Singleitem({item}) {
    const customStyles = {
        content: {
          top: '50%',
          left: '49%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          borderColor:'#a7ade2',
          backgroundColor:'#EFF2FA',
          transform: 'translate(-50%, -50%)',
          width:'500px',
          textAlign:'center',
          padding:'20px',
          borderRadius:"20px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
    }
    const dispatch = useDispatch();
    function handleAddToCart(){
        dispatch(addToCart(item,item.qty));
    }

    Modal.setAppElement('#root');
    return (
        <div className="product" key={item._id}  >

            <img src={item.pic} onClick={openModal}/>
            

            <div className="details">
                <h2>{item.name}</h2> 
                <p>₹{item.price}</p>
                <button className="buton"  type="button" onClick={handleAddToCart}>Add</button>
            </div>
            
            <Modal 
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                
                <h1 style={{padding:'10px'}} >{item.name}</h1>
                <img src={item.pic} 
                    style={{width:"300px",height:"300px"}}
                />  
                <p style={{padding:'10px',fontWeight:500}} > {item.desc} </p>
                <button className="mod-but" onClick={handleAddToCart} >Add</button>
                
            </Modal>
        </div>
    )
}

export default Singleitem;
