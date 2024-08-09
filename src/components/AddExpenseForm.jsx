import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';
import { toast } from 'react-toastify';

const AddExpenseForm = () => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({
      id: Date.now(),
      type,
      amount,
      date,
      description
    }));
    toast.success('Expense added successfully!');
    setType('');
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
