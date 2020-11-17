import axios from 'axios'

let development = process.env.NODE_ENV !== 'production'
const api = axios.create({
    baseURL: development ? 'http://localhost:5000/api' : 'https://heroku-movie-back.herokuapp.com/api'
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