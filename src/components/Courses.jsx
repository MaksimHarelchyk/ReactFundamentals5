import ManagementTab from "./ManagementTab.jsx";
import CourseCard from "./CourseCard.jsx";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";

function Courses({ handlePage, mockedCourses, mockedAuthors }) {
  const [textToFind, setTextToFind] = useState("");
  const [courses, setCourses] = useState(mockedCourses);

  const saveInputText = (text) => {
    if (text === "") {
      LoadAllCourses();
    }
    setTextToFind(text);
  };

  const performSearch = () => {
    if (textToFind !== "") {
      let foundCourses = mockedCourses.filter(
        ({ title }) => title.toUpperCase() === textToFind.toUpperCase()
      );
      setCourses(foundCourses);
    }
  };

  function LoadAllCourses() {
    setCourses(mockedCourses);
  }

  const goToNewPage = (page) => {
    handlePage(page);
  };

  return (
    <div>
      <ManagementTab
        saveInputText={saveInputText}
        performSearch={performSearch}
        handlePage={goToNewPage}
      />
      {courses && courses.length !== 0 ? (
        courses.map((value, index) => {
          if (typeof value.authorNames === "undefined") {
            value.authorNames = value.authors.map(
              (authorId) =>
                mockedAuthors.find((mockedAuthor) => {
                  return mockedAuthor.id === authorId;
                }).name
            );
          }
          return <CourseCard key={index} course={value} />;
        })
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>No courses found</Card.Title>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Courses;
