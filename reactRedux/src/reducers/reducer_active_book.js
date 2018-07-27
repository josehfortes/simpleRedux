/**
 * 
 * @param {*} state não é o estado da aplicação inteira, o reducer é responsavel por ele
 * é o estado gerado em booksReducer no reducer/index
 * @param {*} action 
 */

export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}