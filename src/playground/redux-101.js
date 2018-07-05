//This file is not related to Expensify-app

import {createStore} from 'redux';


const incremetCount =({incrementBy = 1 }= {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy = 1} = {}) => ({
    type:"DECREMENT",
    decrementBy
});

const resetCount=() => ({
    type:'RESET'
});

const setCount=({count}) => ({
    type:'SET',
    count
});

//reducers

const countReducer=(state ={count:0},action) =>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count:state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count:state.count - action.decrementBy
        };
        case 'RESET':
        return{
            count:0
        };
        case 'SET':
        return{
            count:action.count
        };
        default:
        return state;
    }
};

    const store=createStore(countReducer);

    const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    });



store.dispatch(incremetCount());

store.dispatch(incremetCount({incrementBy:5}));
   /* store.dispatch({
        type:'INCREMENT',
        incrementBy:5
    });*/

    store.dispatch(incremetCount({incrementBy:5 }));

    store.dispatch(decrementCount());

    store.dispatch(decrementCount({decrementBy:10 }));

    store.dispatch(resetCount());

    store.dispatch(setCount({count:100}));
