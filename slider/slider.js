
let cities = [
	'amsterdam',
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
								<img src="images/${city}.JPG" style="width:100%">\n
								<div class='desctiption'>${desc}</div>\n
							</div>`;
}

let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++){
	
	document.getElementById("switchersDiv").innerHTML += `\n
					<div><img  class='switcher' onclick='curSlide(${i})' src='images/plane1.png'></div>`;
}

let switchers = document.getElementsByClassName("switcher");


/*bodyBckgrnd();

function bodyBckgrnd(){

	let now = new Date();
	let hour = now.getHours();
	let body = document.getElementsByTagName('body')[0];

	if(hour < 5){
		body.style.backgroundImage = 'url(SliderImages/bg6.JPG)'
	}

	else if (hour < 12){
		body.style.backgroundImage = 'url(SliderImages/bg4.JPG)'
	}

	else if (hour < 19){
		body.style.backgroundImage = 'url(SliderImages/bg.JPG)'
	}

	else {
		body.style.backgroundImage = 'url(SliderImages/bg5.JPG)'
	}

}*/


let initial;

let slideIndx = 0;

autoSlideshow ();

function autoSlideshow () {
  
	for (let i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
	switchers[i].src  = "images/plane1.png";
	switchers[i].style.width  = "40px";
	switchers[i].style.transform='scale(1)';
	
	switchers[i].addEventListener("mouseover", function( event ) {   
		event.target.style.transform='scale(2)';
	});
	switchers[i].addEventListener("mouseout", function( event ) {   
		event.target.style.transform='scale(1)';
	});
	}
	slideIndx++;

	if (slideIndx > slides.length) {slideIndx = 1;}
	if (slideIndx < 0 ) {slideIndx = slides.length;}

	slides[slideIndx-1].style.display = "block";


	switchers[slideIndx - 1].style.width  = "auto";
	switchers[slideIndx - 1].style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)' ;
	switchers[slideIndx - 1].addEventListener("mouseover", function( event ) {   
		event.target.style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)';
	});
	switchers[slideIndx - 1].addEventListener("mouseout", function( event ) {   
		event.target.style.transform = slideIndx < 6 ?  'scale(1)' : 'scale(-1, 1)';
	});
	switchers[slideIndx - 1].src  = "images/switcher_s200.png";
	initial = setTimeout(autoSlideshow, 5000); 
}

function pagingSlide(n){
	console.log(slideIndx+' -> '+n);
	clearTimeout(initial);
	if (slideIndx == 1 && n == -2 ) {slideIndx = slides.length - 1;}
	else {slideIndx += n;}
	console.log(slideIndx+' -> '+n);
	autoSlideshow();
	
}

function curSlide(i){
	
	clearTimeout(initial);
	slideIndx = i;
	switchers[slideIndx].addEventListener("mouseover", function( event ) {   
		event.target.style.transform = 'scale(1)';
	});
	autoSlideshow();
	
}




