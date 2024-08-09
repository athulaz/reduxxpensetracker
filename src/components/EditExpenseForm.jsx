import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense } from '../redux/expenseSlice';
import { toast } from 'react-toastify';

const EditExpenseForm = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const expense = useSelector(state => state.expenses.expenses.find(exp => exp.id === id));

  const [type, setType] = useState(expense?.type || '');
  const [amount, setAmount] = useState(expense?.amount || '');
  const [date, setDate] = useState(expense?.date || '');
  const [description, setDescription] = useState(expense?.description || '');

  useEffect(() => {
    if (expense) {
      setType(expense.type);
      setAmount(expense.amount);
      setDate(expense.date);
      setDescription(expense.description);
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editExpense({ id, updatedExpense: { type, amount, date, description } }));
    toast.success('Expense updated successfully!');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Expense Type" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Update Expense</button>
    </form>
  );
};

export default EditExpenseForm;
