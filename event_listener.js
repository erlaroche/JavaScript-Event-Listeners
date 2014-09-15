function Tapped(){
	alert("I just got tapped!");
}
function Remover(){
	var tapper = document.getElementById ("tapButton");
	tapper.removeEventListener("click", Tapped, false);
	tapper.style.background='black';
	tapper.style.color="white";
	alert("Tap Man is broken!");
}
function setUp() {
	var tapper = document.getElementById('tapButton');
	tapper.addEventListener("click", Tapped, false);
	var terminator = document.getElementById("spoiler");
	terminator.addEventListener("click", Remover, false);
}