// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Name validation
    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }
    
    // Email validation
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        showError('messageError', 'Message is required');
        isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
        alert(`Thank you, ${name}! Your message has been submitted.`);
        this.reset();
    }
});

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// To-Do List Functionality
document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    
    if (task !== '') {
        const li = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.className = 'todo-text';
        taskText.addEventListener('click', toggleComplete);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            saveTodos();
        });
        
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        document.getElementById('todoList').appendChild(li);
        input.value = '';
        
        saveTodos();
    }
}

function toggleComplete(e) {
    e.target.classList.toggle('completed');
    saveTodos();
}

// Save todos to localStorage
function saveTodos() {
    const todos = [];
    document.querySelectorAll('#todoList li').forEach(li => {
        todos.push({
            text: li.querySelector('.todo-text').textContent,
            completed: li.querySelector('.todo-text').classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todoList');
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = todo.text;
        taskText.className = 'todo-text';
        if (todo.completed) {
            taskText.classList.add('completed');
        }
        taskText.addEventListener('click', toggleComplete);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            saveTodos();
        });
        
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Load todos when page loads
document.addEventListener('DOMContentLoaded', loadTodos);