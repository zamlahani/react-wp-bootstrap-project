import { createStore,combineReducers } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const isWelcomeClosed = (state=false,action)=>{
	switch (action.type){
		case 'CLOSE_WELCOME':
			return true
		default:
			return state
	}
}

const reducers = combineReducers({
  counter,
  isWelcomeClosed
})
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(reducers)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

//store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
//store.dispatch({ type: 'INCREMENT' })
// 1
//store.dispatch({ type: 'INCREMENT' })
// 2
//store.dispatch({ type: 'DECREMENT' })
// 1

export const inc = () => ({ type: 'INCREMENT' }) //return object harus dikasih parentheses

export const dec = () => ({ type: 'DECREMENT' }) //harus berupa function dg return berupa object

export const incre = () => { //pakai import tanpa connect
    store.dispatch(inc())
}

export const decre = () => store.dispatch(dec())

export const closeWelcome = () => store.dispatch({type:'CLOSE_WELCOME'})