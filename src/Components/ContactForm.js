import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useForm } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbyloaj");


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            name="name"
            id="exampleName"
            placeholder="First Name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleContact">Contact</Label>
          <Input
            type="number"
            name="contact"
            id="exampleContact"
            placeholder="Contact"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email Address"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Course's</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleMessage">Message</Label>
          <Input type="textarea" name="text" id="exampleMessage" />
          <FormText color="muted">Optional</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Attach Files</Label>
          <Input
            type="file"
            name="attachment"
            accept="image/png, image/jpeg"
            id="exampleFile"
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend className="col-form-label col-sm-2">Communication</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> Phone/Whatsapp{" "}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> Email
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Button disabled={state.submitting}>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default ContactForm;
