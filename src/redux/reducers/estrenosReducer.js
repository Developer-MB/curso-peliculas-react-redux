import tipo from '../actions/tipo'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipo.GET_ESTRENOS_FULFILLED:
        const {results} = action.payload.data
        const peliculaDestacada = results[Math.floor(Math.random()*results.length)]
            return Object.assign({},state,{
                data:results,
                peliculaDestacada
            })
            
        default:
            return state
    }
}