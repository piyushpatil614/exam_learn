import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export default function AddForm() {
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj['A']);
  }
  return (
   <>
   <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" />
        <Form.Label>option A</Form.Label>
        <Form.Control type="text" placeholder="option A" name='A' />
        <Form.Label>option B</Form.Label>
        <Form.Control type="text" placeholder="option B" />
        <Form.Label>option C</Form.Label>
        <Form.Control type="text" placeholder="option C" />
        <Form.Label>option D</Form.Label>
        <Form.Control type="text" placeholder="option D" />
        <Form.Label>Correct Answer</Form.Label>
        <DropdownButton title='Options' onSelect={function(evt){console.log(evt)}}>
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
      <Button  variant="primary" type="submit" >
        Submit
      </Button>
    </Form></>
  )
}
