import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "./ManagementTab.css";
const placeholderText = "Enter course name...";

// function handleClick() {
//   console.log("click");
// }

function ManagementTab({ saveInputText, performSearch }) {
  function handleInput(e) {
    console.log("handleInput", e.target.value);
    saveInputText(e.target.value);
  }

  function handleSearch() {
    console.log("handleSearch");
    performSearch();
  }

  return (
    <div className="container">
      <div className="left">
        <InputGroup className=" mb-3">
          <FormControl
            placeholder={placeholderText}
            aria-label={placeholderText}
            aria-describedby="basic-addon2"
            onChange={handleInput}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="right">
        <Button variant="outline-primary" id="button-addon2">
          Add new course
        </Button>
      </div>
    </div>
  );
}
export default ManagementTab;
