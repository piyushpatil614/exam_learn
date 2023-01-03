import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export default function AddForm(props) {

  const [title, settitle] = useState('Options')
  const [correct, setcorrect] = useState(null)
  
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries());
          let temp={
            "id":props.questionData.length,
              "question":formDataObj['question'],
              "optionA":formDataObj['A'],
              "optionB":formDataObj['B'],
              "optionC":formDataObj['C'],
              "optionD":formDataObj['D'],
              "correct":correct
          }
          props.questionAdd(temp)
  }
  return (
   <>
   <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" name='question' />
        <Form.Label>option A</Form.Label>
        <Form.Control type="text" placeholder="option A" name='A' />
        <Form.Label>option B</Form.Label>
        <Form.Control type="text" placeholder="option B" name='B'/>
        <Form.Label>option C</Form.Label>
        <Form.Control type="text" placeholder="option C" name='C'/>
        <Form.Label>option D</Form.Label>
        <Form.Control type="text" placeholder="option D" name='D'/>
        <Form.Label>Correct Answer</Form.Label>
        <DropdownButton title={title} name='correct' onSelect={function(evt){
          settitle(evt)
          setcorrect(evt)}
          }>
          <DropdownItem eventKey='option A' >A</DropdownItem>
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
