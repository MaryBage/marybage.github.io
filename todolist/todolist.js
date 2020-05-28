function addTask(val){

let tasks = Array.from(document.querySelectorAll('#todolist div .tskTxt'));
let txt =[];

for (let task of tasks){
	txt.push(task.innerText);
}

let addTsk = document.querySelector('.add-task');
	
	val = val || addTsk.value;
		
		if(val == '') {
			alert ('The field is empty.')
		}
		
		else if(txt.length > 0 && txt.includes(val)){
			alert ('The task is already exist.')
		}
		
		else {
			
			let tsk = document.createElement("div");
			tsk.className ='task';
			
			let marker = document.createElement("div");
			marker.setAttribute('class','marker');
			marker.innerHTML = '<i class="far fa-star"></i>';
			
			let tskTxt = document.createElement("div");
			tskTxt.setAttribute('class','tskTxt');
			tskTxt.addEventListener('click', () => lineTrgh(event));
			//tskTxt.addEventListener('dblclick',() => editTsk(event));
			tskTxt.innerHTML = val;
			
			let editTask = document.createElement("div");
			editTask.setAttribute('class','editTsk');
			editTask.addEventListener('click', () => editTsk(event));
			editTask.innerHTML = '</i><i class="far fa-edit"></i>';
			
			let rmvTask = document.createElement("div");
			rmvTask.setAttribute('class','rmvTsk');
			rmvTask.addEventListener('click', () => rmvTsk(event));
			rmvTask.innerHTML = "&#10008;";
			
			document.getElementById('todolist').appendChild(tsk);
			tsk.appendChild(marker);
			tsk.appendChild(tskTxt);
			tsk.appendChild(editTask);
			tsk.appendChild(rmvTask);
			addTsk.value = '';
			
			
		}
	
	
	
}



function sbmtTsk(e, val){

	if(e.keyCode == 13) addTask(val);
}

function lineTrgh(e){
		
	if(e.target == e.currentTarget){
		
		if(e.target.classList.toggle('lntrgh')){
			e.target.parentElement.querySelector(".marker").innerHTML ='<i class="fas fa-star"></i>' 
			e.target.parentElement.querySelector(".editTsk").style.visibility = 'hidden';
		}
		else{
			e.target.parentElement.querySelector(".marker").innerHTML = '<i class="far fa-star"></i>';
			e.target.parentElement.querySelector(".editTsk").style.visibility = 'visible';
		}				

	}
	
}

function rmvTsk(e){
	

	e.target.parentElement.addEventListener('animationend', () => e.target.parentElement.remove());
	e.target.parentElement.classList.toggle('animated');

	
}

function editTsk(e){
	
		let tskEl = e.currentTarget.parentElement.querySelector(".tskTxt");
		let tskTxt = tskEl.innerHTML;
		tskEl.innerHTML = `<input class='add-task' value='${tskTxt}' type='text' onkeypress ='chngTsk(event)' >`;
		let inpt = tskEl.querySelector('input');
		inpt.focus();
		inpt.setSelectionRange(inpt.value.length,inpt.value.length); 
		e.currentTarget.style.visibility = 'hidden';

	
	
}

function chngTsk(e, th){
	
	if(e.keyCode == 13){
		
		e.target.closest('div').parentElement.querySelector(".editTsk").style.visibility = 'visible';
		e.target.closest('div').innerText = e.target.value;
	
	}
	
}

function sbmtSrch(e, th){
	
	let start = sbmtSrch.start || Date.now();

	let timer = setInterval(function() {

	let dif = Date.now() - start;
	
		if (dif <= 500) {return;}
		
		let tasks = Array.from(document.querySelectorAll('#todolist div .tskTxt'));

		for(let task of tasks){
			
			task.parentElement.style.display = task.innerText.includes(th) ? 'flex' : 'none';
			
		}
		
		clearInterval(timer);

	}, 100);
	
}