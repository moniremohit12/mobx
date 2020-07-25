import {observable, action} from 'mobx'
import TodoModel from './TodoModel'
//  
class TodoStore {

    //Timer
    // @observable time
    // constructor() {
    //     this.time = new Date();
    //     this.interval = setInterval(() => {
    //         this.time = new Date()
    //     },1000)
    // }

    // @action
    // pauseClick() {
    //     clearInterval(this.interval)
    // }

    // @action
    // startClick() {
    //     this.interval = setInterval(() => {
    //         this.time = new Date()
    //     },1000)
    // }

    //end Timer

    @observable todos = [

    ]

    @observable lastID = 0

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this,title,false,this.lastID++,true))
    }

}

const todoStore = new TodoStore()
export default todoStore
