import ManagementTab from "./ManagementTab.jsx";
import CourseCard from "./CourseCard.jsx";
import Form from "react-bootstrap/Form";
import mockedCoursesList from "./mockedCoursesList.js";
import mockedAuthorsList from "./mockedAuthorsList.js";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function CreateCourse() {
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const [newAuthorName, saveNewAuthorName] = useState("");
  const [selectedAuthorIds, setSelectedAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  function handleNewAuthorNameInput(e) {
    console.log("handleNewAuthorNameInput", e.target.value);
    saveNewAuthorName(e.target.value);
  }

  function handleSaveAuthor(e) {
    console.log("handleSaveAuthor", e.target.value);
    setAuthors((authors) => [
      ...authors,
      { id: uuidv4(), name: newAuthorName },
    ]);
  }

  function handleCheckbox(event) {
    console.log();
    console.log(event.target.name);
    if (event.target.checked) {
      setSelectedAuthors((selectedAuthorIds) => [
        ...selectedAuthorIds,
        event.target.name,
      ]);
    } else {
      setSelectedAuthors(
        selectedAuthorIds.filter((item) => item !== event.target.name)
      );
    }
    console.log("selectedAuthorIds", selectedAuthorIds);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Create course</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>Title: </b>
            </Form.Label>
            <Form.Control
              placeholder="Enter title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <b>Description: </b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div>
            <p>
              {" "}
              <b>Authors: </b>
              {selectedAuthorIds
                .map(
                  (authorId) =>
                    authors.find((mockedAuthor) => {
                      return mockedAuthor.id === authorId;
                    }).name
                )
                .join(", ")}
            </p>
          </div>
          <div>
            {authors.map((author) => (
              <Form.Check
                id={author.id}
                name={author.id}
                type={"checkbox"}
                key={author.id}
                label={author.name}
                onChange={handleCheckbox}
              />
            ))}
          </div>
          <InputGroup className=" mb-3">
            <FormControl
              placeholder={"Create author..."}
              aria-describedby="basic-addon2"
              onChange={handleNewAuthorNameInput}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleSaveAuthor}
            >
              Create author
            </Button>
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>Duration: </b>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter duration in minutes ..."
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="outline-success">Save</Button>
        <Button variant="outline-warning">Cancel</Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCourse;
