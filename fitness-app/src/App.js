// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import WorkoutForm from './Components/WorkoutForm';
import WorkoutList from './Components/WorkoutList';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleEdit = (id) => {
    console.log("Edit workout with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete workout with id:", id);
  };

  useEffect(() => {
    const fetchData = () => {
      console.log("Before fetching data...");
      
      fetch("http://localhost:3001/workouts")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setWorkouts(data);
          console.log("Fetched data:", data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    };
  
    fetchData();
  }, []);
  
  

  console.log("Workouts in App:", workouts);

  return (
    <Router>
      <div>
        {/* Header */}
        {/* Uncomment the following line if you're using NavBar */}
        <header><NavBar /></header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/workout-form"
              element={<WorkoutForm />}
            />
            <Route
              path="/workout-list"
              element={<WorkoutList workouts={workouts} onEdit={handleEdit} onDelete={handleDelete} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>GROUP SEVEN</p>
        </footer>
      </div>
    </Router>
  );
}

// Home component
const Home = () => {
  return <h1>Welcome to Home!</h1>;
};

export default App;
