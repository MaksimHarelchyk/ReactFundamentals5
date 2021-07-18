import ManagementTab from "./ManagementTab.jsx";
import CourseCard from "./CourseCard.jsx";
import Form from "react-bootstrap/Form";
import mockedCoursesList from "./mockedCoursesList.js";
import mockedAuthorsList from "./mockedAuthorsList.js";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import React, { useState } from "react";

function CreateCourse() {
  const [authors, createAuthor1] = useState(mockedAuthorsList);
  const [newAuthor, saveNewAuthor] = useState("");

  function handleNewAuthorInput(e) {
    console.log("handleNewAuthorInput", e.target.value);
    saveNewAuthor(e.target.value);
  }

  function handleSaveAuthor(e) {
    console.log("handleNewAuthorInput", e.target.value);
    saveNewAuthor(e.target.value);
  }

  function handleCheck(event) {
    console.log(event.target.checked);
  }
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter title..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description..."
          />
        </Form.Group>
        <InputGroup className=" mb-3">
          <FormControl
            placeholder={"Enter author..."}
            aria-describedby="basic-addon2"
            onChange={handleNewAuthorInput}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            // onClick={handleSearch}
          >
            Create author
          </Button>
        </InputGroup>
        <div>
          <Form.Check
            type={"checkbox"}
            label={"author"}
            onChange={handleCheck}
          />
          <Form.Check type={"checkbox"} label={"author"} />
        </div>
      </Form>
    </div>
  );
}

export default CreateCourse;
