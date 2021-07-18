import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseCard(props) {
  function convertMinutesToHHMM(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + ":" + rminutes;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.course.title}</Card.Title>
        <Card.Text>{props.course.description}</Card.Text>
        <Card.Text>
          <b>Authors:</b> {props.course.authorNames.join(", ")}
        </Card.Text>
        <Card.Text>
          <b>Duration:</b> {convertMinutesToHHMM(props.course.duration)} hours
        </Card.Text>
        <Card.Text>
          <b>Created:</b> {props.course.creationDate}
        </Card.Text>
        <Button variant="outline-primary">Show course</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
