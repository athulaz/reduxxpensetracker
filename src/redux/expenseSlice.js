import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    editExpense: (state, action) => {
      const { id, updatedExpense } = action.payload;
      const index = state.expenses.findIndex(exp => exp.id === id);
      if (index !== -1) {
        state.expenses[index] = { ...state.expenses[index], ...updatedExpense };
      }
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
