import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = "?key=pdksadd456sa45dsa645dsa456"

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}