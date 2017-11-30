import { GET_IMAGES } from './actionType';
import axios from 'axios'

const action = {
	getImages: () => {
		return {
			type: GET_IMAGES,
			payload: axios.get('http://localhost:3000/images')
				.then(res => {
					console.log(res.data)
				})
		}
	}
} 

export default action

