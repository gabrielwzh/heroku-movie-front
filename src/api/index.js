import axios from 'axios'
require('dotenv').config()

const production  = 'https://heroku-movie-back.herokuapp.com/api';
const development = 'http://localhost:5000/api';

// deployment - add .env REACT_APP_STAGE=development
// prod heroku - env var REACT_APP_STAGE=production
const url = (process.env.REACT_APP_STAGE === 'production' ? production : development);

console.log(process.env.REACT_APP_STAGE)

const api = axios.create({
    baseURL: url
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis