// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Restop({op}) {
//     console.log(op);
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//   return (
//     <div>
//         <p variant="light" onClick={handleShow}>
//          working Hours
//       </p >

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>working Hours</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//            available days: {op?.available_days} <br />
//            available hours: {op?.available_hours} <br />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }

// export default Restop
