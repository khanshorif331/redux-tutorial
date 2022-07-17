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
store.dispatch(incrementCounterByValue(10))
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(25))
