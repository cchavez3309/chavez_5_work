function myFunction() {
	document.getElementById("sample").innerHTML = "Change the text";
}

function maChoice(a) {
document.getElementById("sample").innerHTML = a;
	var computer = Math.floor((Math.random()*3) + 0);
	document.getElementById("comp").innerHTML = computer;

	if (a === 0) {
 document.getElementById("sample").innerHTML = "Yay" ; 
	document.getElementById("player").innerHTML = "You chose rock!";
	if (computer == 0) {  document.getElementById("result").innerHTML = "TIE";  }
	else if (computer == 1) {  document.getElementById("result").innerHTML = "LOSE";  }
	else if (computer == 2) {  document.getElementById("result").innerHTML = "WIN";  }

	}

	else if (a == 1) {

	document.getElementById("player").innerHTML = "You chose paper!";
        if (computer == 0) {  document.getElementById("result").innerHTML = "WIN";  }
        else if (computer == 1) {  document.getElementById("result").innerHTML = "TIE";  }
        else if (computer == 2) {  document.getElementById("result").innerHTML = "LOSE"; }

	}

	else if (a == 2) {
	document.getElementById("player").innerHTML = "You chose scissors!";
	if (computer == 0) { document.getElementById("result").innerHTML = "LOSE"; }
        else if (computer == 1) { document.getElementById("result").innerHTML = "WIN"; }
        else if (computer == 2) { document.getElementById("result").innerHTML = "TIE"; }

	} else {
	document.getElementById("player").innerHTML = "Yay" ; }

}
