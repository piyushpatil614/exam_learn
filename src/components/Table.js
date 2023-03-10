import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link } from "react-router-dom";
import { IoMdCreate } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillFileAdd } from 'react-icons/ai';
import question from '../data/question.json';
import Modal from 'react-bootstrap/Modal';
import { add, remove, removequestion, addquestion } from '../reduxSlice/quizSlice';
import AddForm from './AddForm';
import Update from './Update';
import Delete from './toast/Delete'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Table = () => {
  // const childSateref=useRef();
  // const getAddFormState=()=>{
  //   const addFormState=childSateref.current.
  // }

  const quiz = useSelector((state) => state.quiz.value)
  const quizData = useSelector((state) => state.quiz.quizData)
  const dispatch = useDispatch()



  const [questionData, setquestionData] = useState(question)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateData, setupdateData] = useState(null);


  const [updateShow, setupdateShow] = useState(false)
  const updateClose = () => setupdateShow(false)
  const updateOpen = () => setupdateShow(true)

  const selectClick = (event) => {
    let temp = questionData.find(questionData => questionData.id === parseInt(event.currentTarget.id))

    if (event.currentTarget.checked) {

      dispatch(addquestion(temp))
      dispatch(add(parseInt(event.currentTarget.id)))
    }
    else {

      dispatch(removequestion(temp))
      dispatch(remove(parseInt(event.currentTarget.id)))
    }


  }
  const questionAdd = (temp) => {
    questionData.push(temp)
    setquestionData(questionData)
    handleClose()
    toast.success('Added !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  }

  const questionUpdate = (temp) => {

    let index = questionData.findIndex(questionData => questionData.id === parseInt(temp.id))

    questionData[index].correct = temp.correct
    questionData[index].question = temp.question
    questionData[index].optionA = temp.A
    questionData[index].optionB = temp.B
    questionData[index].optionC = temp.C
    questionData[index].optionD = temp.D
    setquestionData(questionData)
    toast.info('Updated !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });

  }

  const addClicked = (event) => {

    console.log(event.currentTarget.id)
  }


  const updateClicked = (event) => {
    let temp = questionData.find(questionData => questionData.id === parseInt(event.currentTarget.id))
    setupdateShow(true)
    setupdateData(temp)

  }

  const quziStart = (event) => {

  }


  const deleteClicked = (event) => {
    let index = questionData.find(questionData => questionData.id === parseInt(event.currentTarget.id))
    let temp = []
    questionData.forEach(element => {
      if (index.id !== element.id) {
        temp.push(element)
      }
    });


    setquestionData(temp)
    toast.error('Deleted !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  }
  return (
    <div>

      <h1 className="text-center">All Question</h1>
      <div className="container">
        <div className="row justify-content-end">

          <div className="col-2 align-self-end">
           <AiFillFileAdd id="2" size={30} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Questions</Modal.Title>
              </Modal.Header>
              <Modal.Body> <AddForm questionAdd={questionAdd} questionData={questionData} /></Modal.Body>
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
            <th>Select</th>
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
          {questionData.map(questionData => (
            <tr>
              {/* <th scope="row">{question.id}</th> */}
              <td>  <input class="form-check-input" type="checkbox" value="" id={questionData.id} onClick={selectClick}></input></td>
              <td>{questionData.question}</td>
              <td>{questionData.optionA}</td>
              <td>{questionData.optionB}</td>
              <td>{questionData.optionC}</td>
              <td>{questionData.optionD}</td>
              <td>{questionData.correct}</td>
              <td id={questionData.id} onClick={updateClicked}><IoMdCreate size={25} /></td>
              <Modal show={updateShow} onHide={updateClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Questions</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Update updateData={updateData} questionUpdate={questionUpdate} /></Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
              </Modal>
              <td id={questionData.id} onClick={deleteClicked}><RiDeleteBin5Fill size={25} /></td>
              <ToastContainer autoClose={2000} />
            </tr>
          ))}


          <Link to="/quiz" state={{ quizData }} className="btn btn-primary my-3" onClick={quziStart}>Start Quiz</Link>
        </tbody>
      </table>
    </div>
  )
}

export default Table;