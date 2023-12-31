import React from "react";
import { Card, Button } from 'react-bootstrap';

function WorkoutCard({
  workout,
  handleDelete,
  isModalOpenned,
  setIsModalOpenned,
  setWorkoutId,
}) {
  // Check if workout exists
  if (!workout) {
    return null; // or some default content, or an empty card
  }

  const handleClick = () => {
    setWorkoutId(workout?.id);
    setIsModalOpenned(!isModalOpenned);
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{workout.exercise || "No Exercise"}</Card.Title>
        <Card.Text>
          <strong>Duration:</strong> {workout.duration} minutes
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {workout.date}
        </Card.Text>
        <Card.Text>
          <strong>Notes:</strong> {workout.notes}
        </Card.Text>
        <Button
          id={workout?.id}
          onClick={handleClick}
          variant="warning"
          style={{ marginLeft: "30px" }}
        >
          Edit
        </Button>
        <Button
          id={workout?.id}
          onClick={() => handleDelete(workout?.id)}
          variant="danger"
          style={{ marginLeft: "60px" }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
