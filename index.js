//modale header
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("block");
};
//affiche année en cour
var today=new Date();
		var annee = today.getFullYear();
		var sannee = document.getElementById('s_annee');
		sannee.innerHTML = annee;




