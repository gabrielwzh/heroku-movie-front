import axios from 'axios'


const production  = 'https://heroku-movie-back.herokuapp.com/api';
const development = 'http://localhost:5000/api';
const url = (process.env.NODE_ENV ? production : development);
// const url = development;
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