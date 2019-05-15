import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TodoItems extends Component {
    constructor() {
        super()
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks (item) {
        return (
            <li key={item.key}>
                <span>{item.text} </span>
                <FontAwesomeIcon icon={faTrash} onClick={() => this.props.deleteItem(item.key)} />
            </li>
        )
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems
