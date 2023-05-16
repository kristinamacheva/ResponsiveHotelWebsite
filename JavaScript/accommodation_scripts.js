var modal = document.getElementById("modalForm");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function openModalForm() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



