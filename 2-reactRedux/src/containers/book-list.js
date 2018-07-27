import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/**
 * Container: componente com acesso direto ao estado produzido pelo redux
 */

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    /**
     * Tudo que for retornado será um props dentro de booklist
     */
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    /**
     * sempre que for chamado um selectBook, o resultado será passado para todos os seus reducers
     */
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// promove o BookList de componente pra container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);