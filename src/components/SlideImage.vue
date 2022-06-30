<template>
	<div class="slide-block">
		<div class="slide-i">
			<div class="header">
				<div class="title">
					<h2 class="h2">
						Get the care you need in seconds, in all the moments that matter
					</h2>
					<p class="care-p">
						Get treatment for non-emergency conditions with a <br />
						virtual visit, 24/7, 365 days a year.
					</p>
				</div>
			</div>
		</div>

		<ul class="slideshow-container">
			<li class="mySlides fade">
				<img
					src="https://amazon.care/images/60073a3d7d53c40b383ec5d8_GaryMatoso-05-08-20-0487%20sml.jpg"
					style="width: 100%"
				/>
				<div class="slider-text">
					<h4 class="h4-no-margin">“I’m worried something’s wrong with me”</h4>
					<p class="no-slider">
						Confidence that you can prepare for health risks with a trusted
						clinician by your side.
					</p>
				</div>
			</li>

			<li class="mySlides fade">
				<img
					src="https://amazon.care/images/60073a3d7d53c416603ec5da_MATOSO_20190922_405%20sml.jpg"
					style="width: 100%"
				/>
				<div class="slider-text">
					<h4 class="h4-no-margin">“My baby woke up with a fever of 102”</h4>
					<p class="no-slider">
						Peace of mind when you know how to keep your child safe.
					</p>
				</div>
			</li>

			<li class="mySlides fade">
				<img
					src="https://amazon.care/images/627d17e09bceeccfa22a82e7_Dad%20and%20sick%20child.jpg"
					style="width: 100%"
				/>
				<div class="slider-text">
					<h4 class="h4-no-margin">“Working from home is killing my back”</h4>
					<p class="no-slider">
						Reassurance of knowing you can feel better – and how to do it.
					</p>
				</div>
			</li>
			<li class="mySlides fade">
				<img
					src="https://amazon.care/images/60147fd2f0edcd607cfc1d9a_Amazon-Home-1159--edited---small.jpg"
					style="width: 100%"
				/>
				<div class="slider-text">
					<h4 class="h4-no-margin">“I haven’t slept well in months”</h4>
					<p class="no-slider">
						Relief when you finally confront a nagging issue.
					</p>
				</div>
			</li>
			<li class="mySlides fade">
				<img
					src="https://amazon.care/images/60073a3d7d53c454ff3ec5d9_MATOSO_20190925_793%20sml.jpg"
					style="width: 100%"
				/>
				<div class="slider-text">
					<h4 class="h4-no-margin">“I just feel… off”</h4>
					<p class="no-slider">
						Motivation to listen and respond to your body.
					</p>
				</div>
			</li>
		</ul>
		<br />

		<div style="text-align: center">
			<span class="dot" onclick="currentSlide(0)"></span>
			<span class="dot" onclick="currentSlide(1)"></span>
			<span class="dot" onclick="currentSlide(2)"></span>
			<span class="dot" onclick="currentSlide(3)"></span>
			<span class="dot" onclick="currentSlide(4)"></span>
		</div>
	</div>
</template>

<script>
var slideIndex = 0;

window.onload = function () {
	showSlides(slideIndex);
	currentSlide(slideIndex);
	// Auto Move Slide
	var sec = 3000;
	setInterval(function () {
		slideIndex++;
		showSlides(slideIndex);
	}, sec);
};
function currentSlide(n) {
	slideIndex = n;
	showSlides(slideIndex);
}
function showSlides(n) {
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	var size = slides.length;
	var i;
	if (n + 1 > size) {
		slideIndex = 0;
		n = 0;
	} else if (n < 0) {
		slideIndex = size - 1;
		n = size - 1;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}

	slides[n].style.display = 'block';
	dots[n].className += ' active';
}
</script>
<style>
p {
	margin-bottom: 20px;
	color: #2d1954;
	font-size: 16px;
	line-height: 28px;
	margin-top: 0;
	margin-bottom: 10px;
}
* {
	box-sizing: border-box;
}
body {
	font-family: Verdana, sans-serif;
}
.mySlides {
	display: none;
}
img {
	vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
	max-width: 1000px;
	position: relative;
	margin: auto;
}

/* Caption text */
.slider-text {
	position: relative;
	left: auto;
	top: -55px;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	padding: 32px 32px 40px;
	border-left: 8px none #5c4cdf;
	background-color: #fff;
	transition: all 0.2s ease;
	text-align: center;
}
.h4-no-margin {
	line-height: 24px;
	margin-top: 24px;
	margin-bottom: 16px;
	font-size: 24px;
	font-weight: 700;
}
.no-slider {
	max-width: 750px;
	padding: 0 16px;
	margin: 0 auto;
	overflow: visible;
	position: relative;
	width: 100%;
}
/* The dots/bullets/indicators */
.dot {
	cursor: pointer;
	height: 10px;
	width: 10px;
	margin: 0 8px;
	border-radius: 50%;
	border: solid 1px #5c4cdf;
	display: inline-block;
}

.active {
	background-color: #5c4cdf;
}

/* Fading animation */
.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}

@-webkit-keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
	.text {
		font-size: 11px;
	}
}
.h2 {
	color: #351f65;
	font-size: 32px;
	line-height: 40px;
}
h2 {
	margin-top: 0;
	margin-bottom: 24px;
	font-size: 32px;
	line-height: 40px;
	font-weight: 700;
}
.care-p {
	max-width: 400px;
	margin-bottom: 96px;
}
.slide-block {
	display: flex;
	padding-bottom: 120px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-right: 6%;
	padding-bottom: 120px;
	padding-left: 6%;
}
.slide-i {
	overflow: hidden;
	padding-right: 0;
	padding-left: 0;
	background-image: none;
}
.header {
	padding-top: 24px;
	padding-right: 80px;
	padding-left: 80px;
	padding-bottom: 80px;
}
.title {
	position: relative;
	z-index: 10;
	display: flex;
	max-width: 540px;
	margin-right: auto;
	margin-left: auto;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

@media screen and (max-width: 767px) {
	.care-p {
		margin-bottom: 40px;
	}
	.h2 {
		font-size: 32px;
		line-height: 40px;
	}
}
</style>
