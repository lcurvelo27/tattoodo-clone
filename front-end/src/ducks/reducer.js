import {GET_IMAGES_PENDING, GET_IMAGES, GET_IMAGES_FULFILLED} from './actionType'
import action from './actionCreator'

const initialState = {
	loading: false,
	images: []
}

export default function reducer(state = initialState, action) {
	switch(action.type){
		case GET_IMAGES_PENDING: 
			return Object.assign({}, state, {loading: true})

		case GET_IMAGES_FULFILLED: 
			return Object.assign({}, state, {loading: false, images: action.payload})
		
		default: 
			return state
	}
}