class Storage {
    constructor(key) {
        this.key = key;
    }
    getStorage() {
        const data = window.localStorage.getItem(this.key);
        if (data) {
            return JSON.parse(data);
        }
        return data;
    }
    save(data) {
        window.localStorage.setItem(this.key, JSON.stringify(data))
    }
}

//--------STATE----------
let state = {
    start: false,
    todos: [],
    newTodo: '',
}
const storage = new Storage('app-state');

//-----HTML Objects---------

const addTodoButton = document.querySelector('.js-add-button');
const inputField = document.querySelector(".js-input");
const listContainer = document.querySelector(".js-list");

//------Events--------------

inputField.addEventListener('input', (e) => {
    if (e.target.value) {
        state.newTodo = e.target.value;
        console.log(state.newTodo)
    }
})

addTodoButton.addEventListener('click', e => {
    state.todos.unshift(state.newTodo)
    console.log(state.todos)
    storage.save(state)
    render(state)
})

const todoHTML= (todo) => {
    return `<li class="list-group-item">${todo}</li>`
}

//------Render--------

const render = state => {
    console.log('in render', state.todos)
    let todosToHTML = '';
    for (let i = 0; i < state.todos.length; i++) {
        todosToHTML += todoHTML(state.todos[i])   
    }
    listContainer.innerHTML = todosToHTML;
    state.newTodo = '';
    inputField.value = '';
}

const stored_state = storage.getStorage();
if (stored_state) {

    state = stored_state;
}
storage.save(state)
render(state);