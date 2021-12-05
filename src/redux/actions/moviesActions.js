import tipo from './tipo'
import axios from 'axios'

const urlBase = 'https://api.themoviedb.org/3/movie/'
const urlBaseSearch = 'https://api.themoviedb.org/3/'
const key = '7ef4b5ec79778ec6b4bfcee05e1fb244'

export const getEstrenos = ()=>dispatch=>{
    dispatch({
        type:tipo.GET_ESTRENOS,
        payload:axios.get(`${urlBase}now_playing?api_key=${key}&language=es`)
    })
}

export const getProximosEstrenos = ()=>dispatch=>{
    dispatch({
        type:tipo.GET_PROXIMOS_ESTRENOS,
        payload:axios.get(`${urlBase}upcoming?api_key=${key}&langauge=es`)
    })
}

export const getCreditos = (peliculaid)=>dispatch=>{
    dispatch({
        type:tipo.GET_CREDITOS,
        payload:axios.get(`${urlBase}${peliculaid}/credits?api_key=${key}&langauge=es`)
    })
}

export const getPeliculaDetalle = (peliculaid)=>dispatch=>{
    dispatch({
        type:tipo.GET_PELICULA_DETALLE,
        payload:axios.get(`${urlBase}${peliculaid}?api_key=${key}&langauge=es`)
    })
}

export const getBusqueda = text =>dispatch=>{
    dispatch({
        type:tipo.GET_BUSQUEDA,
        payload:axios.get(`${urlBaseSearch}search/movie?query=${text}&api_key=${key}&langauge=es`)
    })
}

export const clearSearch = ()=>{
    return {
        type:tipo.CLEAR_SEARCH
    }
}