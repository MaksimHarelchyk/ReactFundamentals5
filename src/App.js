import "./App.css";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/Courses";
import CreateCourse from "./components/CreateCourse";
import mockedCoursesList from "./mockedCoursesList.js";
import mockedAuthorsList from "./mockedAuthorsList.js";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("Courses");

  const [mockedCourses, setMockedCourses] = useState(mockedCoursesList);
  const [mockedAuthors, setMockedAuthors] = useState(mockedAuthorsList);

  const goToNewPage = (newPage) => {
    setPage(newPage);
    console.log(page);
  };

  const addCourse = (course) => {
    setMockedCourses((mockedCourses) => [...mockedCourses, course]);
  };

  return (
    <div>
      <Header />
      {page === "Courses" ? (
        <Courses
          handlePage={goToNewPage}
          mockedCourses={mockedCourses}
          mockedAuthors={mockedAuthors}
        />
      ) : (
        <CreateCourse
          handlePage={goToNewPage}
          mockedAuthors={mockedAuthors}
          setMockedAuthors={setMockedAuthors}
          addCourse={addCourse}
        />
      )}
    </div>
  );
}

export default App;
