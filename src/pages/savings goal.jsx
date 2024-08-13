import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import "./css/saving.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const SavingsGoal = () => {

  const[savings,setsavings] = useState([]);
  const [saving, setsaving] = useState({
    description: "",
    saved: "",
    target: "",
});

const navigate = useNavigate();


// fetch existing records from backend
useEffect(() => {
  axios.get(`http://localhost:5000/api/savings`)
      .then(response => { setsavings(response.data); })
      .catch(error => console.error('Error fetching savings:', error));
  }, []);

// handling input
const handleinput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setsaving({
        ...saving,
        [name]:value,
    });

};

// handling from submission
const handlesubmit = async (e) => {
e.preventDefault();
console.log(saving);
try {
    const response = await fetch(`http://localhost:5000/api/savings`, {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(saving),
    });
    if(response.ok){
      const savedSaving = await response.json();
            setsavings([...savings, savedSaving]);  
      setsaving({
            description: "",
            saved: "",
            target: "",});
            alert("savings updated")
            navigate("/savings goal");
        }
    console.log(response); 
} catch (error) {
    console.log(error)
}

};

const deletesaving = (id) => {
  axios.delete(`http://localhost:5000/api/savings/${id}`)
    .then(() => setsavings(savings.filter(saving => saving._id !== id)))
    .catch(error => console.error('Error deleting saving:', error));
};
    return <>
    <Navbar />

    <body className="saving-body">
     
    <div>
      <h2 className="saving-h2">Your savings this month:</h2>
      <form onSubmit={handlesubmit} className="saving-form">
      
      <input 
        name="description" 
        value={saving.description} 
        onChange={handleinput} 
        placeholder="Description" 
        required
      />
            &nbsp;
      <input 
        name="saved" 
        value={saving.saved} 
        onChange={handleinput} 
        placeholder="Saved" 
        required
      />
      &nbsp;
      <input 
        name="target" 
        value={saving.target} 
        onChange={handleinput} 
        placeholder="Target" 
        required
      />
      &nbsp;

<button type="submit" >+ Add saving</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Saved</th>
            <th>Target</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savings.map(saving => (
            <tr key={saving._id}>
              <td>{saving.description}</td>
              <td>{saving.saved}</td>
              <td>{saving.target}</td>
              <td><button onClick={() => deletesaving(saving._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 

    </body>  
    <Footer />
    </>
};