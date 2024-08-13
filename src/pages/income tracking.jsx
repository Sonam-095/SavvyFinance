import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import "./css/income.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const IncomeTracking = () => {

  const[incomes,setincomes] = useState([]);
  const [income, setincome] = useState({
    description: "",
    category: "",
    amount: "",
});

const navigate = useNavigate();


// fetch existing records from backend
useEffect(() => {
  axios.get(`http://localhost:5000/api/income`)
      .then(response => { setincomes(response.data); })
      .catch(error => console.error('Error fetching incomes:', error));
  }, []);

// handling input
const handleinput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setincome({
        ...income,
        [name]:value,
    });

};

// handling from submission
const handlesubmit = async (e) => {
e.preventDefault();
console.log(income);
try {
    const response = await fetch(`http://localhost:5000/api/income`, {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(income),
    });
    if(response.ok){
      const savedIncome = await response.json();
            setincomes([...incomes, savedIncome]);  
      setincome({
            description: "",
            category: "",
            amount: "",});
            alert("income updated")
            navigate("/income tracking");
        }
    console.log(response); 
} catch (error) {
    console.log(error)
}

};

const deleteincome = (id) => {
  axios.delete(`http://localhost:5000/api/income/${id}`)
    .then(() => setincomes(incomes.filter(income => income._id !== id)))
    .catch(error => console.error('Error deleting income:', error));
};
    return <>
    <Navbar />

    <body className="income-body">
     
    <div>
      <h2 className="income-h2">Your income this month:</h2>
      <form onSubmit={handlesubmit} className="income-form">
      
      <input 
        name="description" 
        value={income.description} 
        onChange={handleinput} 
        placeholder="Description" 
        required
      />
            &nbsp;
      <input 
        name="category" 
        value={income.category} 
        onChange={handleinput} 
        placeholder="Category" 
        required
      />
      &nbsp;
      <input 
        name="amount" 
        value={income.amount} 
        onChange={handleinput} 
        placeholder="Amount" 
        required
      />
      &nbsp;

<button type="submit" >+ Add income</button>
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
          {incomes.map(income => (
            <tr key={income._id}>
              <td>{income.description}</td>
              <td>{income.category}</td>
              <td>{income.amount}</td>
              <td><button onClick={() => deleteincome(income._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 

    </body>  
    <Footer />
    </>
};