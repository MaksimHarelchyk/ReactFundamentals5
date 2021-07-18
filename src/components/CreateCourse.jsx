import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function CreateCourse({
  handlePage,
  mockedAuthors,
  setMockedAuthors,
  addCourse,
}) {
  const [newAuthorName, saveNewAuthorName] = useState("");
  const [selectedAuthorIds, setSelectedAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  function handleNewAuthorNameInput(e) {
    saveNewAuthorName(e.target.value);
  }

  function handleSaveAuthor(e) {
    setMockedAuthors((authors) => [
      ...authors,
      { id: uuidv4(), name: newAuthorName },
    ]);
  }

  function handleCheckbox(event) {
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
  }

  function saveCourse() {
    console.log(title, description, selectedAuthorIds, duration);
    if (
      !title ||
      !description ||
      !selectedAuthorIds ||
      !duration ||
      selectedAuthorIds.length === 0
    ) {
      alert("Fill neccesary fields");
    } else {
      addCourse({
        id: uuidv4(),
        title: title,
        description: description,
        authors: selectedAuthorIds,
        duration: duration,
        creationDate: new Date().toLocaleDateString("en-US"),
      });
      handlePage("Courses");
    }
  }

  function cancel() {
    handlePage("Courses");
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
                    mockedAuthors.find((mockedAuthor) => {
                      return mockedAuthor.id === authorId;
                    }).name
                )
                .join(", ")}
            </p>
          </div>
          <div>
            {mockedAuthors.map((author) => (
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
        <Button variant="outline-success" onClick={saveCourse}>
          Save
        </Button>
        <Button variant="outline-warning" onClick={cancel}>
          Cancel
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCourse;
