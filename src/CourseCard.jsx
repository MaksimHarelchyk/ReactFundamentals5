import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.course.title}</Card.Title>
        <Card.Text>{props.course.description}</Card.Text>
        <Card.Text>
          <b>Authors:</b> {props.course.authorNames.join(", ")}
        </Card.Text>
        <Card.Text>
          <b>Duration:</b> {props.course.duration} hours
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
