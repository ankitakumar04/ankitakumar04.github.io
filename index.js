new TypeIt("#typeText", {
  speed: 70,
  startDelay: 900,
	afterComplete: function (step, instance) {
    instance.destroy();
  }
})
	.type("<em>Developer.</em>")
	.delete(10, {speed:450, delay: 500})
	.type("<em>Designer.</em>")
	.delete(9, {speed:450,delay: 500})
	.type("<em>Thinker.</em>")
  .go();

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}

	
