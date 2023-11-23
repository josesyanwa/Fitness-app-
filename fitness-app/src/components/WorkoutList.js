import React from 'react';
import WorkOutCard from './WorkOutCard';

// Workout List Component
const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workouts.map((workout) => (
          <WorkOutCard
            key={workout.id}
            workout={workout}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
