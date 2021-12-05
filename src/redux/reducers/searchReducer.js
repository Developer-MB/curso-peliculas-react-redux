import tipo from '../actions/tipo'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipo.GET_BUSQUEDA_FULFILLED:
        const {results} = action.payload.data
            return Object.assign({},state,{
                data:results
            })
        case tipo.CLEAR_SEARCH:
            return Object.assign({},state,{
                data:[]
            })
            
        default:
            return state
    }
}