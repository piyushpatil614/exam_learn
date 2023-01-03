import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
export default function Update(props) {
  const [title, settitle] = useState('Options')
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj)
  }
  console.log(props.updateData.correct)
  return (
    <>
   <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" name='question'  defaultValue={props.updateData.question}/>
        <Form.Label>option A</Form.Label>
        <Form.Control type="text" placeholder="option A" name='A' defaultValue={props.updateData.optionA}/>
        <Form.Label>option B</Form.Label>
        <Form.Control type="text" placeholder="option B" name='B' defaultValue={props.updateData.optionB}/>
        <Form.Label>option C</Form.Label>
        <Form.Control type="text" placeholder="option C" name='C' defaultValue={props.updateData.optionC}/>
        <Form.Label>option D</Form.Label>
        <Form.Control type="text" placeholder="option D" name='D' defaultValue={props.updateData.optionD}/>
        <Form.Label>Correct Answer</Form.Label>
        <DropdownButton title={title}  name='correct'  onSelect={function(evt){
          settitle(evt)
          console.log(evt)}
          }>
          <DropdownItem eventKey='option A'>A</DropdownItem>
          <DropdownItem eventKey='option B'>B</DropdownItem>
          <DropdownItem eventKey='option C'>C</DropdownItem>
          <DropdownItem eventKey='option D'>D</DropdownItem>
        </DropdownButton>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <div class="text-center">
      <Button  variant="primary" type="submit" >
        Submit
      </Button>
      </div>
    </Form></>
  )
}
