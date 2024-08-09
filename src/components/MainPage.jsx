import React from 'react';
import ExpenseTable from './ExpenseTable';
import AddExpenseForm from './AddExpenseForm';
import './MainPage.css';  
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  
  return (
    <div className="main-container">
      <h2>Expense Tracker</h2>
    
      <AddExpenseForm />
      <ExpenseTable />
      <button onClick={handleHome}>Back to Home</button>
    </div>
  );
};

export default MainPage;
