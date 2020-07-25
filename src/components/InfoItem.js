import React,{Component} from 'react';
import {observer} from 'mobx-react'
import todoStore from '../stores/TodoStore';
import TodoModel from '../stores/TodoModel';


@observer
class InfoItem extends Component {  

    showAll() {
        this.props.todo.all();
    }

    showActive = () => {
        this.props.todo.active();
    }

    showCompleted = () => {
        TodoModel.completeds();
    }

    showClearCompleted = () => {
        TodoModel.clearComplateds();
    }

    render() {
        const { todo } = this.props;
        return(
            <div className="viwe">
                <div className="infoitem">
                    <span>{
                        `${todoStore.lastID} items left`
                    }</span>
                    <div className="actions">
                        <span 
                            onClick={() =>this.showAll()}
                            className="item-actions"
                        >All</span>
                        <span 
                            onClick={() =>this.showActive()}
                            className="item-actions"
                        >Active</span>
                        <span 
                            onClick={() =>this.showCompleted()}
                            className="item-actions"
                        >Completed
                        </span>
                        <span
                            onClick={() =>this.showClearCompleted()}
                            className="item-actions"
                        >clear completed</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoItem;