
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
	container.innerHTML += `<div class='slide fade'>\n
								<img src="images/${city}.JPG" style="width:100%">\n
								<div class='desctiption'>${city}</div>\n
							</div>`;
}

let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++){
	//document.getElementById("switchersDiv").innerHTML += `<span class='switcher' onclick='curSlide(${i})'></span>`;
	document.getElementById("switchersDiv").innerHTML += `<img  class='switcher' onclick='curSlide(${i})' width='30px' src='images/plane1.png'>`;
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

let slideIndx = 1;

autoSlideshow ();

function autoSlideshow () {
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	switchers[i].innerHTML = '';
	switchers[i].className = switchers[i].className.replace("active","");
  }
  slideIndx++;
  if (slideIndx > slides.length) {slideIndx = 1}
  slides[slideIndx-1].style.display = "block";
  switchers[slideIndx - 1].className += " active";
  switchers[slideIndx - 1].src  = "images/switcher_s.png";
  initial = setTimeout(autoSlideshow, 2000); // Change image every 2 seconds
}

function pagingSlide(n){
	showSlides(slideIndx += n);
}

function showSlides(n){
	
	slideIndx = n > slides.length ? 1 : n < 1 ? slides.length : n;
	
	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		console.log(i+'--'+switchers[i].className);
		switchers[i].className = switchers[i].className.replace("active","");
	}

	slides[slideIndx - 1].style.display = "block";
	switchers[slideIndx - 1].className += " active";
	switchers[slideIndx - 1].innerHTML = "<img src='images/switcher_s.png'> ";
}


function curSlide(i){
	
	clearTimeout(initial);
	slideIndx = i - 1;
	autoSlideshow();
	
}





function slider(){

		let imgs = document.getElementsByClassName('slider-img');
		for (let img of imgs){
			console.log(img);
					setInterval(() => img.style.zIndex = '1',3000);
			}
	
	
}



