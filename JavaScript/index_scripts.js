var slideIndex = 1;
showDivsConv(slideIndex);

function plusDivsConv(n) {
  showDivsConv(slideIndex += n);
}

function showDivsConv(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesConv");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
