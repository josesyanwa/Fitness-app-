
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';


function App() {
const [workouts, setWorkouts] = useState([]);

const handleEdit = (id) => {
    console.log("Edit workout with id:", id);
};


  const handleDelete = (id) => {
    console.log("Delete workout with id:", id);
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:3001/workouts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      setWorkouts(data);
      console.log(data); // Log the fetched data, as this will reflect the updated state
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  fetchData();
}, []);

  useEffect (() => {
     const fetchWorkouts = async () => {
      try {
        let data = await fetch("http://localhost:3001/workouts").then((response) =>
          response.json()
        );

        setWorkouts(data);
        console.log(data); // Log fetched data
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts(); // Call the async function

  }, []);
     
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout-form" element={<WorkoutForm />} />
            <Route path="/workout-list" element={<WorkoutList
            workouts = {workouts}
            onEdit={handleEdit}
            onDelete={handleDelete} />} />
          </Routes>
        </main>
        <footer>
          <p>GROUP SEVEN</p>
        </footer>
      </div>
    </Router>
  );
}
//home component
const Home = () => {
  return <h1>Welcome to Home!</h1>;
};

export default App;

