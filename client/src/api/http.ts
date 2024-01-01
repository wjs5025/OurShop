import axios from 'axios';

const http = axios.create({
	baseURL: 'api/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});

export default http;
