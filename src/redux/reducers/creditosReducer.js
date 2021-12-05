import tipo from '../actions/tipo'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipo.GET_CREDITOS_FULFILLED:
        const {cast} = action.payload.data
            return Object.assign({},state,{
                data:cast
            })
            
        default:
            return state
    }
}