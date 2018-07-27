/**
 * 
 * Acoes, como click
 */

export function selectBook(book){
    return{
        type: 'BOOK_SELECTED',
        payload: book
    }
}