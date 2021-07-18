import "./App.css";
import Header from "./Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";
import CreateCourse from "./CreateCourse";

function App() {
  return (
    <div>
      <Header />
      <Courses />
      <CreateCourse />
    </div>
  );
}

export default App;
