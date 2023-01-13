import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add,remove,removequestion,addquestion } from '../reduxSlice/quizSlice';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Quiz() {
  const location = useLocation();
  const data = location.state;
  const quizData=useSelector((state) => state.quiz.quizData)
  const [index, setindex] = useState(0)
  const navigate = useNavigate();

  const [optionA, setoptionA] = useState(false)
  const [optionB, setoptionB] = useState(false)
  const [optionC, setoptionC] = useState(false)
  const [optionD, setoptionD] = useState(false)
  const [prv, setprv] = useState(true)
  const [nex, setnex] = useState(false)
  const previous=()=>{
    setoptionA(false)
    setoptionB(false)
    setoptionC(false)
    setoptionD(false)
    document.getElementById("optionA").style.backgroundColor="white"
    document.getElementById("optionB").style.backgroundColor="white"
    document.getElementById("optionC").style.backgroundColor="white"
    document.getElementById("optionD").style.backgroundColor="white"

    if(index==(quizData.length-1))
    {
      setnex(false)
    }
    if(index==1)
    {
      setprv(true)
    }
    setindex(index-1)
  }

  const next=()=>{
    setoptionA(false)
    setoptionB(false)
    setoptionC(false)
    setoptionD(false)
    document.getElementById("optionA").style.backgroundColor="white"
    document.getElementById("optionB").style.backgroundColor="white"
    document.getElementById("optionC").style.backgroundColor="white"
    document.getElementById("optionD").style.backgroundColor="white"
    
    if(index==0)
    {
      setprv(false)
    }
    if(index==(quizData.length-2))
    {
      setnex(true)
    }
    setindex(index+1)
  }

  const mouseIn = (event) => {
    if (event.currentTarget.id === "optionA") {
      if (!optionA)
        event.currentTarget.style.backgroundColor = "rgb(8,169,245)"
    }
    if (event.currentTarget.id === "optionB") {
      if (!optionB)
        event.currentTarget.style.backgroundColor = "rgb(8,169,245)"
    }
    if (event.currentTarget.id === "optionC") {
      if (!optionC)
        event.currentTarget.style.backgroundColor = "rgb(8,169,245)"
    }
    if (event.currentTarget.id === "optionD") {
      if (!optionD)
        event.currentTarget.style.backgroundColor = "rgb(8,169,245)"
    }

  }
  const click = (event) => {
    if (event.currentTarget.id === "optionA") {
      if (!optionA) {
        setoptionA(true)
        event.currentTarget.style.backgroundColor = "green"
      }
      else {
        setoptionA(false)
      }
    }

    if (event.currentTarget.id === "optionB") {
      if (!optionB) {
        setoptionB(true)
        event.currentTarget.style.backgroundColor = "green"
      }
      else {
        setoptionB(false)
      }
    }

    if (event.currentTarget.id === "optionC") {
      if (!optionC) {
        setoptionC(true)
        event.currentTarget.style.backgroundColor = "green"
      }
      else {
        setoptionC(false)
      }
    }

    if (event.currentTarget.id === "optionD") {
      if (!optionD) {
        setoptionD(true)
        event.currentTarget.style.backgroundColor = "green"
      }
      else {
        setoptionD(false)
      }
    }

  }

  const endQuiz=()=>{
    setTimeout(() => {
      navigate("/")  
    }, 2000);
    toast.success('Quiz submitted !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  }

  const mouseOut = (event) => {
    if (event.currentTarget.id === "optionA") {
      if (!optionA)
        event.currentTarget.style.backgroundColor = "white"
    }

    if (event.currentTarget.id === "optionB") {
      if (!optionB)
        event.currentTarget.style.backgroundColor = "white"
    }

    if (event.currentTarget.id === "optionC") {
      if (!optionC)
        event.currentTarget.style.backgroundColor = "white"
    }

    if (event.currentTarget.id === "optionD") {
      if (!optionD)
        event.currentTarget.style.backgroundColor = "white"
    }

  }
  return (
    <>

    <div className="container">
      <div className="row justify-content-end">
        <div className="col-3 align-self-end">
        <button className="btn btn-primary mx-3" onClick={endQuiz}>End Quiz</button>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10 align-self-center">
            <div className="card">
              <div className="card-header">
                <h4>Featured</h4>
              </div>
              <div className="card-body my-2">
                <h5 className="card-title">Question {index+1}</h5>
                <p className="card-text">{quizData[index].question}</p>
                <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionA" onClick={click}>{quizData[index].optionA}</div>
                <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionB" onClick={click}>{quizData[index].optionB}</div>
                <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionC" onClick={click}>{quizData[index].optionC}</div>
                <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionD" onClick={click}>{quizData[index].optionD}</div>
                <button className="btn btn-primary mx-3"  onClick={previous} disabled={prv}>Previous</button>
                <button className="btn btn-primary mx-3"  onClick={next} disabled={nex}>Next</button>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}
