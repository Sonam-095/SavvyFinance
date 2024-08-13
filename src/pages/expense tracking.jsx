import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import "./css/expense.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const ExpenseTracking = () => {

  const[expenses,setexpenses] = useState([]);
  const [expense, setexpense] = useState({
    description: "",
    category: "",
    amount: "",
});

const navigate = useNavigate();

// fetch existing records from backend
useEffect(() => {
  axios.get(`http://localhost:5000/api/expense`)
      .then(response => { setexpenses(response.data); })
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

// handling input
const handleinput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setexpense({
        ...expense,
        [name]:value,
    });

};



// handling from submission
const handlesubmit = async (e) => {
e.preventDefault();
console.log(expense);
try {
    const response = await fetch(`http://localhost:5000/api/expense`, {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(expense),
    });
    if(response.ok){
      const savedExpense = await response.json();
            setexpenses([...expenses, savedExpense]);  
      setexpense({
            description: "",
            category: "",
            amount: "",});
            alert("expense updated")
            navigate("/expense tracking");
        }
    console.log(response); 
} catch (error) {
    console.log(error)
}

};

const deleteexpense = (id) => {
  axios.delete(`http://localhost:5000/api/expense/${id}`)
    .then(() => setexpenses(expenses.filter(expense => expense._id !== id)))
    .catch(error => console.error('Error deleting expense:', error));
};
    return <>
    <Navbar />

    <body className="expense-body">
     
    <div>
      <h2 className="expense-h2">Your expense this month:</h2>
      <form onSubmit={handlesubmit} className="expense-form">
      
      <input 
        name="description" 
        value={expense.description} 
        onChange={handleinput} 
        placeholder="Description" 
        required
      />
            &nbsp;
      <input 
        name="category" 
        value={expense.category} 
        onChange={handleinput} 
        placeholder="Category" 
        required
      />
      &nbsp;
      <input 
        name="amount" 
        value={expense.amount} 
        onChange={handleinput} 
        placeholder="Amount" 
        required
      />
      &nbsp;

<button type="submit" >+ Add expense</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense._id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td><button onClick={() => deleteexpense(expense._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 

    </body>  
    <Footer />
    </>
};