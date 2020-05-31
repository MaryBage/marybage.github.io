
let cities = [
	'amsterdam',
	'athens',
	'berlin',
	'brussels',
	'lisbon',
	'london',
	'madrid',
	'milan',
	'paris',
	'vienna'
];

let container = document.getElementById("slideshow-container");

for (let city of cities){
	let desc = city.charAt(0).toUpperCase() + city.slice(1);
	container.innerHTML += `<div class='slide fade'>\n
								<img src="images/${city}.png" style="width:100%" onclick='playPause(event)'>\n
								<div class='desctiption'></div>\n
							</div>`;
}

let slides = document.getElementsByClassName("slide");
let desctiption = document.getElementsByClassName("desctiption");

for (let i = 0; i < slides.length; i++){
	
	document.getElementById("switchersDiv").innerHTML += `\n
					<div><img style="width:100%" class='switcher' onclick='curSlide(${i})' src='images/${cities[i]}_flag.png'></div>`;
}

let switchers = document.getElementsByClassName("switcher");

let initial;

let slideIndx = 0;

autoSlideshow ();

function autoSlideshow () {
  console.log(`images/${cities[slideIndx]}_flag.png`);
	for (let i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
	switchers[i].src  = `images/${cities[i]}_flag.png`;
	switchers[i].style.transform='scale(1)';
	desctiption[i].innerHTML = '';
	
	switchers[i].addEventListener("mouseover", function( event ) { 
			event.target.src  = 'images/plane2.png';	
		
	});
		
	switchers[i].addEventListener("mouseout", function( event ) {   
		event.target.src  = `images/${cities[i]}_flag.png`;
	});
	
	}
	slideIndx++;

	if (slideIndx > slides.length) {slideIndx = 1;}
	if (slideIndx < 0 ) {slideIndx = slides.length;}

	slides[slideIndx-1].style.display = "block";

	switchers[slideIndx - 1].src  = "images/switcher_s200.png";	
	switchers[slideIndx - 1].style.width  = "100%";
	switchers[slideIndx - 1].style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)' ;
	switchers[slideIndx - 1].addEventListener("mouseover", function( event ) {  
		switchers[slideIndx - 1].src  = "images/switcher_s200.png";	
		event.target.style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)';
	});
	switchers[slideIndx - 1].addEventListener("mouseout", function( event ) {
		switchers[slideIndx - 1].src  = "images/switcher_s200.png";
		event.target.style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)';
	});
	

	typing(desctiption[slideIndx - 1],cities[slideIndx - 1]);
	initial = setTimeout(autoSlideshow, 5000); 
}

function pagingSlide(n){

	clearTimeout(initial);
	if (slideIndx == 1 && n == -2 ) {slideIndx = slides.length - 1;}
	else {slideIndx += n;}

	autoSlideshow();
	
}

function curSlide(i){
	
	clearTimeout(initial);
	slideIndx = i;
	switchers[i].addEventListener("mouseover", function( event ) {   
		event.target.src  = `images/${cities[slideIndx]}_flag.png`;
	});
	autoSlideshow();
	
}


 
function typing(el, txt, i = 0) {
 el.innerHTML += i == 0 ? txt[i].toUpperCase() : txt[i];
 if (i == txt.length - 1) 
	return;
  
 i++;
 setTimeout(() => typing(el, txt, i), Math.round(1000/txt.length));
 
}

function playPause(e){
	
	let el = document.getElementById('playPause');
	console.log(typingInitial);
	if (e.target.classList.toggle('paused')) {
		clearTimeout(initial);
	}
	else {
		autoSlideshow();
	}
		
}


