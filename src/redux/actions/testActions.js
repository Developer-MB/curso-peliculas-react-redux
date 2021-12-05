import tipo from './tipo'

export const updateFecha = ()=>{
    return {
        type:tipo.UPDATE_FECHA,
        payload:new Date()
    }
}