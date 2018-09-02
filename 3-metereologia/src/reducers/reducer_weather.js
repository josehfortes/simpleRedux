import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    //a resposta da promisse aparece aqui
    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }
    return state;
}