import React ,{useState}from 'react'

export default function Quiz() {
  const [optionA, setoptionA] = useState(false)
  const [optionB, setoptionB] = useState(false)
  const [optionC, setoptionC] = useState(false)
  const [optionD, setoptionD] = useState(false)
  const mouseIn=(event)=>{
    if(event.currentTarget.id==="optionA")
    {
      if(!optionA)
      event.currentTarget.style.backgroundColor="rgb(8,169,245)"
    } 
    if(event.currentTarget.id==="optionB")
    {
      if(!optionB)
      event.currentTarget.style.backgroundColor="rgb(8,169,245)"
    } 
    if(event.currentTarget.id==="optionC")
    {
      if(!optionC)
      event.currentTarget.style.backgroundColor="rgb(8,169,245)"
    } 
    if(event.currentTarget.id==="optionD")
    {
      if(!optionD)
      event.currentTarget.style.backgroundColor="rgb(8,169,245)"
    } 
    
  }
  const click=(event)=>{
    if(event.currentTarget.id==="optionA")
    {
      if(!optionA)
      {
        setoptionA(true)
        event.currentTarget.style.backgroundColor="green"
      }
      else
      {
        setoptionA(false)
      }
    }
    
    if(event.currentTarget.id==="optionB")
    {
      if(!optionB)
      {
        setoptionB(true)
        event.currentTarget.style.backgroundColor="green"
      }
      else
      {
        setoptionB(false)
      }
    }

    if(event.currentTarget.id==="optionC")
    {
      if(!optionC)
      {
        setoptionC(true)
        event.currentTarget.style.backgroundColor="green"
      }
      else
      {
        setoptionC(false)
      }
    }

    if(event.currentTarget.id==="optionD")
    {
      if(!optionD)
      {
        setoptionD(true)
        event.currentTarget.style.backgroundColor="green"
      }
      else
      {
        setoptionD(false)
      }
    }
    
  }
  const mouseOut=(event)=>{
    if(event.currentTarget.id==="optionA")
    {
      if(!optionA)
      event.currentTarget.style.backgroundColor="white"
    }

    if(event.currentTarget.id==="optionB")
    {
      if(!optionB)
      event.currentTarget.style.backgroundColor="white"
    }
    
    if(event.currentTarget.id==="optionC")
    {
      if(!optionC)
      event.currentTarget.style.backgroundColor="white"
    }

    if(event.currentTarget.id==="optionD")
    {
      if(!optionD)
      event.currentTarget.style.backgroundColor="white"
    }

  }
  return (
    <>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 align-self-center">
        <div className="card">
  <div className="card-header">
   <h4>Featured</h4> 
  </div>
  <div className="card-body my-2">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionA" onClick={click}>Option 1</div>
    <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionB" onClick={click}>Option 2</div>
    <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionC" onClick={click}>Option 3</div>
    <div className="card-body border rounded my-2" onMouseEnter={mouseIn} onMouseOut={mouseOut} id="optionD" onClick={click}>Option 4</div>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
      </div>
    </div>


    </>
  )
}
