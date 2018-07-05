import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createAt = 0 } = {}) => ({
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createAt
            }
        });

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense=(id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(text='') => ({
    type:'SET_TEXT_FILTER',
    text
});

const sortByDate=() => ({
    type:'SORT_BY_DATE'
});

const sortByAmount=() => ({
    type:'SORT_BY_AMOUNT'
});

const setStartDate =(startDate) =>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate =(endDate) =>({
    type:'SET_END_DATE',
    endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
        return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                            ...expense,
                            ...action.updates
                    };
                }else{
                    return expense;
                };
        });
        default:
            return state;
    }
};

//Filters reduer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return{
            ...state,
            text:action.text
        };
        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:'amount'
        };
        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy:'date'
        };
        case 'SET_START_DATE':
        return{
            ...state,
            startDate:action.startDate
        };
        case 'SET_END_DATE':
        return{
            ...state,
            endDate:action.endDate
        };
        default:
            return state;
    }
};

//Get visible expenses
const getVisibleExpenses =(expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter(() =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createAt<= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy ==='date'){
            return a.createAt<b.createAt ? 1:-1;
        }else if(sortBy ==='amount'){
            return a.amount<b.amount ?1:-1;
        }
    });
};

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer

    })
);

store.subscribe(() => {
    console.log(store.getState());
    const visibleExpenses= getVisibleExpenses(state.expenses,status.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 ,createA:1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50,createAt:-1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id,{amount: 30}));

store.dispatch(setTextFilter());
store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'sgsgs',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


const user={
    name:'Jen',
    age:24
};

console.log({
    ...user,
    location:'Colombo'
});