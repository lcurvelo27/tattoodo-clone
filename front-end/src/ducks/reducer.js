import {GET_PEOPLE_PENDING, GET_PEOPLE, GET_PEOPLE_FULFILLED} from './actionType'
import action from './actionCreator'

const initialState = {
	loading: false,
	images: []
}

export default function reducer(state = initialState, action) {
	switch(action.type){
		case GET_PEOPLE_PENDING: 
			return Object.assign({}, state, {loading: true})

		case GET_PEOPLE_FULFILLED: 
			return Object.assign({}, state, {loading: false, images: action.payload})

		default: 
			return state
	}
}