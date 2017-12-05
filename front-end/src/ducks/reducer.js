import { GET_WISHLIST_FULFILLED, GET_SESSION, GO_BACK, 	PICK_TATTOO, GET_IMAGES_PENDING, GET_IMAGES, GET_IMAGES_FULFILLED, GET_TATTOO_PENDING, GET_TATTOO_FULFILLED} from './actionType'
import action from './actionCreator'

const initialState = {
	loading: false,
	images: [],
	tattooDetails: [],
	tattooId: '',
	userId: {},
	wishlist: []
}

export default function reducer(state = initialState, action) {
	switch(action.type){
		case GET_IMAGES_PENDING: 
			return Object.assign({}, state, {loading: true})

		case GET_IMAGES_FULFILLED: 
			return Object.assign({}, state, {loading: false, images: action.payload})

		case GET_TATTOO_PENDING: 
			return Object.assign({}, state, {loading: true})

		case GET_TATTOO_FULFILLED: 
			return Object.assign({}, state, {loading: false, tattooDetails: action.payload})

		case PICK_TATTOO:
			return Object.assign({}, state, {tattooId: action.payload})

		case GO_BACK:
			return Object.assign({}, state, {tattooId: action.payload})

		case GET_SESSION: 
			return Object.assign({}, state, {userId: action.payload})

		case GET_WISHLIST_FULFILLED:
			return Object.assign({}, state, {wishlist: action.payload})
		
		default: 
			return state
	}
}