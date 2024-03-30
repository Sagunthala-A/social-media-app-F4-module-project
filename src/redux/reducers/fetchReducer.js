import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from '../actions/fetchActions';

const initialState ={
    loading: false,
    data:[],
    error:''
}

const fetchReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {...state,loading: true}
        case FETCH_POSTS_SUCCESS:
            return {...state,loading:false,data:action.payload,error:''}
        case FETCH_POSTS_FAILURE:
            return {...state,loading:false,data:[],error:action.payload}
        default: return state
    }
}

export default fetchReducer;