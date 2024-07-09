//your code here
document.getElementById('addTodoBtn').addEventListener('click',function(){
	var todoInput = document.getElementById('newTodoInput');
	var todoText = todoInput.value.trim();

	if(todoText !== ''){
		var todoList = document.getElementById('todoList');
		var newTodoItem = document.createElement('li');
		newTodoItem.textContent = todoText;
		todoList.appendChild(newTodoItem);
		todoInput.value = '';
	}else{
		alert('Please enter s valid to-do item.');
	}
});
