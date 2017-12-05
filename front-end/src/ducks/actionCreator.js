import { GET_WISHLIST, GET_SESSION, GET_IMAGES, GET_TATTOO, PICK_TATTOO, GO_BACK } from './actionType';
import axios from 'axios'

const action = {
	getImages: () => {
		return {
			type: GET_IMAGES,
			payload: axios.get('http://localhost:3000/images')
				.then(res => res.data)
		}
	},
	getTattoo: (id) => {
		console.log('this is the id BACKEND', id)
		return {			
			type: GET_TATTOO,
			payload: axios.get('http://localhost:3000/tattoo/' + id)
				.then(res => res.data)
		}
	},
	pickTattoo: (id) => {
		console.log('this is the id', id)
		return {
			type: PICK_TATTOO,
			payload: id
		}
	},
	goBack: () => {
		return {
			type: GO_BACK,
			payload: ''	
		}
	},
	getSession: (session) => {
		return {
			type: GET_SESSION,
			payload: session
		}
	},
	getWishlist: () => {
		return {
			type: GET_WISHLIST,
			payload: axios.get('http://localhost:3000/wishlist', {withCredentials: true}).then(response => response.data)
		}
	}
} 

export default action

