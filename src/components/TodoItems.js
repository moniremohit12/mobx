import React,{Component} from 'react';
import TodoItem from './TodoItem'
import {observer} from 'mobx-react'
import todoStore from '../stores/TodoStore';
import InfoItem from"./InfoItem";

@observer
class TodoItems extends Component {
    render() {
        return(
            <section className="main">
                <ul className="todo-list">
                    {
                        todoStore.todos.map(todo=> {
                            return(
                                <TodoItem todo={todo} />
                            )
                        })
                    }
                </ul>
                <InfoItem />
            </section>
        )
    }
}

export default TodoItems;