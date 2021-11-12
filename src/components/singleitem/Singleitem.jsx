import './singleitem.css'
import React,{useState} from 'react';
import Modal from 'react-modal';

function Singleitem({item}) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          borderColor:'#a7ade2',
          backgroundColor:'#E4E5FD',
          transform: 'translate(-50%, -50%)',
          width:'600px',
          textAlign:'center',
          padding:'20px',
          
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
      }

    Modal.setAppElement('#root');
    return (
        <div className="product">

            <img src={item.pic}  onClick={openModal}/>
            

            <div className="details">
                <h2>{item.name}</h2> 
                <p>{item.price}</p>
                <button className="buton">Add</button>
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
                <button className="mod-but" >Add</button>

            </Modal>
        </div>
    )
}

export default Singleitem;
