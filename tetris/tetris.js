let fgrsArr = ['I', 'O', 'L', 'J', 'Z', 'S', 'T'];
let fgrsObj = {
	I: '#00e4ff',
	O: '#b071d1',
	L: '#ff8d00',
	J: '#ff51bc',
	Z: '#69b625',
	S: '#f60000',
	T: '#2739a8'
	
}

let chooseFgrs = document.querySelector('.choose_fgrs');

for (let fgr in fgrsObj){
	
	chooseFgrs.innerHTML +=`<label>\n
							<input type='checkbox' checked value='${fgr}' onclick='chooseFgr(this.value)'>\n
							<img fgr='${fgr}' src='images/${fgr}.png' width='48%'>\n
							</label>`;
}

let I = [
	[0,1], 
	[0,2], 
	[0,3],
		// 90 
	[
		[-1,1],
		[0,0],
		[1,-1],
		[2,-2]
	],
		// 180
	[
		[1,-1],
		[0,0],
		[-1,1],
		[-2,2]
	],
		// 270 
	[
		[-1,1],
		[0,0],
		[1,-1],
		[2,-2]
	],
		// 360
	[
		[1,-1],
		[0,0],
		[-1,1],
		[-2,2]
	]
];

let O =[
	[1,0], 
	[0,1], 
	[1,1],
	
		// 90 
	[
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	],
		// 180
	[
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	],
		// 270 
	[
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	],
		// 360
	[
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	]
];

let L = [
[1,0], 
[0,1], 
[0,2],
	// 90 
	[
		[0,0],
		[-1,1],
		[1,0],
		[2,-1]
	],
		// 180
	[
		[1,-1],
		[1,-1],
		[-1,0],
		[-1,0]
	],
		// 270 
	[
		[-1,0],
		[0,-1],
		[2,-2],
		[1,-1]
	],
		// 360
	[
		[0,-1],
		[0,-1],
		[-2,0],
		[-2,0]
	]

];

let J = [
[1,0], 
[1,1], 
[1,2],

	// 90 
	[
		[0,0],
		[0,0],
		[1,-1],
		[-1,-1]
	],
		// 180
	[
		[0,-1],
		[-1,0],
		[-2,1],
		[1,0]
	],
		// 270 
	[
		[2,0],
		[0,0],
		[1,-1],
		[1,-1]
	],
		// 360
	[
		[-2,0],
		[1,-1],
		[0,0],
		[-1,1]
	]

];
let Z = [
[1,0],
[-1,1], 
[0,1],
// 90 
	[
		[0,-1],
		[-1,0],
		[2,-1],
		[1,0]
	],
		// 180
	[
		[0,0],
		[1,-1],
		[-2,0],
		[-1,-1]
	],
		// 270 
	[
		[0,-1],
		[-1,0],
		[2,-1],
		[1,0]
	],
		// 360
	[
		[0,0],
		[1,-1],
		[-2,0],
		[-1,-1]
	]

];
let S = [
[1,0], 
[1,1], 
[2,1],
// 90 
	[
		[2,-1],
		[0,0],
		[1,-1],
		[-1,0]
	],
		// 180
	[
		[-2,0],
		[0,-1],
		[-1,0],
		[1,-1]
	],
		// 270 
	[
		[2,-1],
		[0,0],
		[1,-1],
		[-1,0]
	],
		// 360
	[
		[-2,0],
		[0,-1],
		[-1,0],
		[1,-1]
	]

];

let T = [
[1,0], 
[2,0],
[1,1],
// 90 
	[
		[1,-1],
		[0,0],
		[0,0],
		[0,0]
	],
		// 180
	[
		[0,0],
		[-1,0],
		[-1,0],
		[1,-1]
	],
		// 270 
	[
		[1,-1],
		[1,-1],
		[1,-1],
		[0,0]
	],
		// 360
	[
		[-2,0],
		[0,-1],
		[0,-1],
		[-1,-1]
	]

 ] ;

document.getElementById('name').focus();
let nxtPc = document.getElementById('next_piece');

for (let i = 1 ; i < 50; i++){
	
	let cellNxtPc = document.createElement('div');
	cellNxtPc.classList.add('cell_next_piece');
	nxtPc.appendChild(cellNxtPc);
}

let cellNxtPc =  document.getElementsByClassName('cell_next_piece');
let i = 0;

for (let y = 7; y > 0; y--){
	
	for (let x = 1; x < 8; x++){
		
		cellNxtPc[i].setAttribute('posXN', x);
		cellNxtPc[i].setAttribute('posYN', y);
		i++;
	}
}


let overlay = document.querySelector('.overlay');

let modal = document.querySelector('.modal');

let parameters = {};



function go(){
	
	parameters.name = document.querySelector('#name').value;
	parameters.figuresShape = Array.from(document.querySelectorAll('.choose_fgrs input')).filter(el => el.checked).map(el => el.value);
	parameters.figures = Array.from(document.querySelectorAll('.choose_fgrs input')).filter(el => el.checked).map(el => eval(el.value));
	parameters.speed = Array.from(document.querySelectorAll('.level input')).filter(el => el.checked).map(el => el.value);
	
	if (parameters.name && parameters.figures.length &&  parameters.speed.length){	
	
		modal.style.display = 'none';
		overlay.style.display = 'none';
		startGame();
		
	}
	else {
		let txt = 'Please.\n';
		if(!parameters.name) txt += "Type your name. It's important :) \n";
		if(!parameters.figures.length) txt += 'Choose figures.\n';
		if(!parameters.speed.length) txt += 'Choose a level.';
		swal(txt);
	}
	
	
}



function startGame(){
	

let tetris = document.querySelector('.tetris');

/*let tetris = document.createElement('div');
tetris.classList.add('tetris');*/

for (let i = 0 ; i < 201; i++){
	
	let cell = document.createElement('div');
	cell.classList.add('cell');
	tetris.appendChild(cell);
}

let gameField = document.querySelector('.gameField');
gameField.appendChild(tetris);

let cell =  document.getElementsByClassName('cell');
let i = 0;

for (let y = 20; y > 0; y--){
	
	for (let x = 1; x < 11; x++){
		
		cell[i].setAttribute('posX', x);
		cell[i].setAttribute('posY', y);
		i++;
	}
}

let x = 5, y = 17; // for tetris
let xn = 4, yn = 4; // for next piece

let figures = parameters.figures;
let figuresShape = parameters.figuresShape;

function rndmFgr(){
		return Math.round(Math.random()*(figures.length - 1));
	}
	
let curFgr = rndmFgr();
let nxtFgr;
let fgrBody = 0;
let fgrBodyNext = 0;
let rotate = 1;



function createFgr (){
	
	rotate = 1;
	
	curFgr = nxtFgr >= 0 ? nxtFgr : curFgr ;
	
	let nxtPc = document.querySelectorAll('.cell_next_piece');
	
	for (let el of nxtPc){
		
		el.style.backgroundColor = '';
		el.classList.remove('nxtFgr');
		
	}
	
	
	fgrBody = [
			document.querySelector(`[posX="${x}"][posY="${y}"]`),
			document.querySelector(`[posX="${x + figures[curFgr][0][0]}"][posY="${y+ figures[curFgr][0][1]}"]`),
			document.querySelector(`[posX="${x + figures[curFgr][1][0]}"][posY="${y+ figures[curFgr][1][1]}"]`),
			document.querySelector(`[posX="${x + figures[curFgr][2][0]}"][posY="${y+ figures[curFgr][2][1]}"]`)
			]
			
	nxtFgr = rndmFgr();
	
	fgrBodyNext = [
			document.querySelector(`[posXN="${xn}"][posYN="${yn}"]`),
			document.querySelector(`[posXN="${xn + figures[nxtFgr][0][0]}"][posYN="${yn+ figures[nxtFgr][0][1]}"]`),
			document.querySelector(`[posXN="${xn + figures[nxtFgr][1][0]}"][posYN="${yn+ figures[nxtFgr][1][1]}"]`),
			document.querySelector(`[posXN="${xn + figures[nxtFgr][2][0]}"][posYN="${yn+ figures[nxtFgr][2][1]}"]`)
			]
			
	for (let el of fgrBody){
		
		el.classList.add('figure');
		el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];
		
	}
	for (let el of fgrBodyNext){
		
		el.classList.add('nxtFgr');
		el.style.backgroundColor = fgrsObj[figuresShape[nxtFgr]];
		
	}
	
	
}

createFgr ();
let rdy;
let score = 0;
let msg;

let scoreEl = document.getElementById('score');
let msgEl = document.getElementById('msg');
msgEl.addEventListener('animationend', function(){
	msgEl.classList.remove('animated')
	msgEl.classList.add('op')
});
scoreEl.innerHTML = `Your score <br> <span>${score}</span>`;

function move(){
	
	let moveFlag = true;
	let coordinates = [
		[fgrBody[0].getAttribute('posX'),fgrBody[0].getAttribute('posY')],
		[fgrBody[1].getAttribute('posX'),fgrBody[1].getAttribute('posY')],
		[fgrBody[2].getAttribute('posX'),fgrBody[2].getAttribute('posY')],
		[fgrBody[3].getAttribute('posX'),fgrBody[3].getAttribute('posY')]
	
	];

	for (let i = 0; i < coordinates.length; i++){
		if(coordinates[i][1] == 1 || document.querySelector(`[posX="${coordinates[i][0]}"][posY="${coordinates[i][1] - 1}"]`).classList.contains('set')) {
			moveFlag = false;
			break;
		}
	}
	
	if(moveFlag){
		
		for (let el of fgrBody){
		
			el.classList.remove('figure');
			el.style.backgroundColor = '';
		
		}
		
		fgrBody = [
			document.querySelector(`[posX="${coordinates[0][0]}"][posY="${coordinates[0][1] - 1}"]`),
			document.querySelector(`[posX="${coordinates[1][0]}"][posY="${coordinates[1][1] - 1}"]`),
			document.querySelector(`[posX="${coordinates[2][0]}"][posY="${coordinates[2][1] - 1}"]`),
			document.querySelector(`[posX="${coordinates[3][0]}"][posY="${coordinates[3][1] - 1}"]`)

			];
			
		for (let el of fgrBody){
			
			el.classList.add('figure');
			el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];;
			
		}
	
	}
	
	else{
		for (let el of fgrBody){
		
			el.classList.remove('figure');
			el.classList.add('set');
			el.style.backgroundColor = '';
			
		}
		
		let setted = document.querySelectorAll('.set');
		
		for (let el of setted){
		
			el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];;
			
		}
		
		
		let point = 0;
		for (let i = 1; i < 15; i++){
			let count = 0;
			for (let k = 1; k < 11; k++){
				if(document.querySelector(`[posX="${k}"][posY="${i}"]`).classList.contains('set')){
					count++;
					
					if(count == 10){
						
						for (let m = 1; m < 11; m++){
							document.querySelector(`[posX="${m}"][posY="${i}"]`).classList.remove('set');
							document.querySelector(`[posX="${m}"][posY="${i}"]`).style.backgroundColor = '';
						}

						let set = document.querySelectorAll('.set');
						let newSet = [];
						for (let s of set){
							let setCoordinates = [s.getAttribute('posX'),s.getAttribute('posY')];
							if(setCoordinates[1] > i) {
								s.classList.remove('set');
								s.style.backgroundColor = '';
								newSet.push(document.querySelector(`[posX="${setCoordinates[0]}"][posY="${setCoordinates[1] - 1}"]`))
								
							} 
						}
						for (let nS of newSet){
							nS.classList.add('set')
							
						}
						let nSetted = document.querySelectorAll('.set');
		
						for (let el of nSetted){
						
							el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];;
							
						}
						i--;
					}
					
				}
				
				
			}
			
			if(count == 10){
				point++;
				score += 10 * (point > 1 ? (1 + point/10) : 1);
				
				switch (point) {
					case 1:
						msgEl.innerHTML = `Bravo!`;
					break;
					case 2:
						msgEl.innerHTML = `Good job!<br>${parameters.name}!`
					break;
					case 3:
						msgEl.innerHTML = `Very impressive,<br>${parameters.name}!`
					break;
					case 4:
						msgEl.innerHTML = `${parameters.name}! <br> You're a Master!`;
					break;
				}
				msgEl.classList.remove('op');
				msgEl.classList.add('animated');
				scoreEl.innerHTML = `Your score <br> <span>${score}</span>`;
				
				if (parameters.speed > 300){
					
					if((parameters.speed == 900 && score > 149) || (parameters.speed == 600 && score > 249)){
				
							
							if(rdy == undefined){
								clearInterval(interval);
								swal("Are you ready for next level?", {
												  buttons: {
													cancel: "No",
													ok: 'Yes',
												  },
												})
												.then((value) => {
												  switch (value) {
												 
													case "ok":
														rdy = true;
														parameters.speed -=300;
														interval = setInterval(() => move(), parameters.speed);
													break;
													default:
														rdy = false;
														interval = setInterval(() => move(), parameters.speed);
													break;

												  }
												});
								
								
							}
							
							
					}

					
				}
			}
			else {
				point = 0;
			}
			
			
		}
		for (let n = 1; n < 11; n++){
			if(document.querySelector(`[posX="${n}"][posY="${18}"]`).classList.contains('set')){
				clearInterval(interval);
				gameField.removeEventListener('click', addOpcty);
				window.removeEventListener('keydown', keyEvnts);
				
				swal({
					  title: `Game over!`,
					  text: `Your score is ${document.querySelector('#score span').innerHTML}`,
					  icon: `success`,
					  buttons: { cancel: `Ok`,
								ok: `I want to start new game!`,
							}
						}).then((value) => {
							  switch (value) {
								case "ok":
									score = document.querySelector('#score span').innerHTML = 0
									let set = document.querySelectorAll('.set');
									for (let s of set){
										s.classList.remove('set');
										s.style.backgroundColor = '';
									} 
									interval = setInterval(() => move(), parameters.speed);
									window.addEventListener('keydown', keyEvnts);
									gameField.addEventListener('click', addOpcty);
								
								break;
								
							  }
							});
				
				break;
			}
		}
		createFgr();
	}
	
	
	
}



let interval = setInterval(() => move(), parameters.speed);


function addOpcty(){

	if(gameField.classList.toggle('opcty')){
		clearInterval(interval);
	}
	else interval = setInterval(() => move(), parameters.speed);
}

gameField.addEventListener('click', addOpcty);

let flag = true;


function keyEvnts(e) {
	
	
	let coordinates1 = [fgrBody[0].getAttribute('posX'),fgrBody[0].getAttribute('posY')];
	let coordinates2 = [fgrBody[1].getAttribute('posX'),fgrBody[1].getAttribute('posY')];
	let coordinates3 = [fgrBody[2].getAttribute('posX'),fgrBody[2].getAttribute('posY')];
	let coordinates4 = [fgrBody[3].getAttribute('posX'),fgrBody[3].getAttribute('posY')];
	
	
	function getNewState(a){
		flag = true;
		let fgrNew = [
			document.querySelector(`[posX="${+coordinates1[0] + a}"][posY="${+coordinates1[1]}"]`),
			document.querySelector(`[posX="${+coordinates2[0] + a}"][posY="${+coordinates2[1]}"]`),
			document.querySelector(`[posX="${+coordinates3[0] + a}"][posY="${+coordinates3[1]}"]`),
			document.querySelector(`[posX="${+coordinates4[0] + a}"][posY="${+coordinates4[1]}"]`),
		
		
		];
		
		
		for (let el of fgrNew){
			if(!el || el.classList.contains('set')) flag = false;
		}
		
		if(flag){
			for (let el of fgrBody){
				el.classList.remove('figure');
				el.style.backgroundColor = '';
			}
			
			fgrBody = fgrNew;
			
			for (let el of fgrBody){
				el.classList.add('figure');
				el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];;
			}
			
		}
		
	}

	if(e.keyCode == 37){
		
		getNewState(-1);
	}
	else if(e.keyCode == 39){
		
		getNewState(1);
	}
	else if(e.keyCode == 40){
		
		move();
	}
	else if(e.keyCode == 38){
		
		flag = true;

		let fgrNew = [
			document.querySelector(`[posX="${+coordinates1[0] + figures[curFgr][rotate + 2][0][0]}"][posY="${+coordinates1[1] + figures[curFgr][rotate + 2][0][1]}"]`),
			document.querySelector(`[posX="${+coordinates2[0] + figures[curFgr][rotate + 2][1][0]}"][posY="${+coordinates2[1] + figures[curFgr][rotate + 2][1][1]}"]`),
			document.querySelector(`[posX="${+coordinates3[0] + figures[curFgr][rotate + 2][2][0]}"][posY="${+coordinates3[1] + figures[curFgr][rotate + 2][2][1]}"]`),
			document.querySelector(`[posX="${+coordinates4[0] + figures[curFgr][rotate + 2][3][0]}"][posY="${+coordinates4[1] + figures[curFgr][rotate + 2][3][1]}"]`)

		
		
		];
		
		
		for (let el of fgrNew){
			if(!el || el.classList.contains('set')) flag = false;
		}
		
		if(flag){
			for (let el of fgrBody){
				el.classList.remove('figure');
				el.style.backgroundColor = '';
			}
			
			fgrBody = fgrNew;
			
			for (let el of fgrBody){
				el.classList.add('figure');
				el.style.backgroundColor = fgrsObj[figuresShape[curFgr]];;
			}
							
			rotate =  rotate < 4 ? rotate + 1 : 1;
			
		}
	}
	
}

window.addEventListener('keydown', keyEvnts);

}

function chooseFgr(val){
	
	document.querySelector(`[fgr = ${val}]`).classList.toggle('opcty');
}
