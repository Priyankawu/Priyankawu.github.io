
//These functions open and close the contact form
function openForm() {
    document.getElementsById("myForm").style.display="block";
}

function closeForm() {
    document.getElementsById("myForm").style.display="none";
}

//This function covers the slide show
var slideIndex = 1;
    showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex = slideIndex+n);
}
function currentSlide(n){
    showSlides(n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.length}
    //no slides on screen
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace( " active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}