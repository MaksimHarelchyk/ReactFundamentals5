import ManagementTab from "./ManagementTab.jsx";
import CourseCard from "./CourseCard.jsx";
import mockedCoursesList from "./mockedCoursesList.js";
import mockedAuthorsList from "./mockedAuthorsList.js";
import React, { useState } from "react";

function Courses() {
  const [textToFind, setTextToFind] = useState("");
  const [courses, setCourses] = useState(mockedCoursesList);

  const saveInputText = (text) => {
    console.log("saveInputText");
    console.log(text);
    if (text === "") {
      LoadAllCourses();
    }
    setTextToFind(text);
  };

  const performSearch = () => {
    console.log("performSearch with");
    console.log(textToFind);
    if (textToFind !== "") {
      let foundCourses = mockedCoursesList.filter(
        ({ title }) => title.toUpperCase() === textToFind.toUpperCase()
      );
      console.log("found", foundCourses);
      setCourses(foundCourses);
    }
  };

  function LoadAllCourses() {
    console.log("LoadAllCourses");
    setCourses(mockedCoursesList);
  }

  return (
    <div>
      <ManagementTab
        saveInputText={saveInputText}
        performSearch={performSearch}
      />
      {courses && courses.length !== 0 ? (
        courses.map((value, index) => {
          if (typeof value.authorNames === "undefined") {
            value.authorNames = value.authors.map(
              (authorId) =>
                mockedAuthorsList.find((mockedAuthor) => {
                  return mockedAuthor.id === authorId;
                }).name
            );
          }
          return <CourseCard key={index} course={value} />;
        })
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
}

export default Courses;
