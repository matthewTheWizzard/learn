import { Header } from "./components/header";
import { TodoControl } from "./components/todo-control";
import { TodoList } from "./components/todo-list";
import { createElement } from "./lib/create-element";

export const App = () => {
    const header = Header()
    const todoList = TodoList()
    const todoControl = TodoControl()

    const root = createElement('div', { className: 'container' }, header, todoControl, todoList)
    const mount = (parent) => parent.appendChild(root)

    return {
        mount
    }
};