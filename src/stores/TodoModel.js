import {observable, action} from 'mobx'
import todoStore from '../stores/TodoStore';
import TodoItem from '../components/TodoItem';

export default class TodoModel {
    store
    id
    @observable showing
    @observable title
    @observable completed

    constructor(store,title,completed,id,showing) {
        this.title = title
        this.completed = completed 
        this.id = id
        this.store = store 
        this.showing = showing
    }
    
    @action
    toggle() {
        this.completed = !this.completed;
        if(this.completed) {
            todoStore.lastID--
        }
        else{
            todoStore.lastID++
        } 
    }

    @action
    all() {
        todoStore.todos.map(item => {
            item.showing = true;
        })
    }

    @action
    active() {
        this.todos.map(item => {
            if(`${item.completed}`) {
                item.showing = false;
            }
            else {
                item.showing = true;
            }
        })

    }

    @action
    delete() {
        this.showing = false;
        todoStore.lastID--        
    }

    @action
    completeds() {
        // or
         return this.todos.filter(item => {item.completed = true});  
    }

    @action
    clearComplateds() {
        return this.todos.filter(item => {item.completed = false}); 
    }

}
