import './singleitem.css'
import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@restart/ui/esm/Button';
function Singleitem({item}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <div className="product" id="app">
            <img src={item.pic} variant="primary" onClick={handleShow}/>
            <div className="details">
                <h2>{item.name}</h2> 
                <p>{item.price}</p>
            </div>
            <Modal 
                show={show} 
                dialogClassName="modal-60w"
                full-screen="sm-down"
                onHide={handleClose}
            
            >
                <Modal.Header closeButton>
                <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body> 
                    <img src={item.pic} />
                    <p> {item.desc}</p> 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
    
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Singleitem
