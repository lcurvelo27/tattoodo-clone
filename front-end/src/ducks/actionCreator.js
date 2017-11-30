import { GET_IMAGES } from './actionType';
import axios from 'axios'

const action = {
	getImages: () => {
		return {
			type: GET_IMAGES,
			payload: axios.get('http://localhost:3000/images')
				.then(res => res.data)
		}
	},
	test: () => {
		return {
			type: 'TEST',
			payload: 'this is a test'
		}
	}
} 

export default action

