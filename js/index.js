var user_id = localStorage.getItem('user_id');
var userSection = document.getElementById('userSection');
var logoutSection = document.getElementById('logoutSection');

if (user_id) {
  var welcomeUserElement = document.getElementById('welcome-user');
  welcomeUserElement.textContent = '환영합니다, ' + user_id + '님!';
  userSection.style.display = 'block';
  logoutSection.style.display = 'none';
} else {
  logoutSection.style.display = 'block';
  userSection.style.display = 'none';
}

function logout() {
  localStorage.removeItem('user_id');
  window.location.href = 'index.html';
}


function goToMain() {
  window.location.href = 'index.html';
}


var slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  var slides = [
    "images/hot/1.jpg",
    "images/hot/2.jpg",
    "images/hot/3.jpg",
    "images/hot/4.jpg"
  ];
  var slideImage = document.getElementById("slideImage");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  slideImage.src = slides[slideIndex];
}

setInterval(function() {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

var slidephoto = 0;
Slideshow(slidephoto);

function Slideshow(n) {
  var slideimgs = [
    "images/hot/5.jpg",
    "images/hot/6.jpg",
    "images/hot/7.jpg",
    "images/hot/8.jpg"
  ];
  var slideImg = document.getElementById("slideImg");

  if (n >= slideimgs.length) {
    slidephoto = 0;
  } else if (n < 0) {
    slidephoto = slideimgs.length - 1;
  } else {
    slidephoto = n;
  }

  slideImg.src = slideimgs[slidephoto];
}

setInterval(function() {
  slidephoto++;
  showSlide(slidephoto);
}, 3000);

setInterval(function() {
  slidephoto++;
  Slideshow(slidephoto);
}, 2800);

var photo = 0;
show(photo);

function show(n) {
  var images = [
    "images/hot/9.jpg",
    "images/hot/10.jpg",
    "images/hot/11.jpg",
    "images/hot/12.jpg"
  ];
  var slideimages = document.getElementById("slideimages");

  if (n >= images.length) {
    photo = 0;
  } else if (n < 0) {
    photo = images.length - 1;
  } else {
    photo = n;
  }

  slideimages.src = images[photo];
}

setInterval(function() {
  photo++;
  show(photo);
}, 3000);

