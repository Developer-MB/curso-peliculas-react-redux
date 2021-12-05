import tipo from '../actions/tipo'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipo.GET_PROXIMOS_ESTRENOS_FULFILLED:
        const {results} = action.payload.data
            return Object.assign({},state,{
                data:results
            })
            
        default:
            return state
    }
}