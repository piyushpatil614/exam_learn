import React,{useRef, useState} from 'react';
import {FaRocket} from 'react-icons/fa';
import {IoMdCreate} from 'react-icons/io';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import{AiFillFileAdd} from 'react-icons/ai';
import question from '../data/question.json';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import AddForm from './AddForm';
import Update from './Update';



 const Table=()=> {
  // const childSateref=useRef();
  // const getAddFormState=()=>{
  //   const addFormState=childSateref.current.
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateData, setupdateData] = useState(null);


  const [updateShow, setupdateShow] = useState(false)
  const updateClose=()=>setupdateShow(false)
  const updateOpen=()=>setupdateShow(true) 
    // question.push(temp)
    // console.log(question) 

  const questionAdd=(temp)=>{
    question.push(temp)
      handleClose()
  }

    const addClicked=(event)=>{
    
        console.log(event.currentTarget.id)
    }
    const updateClicked=(event)=>{
      let temp=question.find(question=>question.id===parseInt(event.currentTarget.id))
      setupdateShow(true)
      setupdateData(temp)
        console.log(temp)
    }
    const deleteClicked=(event)=>{
      let index=question.findIndex(question=>question.id===2)
      delete question[index]
      console.log(question)
        console.log(event.currentTarget.id)
        
    }
  return (
    <div>
        
        <h1 className="text-center">All Question</h1>
        <div className="container">
            <div className="row justify-content-end">
                
                <div className="col-2 align-self-end">
                    <AiFillFileAdd id="2"  size={30} onClick={handleShow}/>   
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body> <AddForm questionAdd={questionAdd} question={question} /></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>                          
                </div>
            </div>
        </div>
        
      <table class="table table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Question</th>
      <th scope="col">Option A</th>
      <th scope="col">Option B</th>
      <th scope="col">Option C</th>
      <th scope="col">Option D</th>
      <th scope="col">Correct Option</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody>
    {question.map(question=>(
        <tr>
        {/* <th scope="row">{question.id}</th> */}
        <td>{question.question}</td>
        <td>{question.optionA}</td>
        <td>{question.optionB}</td>
        <td>{question.optionC}</td>
        <td>{question.optionD}</td>
        <td>{question.correct}</td>
        <td id={question.id} onClick={updateClicked}><IoMdCreate size={25}/></td>
        <Modal show={updateShow} onHide={updateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Update updateData={updateData}/></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
        <td id={question.id} onClick={deleteClicked}><RiDeleteBin5Fill size={25}/></td>
      </tr>
    ))}
    
    
    
  </tbody>
</table>
    </div>
  )
}

export default Table;