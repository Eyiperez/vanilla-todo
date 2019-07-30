//--------STATE----------
let state = {
    start: false,
    todos: [],
    newTodo: '',
}


//-----HTML Objects---------

const addTodoButton = document.querySelector('.js-add-button');
const inputField = document.querySelector(".js-input");
const listContainer = document.querySelector(".js-list");

//------Events--------------

inputField.addEventListener('input', (e) => {
    if (e.data) {
        state.newTodo += e.data;
        console.log(state.newTodo)
    }
})