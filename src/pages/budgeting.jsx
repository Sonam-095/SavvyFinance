import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import "./css/budget.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Budgeting = () => {

  const[budgets,setbudgets] = useState([]);
  const [budget, setbudget] = useState({
    description: "",
    budget: "",
    spent: "",
});

const navigate = useNavigate();


// fetch existing records from backend
useEffect(() => {
  axios.get('http://localhost:5000/api/budget')
      .then(response => { setbudgets(response.data); })
      .catch(error => console.error('Error fetching budgets:', error));
  }, []);

// handling input
const handleinput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setbudget({
        ...budget,
        [name]:value,
    });

};

// handling from submission
const handlesubmit = async (e) => {
e.preventDefault();
console.log(budget);
try {
    const response = await fetch(`http://localhost:5000/api/budget`, {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(budget),
    });
    if(response.ok){
      const savedBudget = await response.json();
            setbudgets([...budgets, savedBudget]);  
      setbudget({
            description: "",
            budget: "",
            spent: "",});
            alert("budget updated")
            navigate("/budgeting");
        }
    console.log(response); 
} catch (error) {
    console.log(error)
}

};

const deletebudget = (id) => {
  axios.delete(`http://localhost:5000/api/budget/${id}`)
    .then(() => setbudgets(budgets.filter(budget => budget._id !== id)))
    .catch(error => console.error('Error deleting budget:', error));
};
    return <>
    <Navbar />

    <body className="budget-body">
     
    <div>
      <h2 className="budget-h2">Your budget this month:</h2>
      <form onSubmit={handlesubmit} className="budget-form">
      
      <input 
        name="description" 
        value={budget.description} 
        onChange={handleinput} 
        placeholder="Description" 
        required
      />
            &nbsp;
      <input 
        name="budget" 
        value={budget.budget} 
        onChange={handleinput} 
        placeholder="Budget" 
        required
      />
      &nbsp;
      <input 
        name="spent" 
        value={budget.spent} 
        onChange={handleinput} 
        placeholder="Spent" 
        required
      />
      &nbsp;

<button type="submit" >+ Add budget</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Budget</th>
            <th>Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => (
            <tr key={budget._id}>
              <td>{budget.description}</td>
              <td>{budget.budget}</td>
              <td>{budget.spent}</td>
              <td><button onClick={() => deletebudget(budget._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 

    </body>  
    <Footer />
    </>
};