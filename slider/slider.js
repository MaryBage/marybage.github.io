
let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++){
	document.getElementById("switchersDiv").innerHTML += `<span class='switcher' onclick='curSlide(${i})'></span>`;
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
	switchers[i].className = switchers[i].className.replace("active","");
  }
  slideIndx++;
  if (slideIndx > slides.length) {slideIndx = 1}
  slides[slideIndx-1].style.display = "block";
  switchers[slideIndx - 1].className += " active"
  initial = setTimeout(autoSlideshow, 10000); // Change image every 2 seconds
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



