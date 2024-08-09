import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/expenseSlice';
import EditExpenseForm from './EditExpenseForm';
import { toast } from 'react-toastify';

const ExpenseTable = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
    toast.error('Expense deleted successfully!');
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
         
            <th>Amount</th>
            <th>Date </th>
            <th>Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
    
              <td>{expense.amount}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.description}
              </td>
              <button className='btn' onClick={() => handleEdit(expense.id)} >
                            <i className="fa-regular fa-pen-to-square fa-xl"  style={{color: "#74C0FC",}} />
                          </button>
                        
                          <button className='btn' onClick={() => handleDelete(expense.id)} >
                            <i className="fa-solid fa-trash fa-xl" style={{ color: "#fe0134", }} />
                          </button>     
            </tr>
            

            
          ))}
        </tbody>
      </table>

      {editingId && (
        <EditExpenseForm
          id={editingId}
          onClose={() => setEditingId(null)}
        />
      )}
    </div>
  );
};

export default ExpenseTable;
