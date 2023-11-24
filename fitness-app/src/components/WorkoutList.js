// WorkoutList.js
import React from 'react';
import WorkoutCard from './WorkoutCard'; // Adjust the path based on your project structure

const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  console.log("Workouts in WorkoutList:", workouts);

  return (
    <div>
      <h2>Workout List</h2>
      {workouts.length === 0 ? (
        <p>No workouts available.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              exercise={workout.exercise}
              duration={workout.duration}
              date={workout.date}
              notes={workout.notes}
              id={workout.id}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;
