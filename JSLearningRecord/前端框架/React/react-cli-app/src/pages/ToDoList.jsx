import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './ToDoList.less'

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 3,
            todoList: [{
                id: 1,
                todo: '学习react'
            }, {
                id: 2,
                todo: '学习JavaScript'
            }]
        }
    }


    /*******************页面事件**************************/
    setId() {
        console.log(this.props.params)
    }

    addKeyUp(e) {
        if (e.keyCode == '13') {
            this.addToDO();
        }
    }

    addToDO() {
        let _refs = this.refs;
        if (_refs.todoValue.value) {
            let todoList = Object.assign([], this.state.todoList);
            todoList.push({
                id: this.state.id,
                todo: _refs.todoValue.value
            })
            this.setState({ todoList, id: ++this.state.id });
            _refs.todoValue.value = '';
        }
    }

    deleteKeyUp(e) {
        if (e.keyCode == '13') {
            this.deleteToDO();
        }
    }

    deleteToDO() {
        let _refs = this.refs;
        if (_refs.todoId.value) {
            let todoListTemp = Object.assign([], this.state.todoList);
            let todoList = [];
            todoListTemp.forEach(i => {
                if (i.id != _refs.todoId.value) {
                    todoList.push(i)
                }
            });
            this.setState({ todoList });
            _refs.todoId.value = ''
        }
    }

    /*******************页面渲染**************************/
    renderList() {
        const todoList = Object.assign([], this.state.todoList);
        if (todoList.length > 0) {
            return todoList.map((i, index) => {
                return <li key={index}>{`${i.id}： ${i.todo}`}</li>
            })
        }

    }
    render() {
        const list = this.renderList()
        return (
            <div className='toDoList'>
                <div className='todoInput'>
                    <input type="text" placeholder='请输入要做的事情' ref='todoValue' onKeyUp={(e) => this.addKeyUp(e)} />
                    <input type="button" value="确定" onClick={() => this.addToDO()} />
                </div>
                <div className='ulList'>
                    <ul>
                        {list}
                    </ul>
                </div>
                <div className='todoInput'>
                    <input type="number" maxLength='5' placeholder='请输入要删除的序号' ref='todoId' onKeyUp={(e) => this.deleteKeyUp(e)} />
                    <input type="button" value="删除" onClick={() => this.deleteToDO()} />
                </div>
            </div>
        )
    }
}

export default ToDoList