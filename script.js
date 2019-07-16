const addForm = document.querySelector('.add');
const todosList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo=>{
	const term = `
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span>${todo}</span>
					<i class="far fa-trash-alt delete"></i>
				</li>
				`;
	todosList.innerHTML += term;
};

addForm.addEventListener('submit',event=>{
	event.preventDefault();
	const todo = addForm.add.value.trim();

	if(todo.length){
		generateTemplate(todo);
		addForm.reset();
	}
});

todosList.addEventListener('click',e=>{
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
	}
});


const filterTodos = (keyword)=>{
	Array.from(todosList.children).filter((todo)=> !todo.textContent.includes(keyword)).forEach((todo)=> todo.classList.add('filter'));
	
	Array.from(todosList.children)
	.filter((todo)=> todo.textContent.includes(keyword))
	.forEach((todo)=> todo.classList.remove('filter'));
};


search.addEventListener('keyup',()=>{
	
	const keyword = search.value.trim();
	filterTodos(keyword);

});