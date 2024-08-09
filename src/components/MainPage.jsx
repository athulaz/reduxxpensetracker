import React from 'react';
import ExpenseTable from './ExpenseTable';
import AddExpenseForm from './AddExpenseForm';
import './MainPage.css';  
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
 



  
  return (
    <div className="main-container">
      <h2>Expense Tracker</h2>
    
      <AddExpenseForm />
      <ExpenseTable />
     
    </div>
  );
};

export default MainPage;
