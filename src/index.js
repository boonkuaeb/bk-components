/*** src/index.js   ***/
import React, { Component } from 'react'
// import './App.css'
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'
import './styles.css';
const inputElement = React.createRef();

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
            },
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }

    handleInput(e) {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
            currentItem,
        })
    }
    addItem (e) {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            })
        }
    }
    render() {
        return (
            <div className="Todo">
                <TodoList
                    addItem={this.addItem}
                    inputElement={inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                />
                <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
            </div>
        )
    }
}

export default Todo
