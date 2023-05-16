function myFunction() {
  var x = document.getElementById("myMainNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}



