// EditWorkoutForm.js
import React, { useState } from 'react';

const EditWorkoutForm = ({ workout, onSave, onCancel }) => {
  // State to manage form inputs
  const [editedWorkout, setEditedWorkout] = useState({
    exercise: workout.exercise,
    duration: workout.duration,
    date: workout.date,
    notes: workout.notes,
  });

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSave prop to update the workout
    onSave(editedWorkout);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Workout</h2>
      {/* Exercise Input */}
      <label>
        Exercise:
        <input
          type="text"
          name="exercise"
          value={editedWorkout.exercise}
          onChange={handleInputChange}
        />
      </label>
      {/* Duration Input */}
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={editedWorkout.duration}
          onChange={handleInputChange}
        />
      </label>
      {/* Date Input */}
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={editedWorkout.date}
          onChange={handleInputChange}
        />
      </label>
      {/* Notes Input */}
      <label>
        Notes:
        <textarea
          name="notes"
          value={editedWorkout.notes}
          onChange={handleInputChange}
        />
      </label>
      {/* Save and Cancel Buttons */}
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditWorkoutForm;
