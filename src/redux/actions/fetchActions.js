import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./actionTypes";

export function fetchPostsRequest(){
    return{
        type: FETCH_POSTS_REQUEST
    }
}

export function fetchPostsSuccess(data){
    return{
        type: FETCH_POSTS_SUCCESS,
        payload:data
    }
}

export function fetchPostsFailure(error){
    return{ 
        type: FETCH_POSTS_FAILURE,
        payload:error
    }
}