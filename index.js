// const { createStore } = require('redux')

// // defining constants
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const ADD_USER = 'ADD_USER'

// // state
// const initialCounterState = {
// 	count: 0,
// }
// const initialUsersState = {
// 	users: [{ name: 'Shoriful Islam' }],
// }

// // action - Object ----type,payload
// // increment counter
// const incrementCounter = () => {
// 	return {
// 		type: INCREMENT,
// 	}
// }
// const decrementCounter = () => {
// 	return {
// 		type: DECREMENT,
// 	}
// }

// const addUser = () => {
// 	return {
// 		type: ADD_USER,
// 		payload: { name: 'shorif' },
// 	}
// }

// //  creating reducer
// const counterReducer = (state = initialCounterState, action) => {
// 	switch (action.type) {
// 		case INCREMENT:
// 			return {
// 				count: state.count + 1,
// 			}
// 		case DECREMENT:
// 			return {
// 				count: state.count - 1,
// 			}

// 		default:
// 			return state
// 	}
// }

// //  store-------------getState(), dispatch(),subscribe()

// // crete store

// const store = createStore(counterReducer)

// store.subscribe(() => {
// 	console.log(store.getState())
// })

// // dispatch action
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch(decrementCounter())

// state -count
// action - increment,decrement,reset
// reducer
// store

// consts
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

const { createStore } = require('redux')

// state
const initialState = {
	count: 0,
	users: ['shorif'],
}

// action
const incrementCounterAction = () => {
	return {
		type: INCREMENT,
	}
}
const decrementCounterAction = () => {
	return {
		type: DECREMENT,
	}
}
const resetCounterAction = () => {
	return {
		type: RESET,
	}
}
const incrementCounterByValue = value => {
	return {
		type: INCREMENT_BY_VALUE,
		payload: value,
	}
}

// CREATING REDUCER
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}
		case RESET:
			return {
				...state,
				count: 0,
			}
		case INCREMENT_BY_VALUE:
			return {
				...state,
				count: state.count + action.payload,
			}

		default:
			return state
	}
}

const store = createStore(counterReducer)

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
// store.dispatch(resetCounterAction())
store.dispatch(incrementCounterByValue(20))
