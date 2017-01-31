	var count = 45;

document.addEventListener("DOMContentLoaded",function(){

		document.querySelectorAll(".all").forEach(function(el){
			el.addEventListener("click",function(){
				count = count - 1
				document.getElementById("counter").innerText = count
				if(count == 0){
					alert("Sorry you lose, please try again!")
					location.reload();
				}
				console.log(count)
			});
		});

// arr = [1,2,3,4,5,6,7,8,9,10];
// arr[ Math.floor(Math.random()*arr.length)]

	document.getElementById("first").onclick = function(){
		if(document.getElementById("gold").value==("gold")||document.getElementById("gold").value==("Gold")||document.getElementById("gold").value==("GOLD")){
			document.getElementById("ans1").innerText = " Great! (10,2) will get you one step closer"
		} else {
			document.getElementById("ans1").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("first").style.display="none";
		}
	}
	document.getElementById("second").onclick = function(){
		if(document.getElementById("west3").value==("west")||document.getElementById("west3").value==("West")||document.getElementById("west3").value==("WEST")){
			document.getElementById("ans2").innerText = " Great! Click the next 3 blocks West of your current location"
		} else {
			document.getElementById("ans2").innerText = " Nope, knowing the directions of a compass will help out a lot in life, I suggest you learn them, cause now you're walking blind.";
			document.getElementById("second").style.display="none";
		}
	}
	document.getElementById("third").onclick = function(){
		if(document.getElementById("south2").value==("decade")||document.getElementById("south2").value==("Decade")||document.getElementById("south2").value==("DECADE")){
			document.getElementById("ans3").innerText = " Great! Take the next 2 blocks South of your current location, then take 2 more blocks East"
		} else {
			document.getElementById("ans3").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("third").style.display="none";
		}
	}
	document.getElementById("fourth").onclick = function(){
		if(document.getElementById("east2").value==("thirteen")||document.getElementById("east2").value==("Thirteen")||document.getElementById("east2").value==("THIRTEEN")||document.getElementById("east2").value==("13")){
			document.getElementById("ans4").innerText = " Great! Take the next 4 blocks South of your current location"
		} else {
			document.getElementById("ans4").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("fourth").style.display="none";
		}
	}
	document.getElementById("fifth").onclick = function(){
		if(document.getElementById("south4").value==("ninety")||document.getElementById("south4").value==("Ninety")||document.getElementById("south4").value==("NINETY")||document.getElementById("south4").value==("90")){
			document.getElementById("ans5").innerText = " Great! Take the next 2 blocks West of your current location"
		} else {
			document.getElementById("ans5").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("fifth").style.display="none";
		}
	}
	document.getElementById("sixth").onclick = function(){
		if(document.getElementById("west2").value==("six")||document.getElementById("west2").value==("Six")||document.getElementById("west2").value==("SIX")||document.getElementById("west2").value==("6")){
			document.getElementById("ans6").innerText = " Great! Now I wouldn't go South to start with, but if you click 6 blocks divided evenly among 3 of the possible directions, you'll get around the danger to the West."
		} else {
			document.getElementById("ans6").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("sixth").style.display="none";
		}
	}
	document.getElementById("seventh").onclick = function(){
		if(document.getElementById("six").value==("Washington")||document.getElementById("six").value==("WASHINGTON")){
			document.getElementById("ans7").innerText = " Great! You can click one West of you, then (4,9),(3,9) and (2,9) are all safe."
		} else {
			document.getElementById("ans7").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("seventh").style.display="none";
		}
	}
	document.getElementById("eighth").onclick = function(){
		if(document.getElementById("south").value==("south")||document.getElementById("south").value==("South")||document.getElementById("south").value==("SOUTH")){
			document.getElementById("ans8").innerText = " Great! Don't go any further West, and (2,5) is a hot spot of doom, but if you go around that the treck to (2,2) is rather nice."
		} else {
			document.getElementById("ans8").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("eighth").style.display="none";
		}
	}
	document.getElementById("nineth").onclick = function(){
		if(document.getElementById("thirty").value==("thirty")||document.getElementById("thirty").value==("Thirty")||document.getElementById("thirty").value==("THIRTY")||document.getElementById("thirty").value==("30")){
			document.getElementById("ans9").innerText = " Almost there! Head East 3 blocks."
		} else {
			document.getElementById("ans9").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("nineth").style.display="none";
		}
	}
	document.getElementById("tenth").onclick = function(){
		if(document.getElementById("raleigh").value==("Raleigh")||document.getElementById("Raleigh").value==("RALEIGH")){
			document.getElementById("ans10").innerText = " You did it! Just 2 blocks South to your prize!!"
		} else {
			document.getElementById("ans10").innerText = " Nope, sorry guess you're going to have to guess this time";
			document.getElementById("tenth").style.display="none";
		}
	}

A.onclick = function() {
	document.getElementById("grid").style.display="none";
}
B.onclick = function() {
		document.getElementById("B").style.display="none";
}
C.onclick = function() {
	document.getElementById("C").style.display="none";
}
D.onclick = function() {
	document.getElementById("D").style.display="none";
}
E.onclick = function() {
	document.getElementById("E").style.display="none";
}
F.onclick = function() {
	document.getElementById("F").style.display="none";
}
G.onclick = function() {
	document.getElementById("G").style.display="none";
}
H.onclick = function() {
	document.getElementById("H").style.display="none";
}
I.onclick = function() {
	document.getElementById("I").style.display="none";
}
J.onclick = function() {
	document.getElementById("J").style.display="none";
}
K.onclick = function() {
	document.getElementById("K").style.display="none";
}
L.onclick = function() {
	document.getElementById("L").style.display="none";
}
M.onclick = function() {
	document.getElementById("M").style.display="none";
}
N.onclick = function() {
	document.getElementById("N").style.display="none";
}
O.onclick = function() {
	document.getElementById("O").style.display="none";
}
P.onclick = function() {
	document.getElementById("P").style.display="none";
}
Q.onclick = function() {
	document.getElementById("Q").style.display="none";
}
R.onclick = function() {
	document.getElementById("R").style.display="none";
}
S.onclick = function() {
	document.getElementById("S").style.display="none";
}
T.onclick = function() {
	document.getElementById("T").style.display="none";
}
U.onclick = function() {
	document.getElementById("U").style.display="none";	
}
V.onclick = function() {
	document.getElementById("V").style.display="none";
}
W.onclick = function() {
	document.getElementById("W").style.display="none";	
}
X.onclick = function() {
	document.getElementById("X").style.display="none";
}
Y.onclick = function() {
	document.getElementById("Y").style.display="none";
}
Z.onclick = function() {
	document.getElementById("Z").style.display="none";
}
AA.onclick = function() {
	document.getElementById("AA").style.display="none";
}
BB.onclick = function() {
	document.getElementById("BB").style.display="none";
}
CC.onclick = function() {
	document.getElementById("CC").style.display="none";
}
DD.onclick = function() {
	document.getElementById("DD").style.display="none";
}
E0.onclick = function() {
	document.getElementById("E0").style.display="none";
}
E1.onclick = function() {
	document.getElementById("E1").style.display="none";
}
E2.onclick = function() {
	document.getElementById("E2").style.display="none";
}
E3.onclick = function() {
	document.getElementById("E3").style.display="none";
}
E4.onclick = function() {
	document.getElementById("E4").style.display="none";
}
E5.onclick = function() {
	document.getElementById("E5").style.display="none";
}
E6.onclick = function() {
	document.getElementById("E6").style.display="none";
}
E7.onclick = function() {
	document.getElementById("E7").style.display="none";
}
E8.onclick = function() {
	document.getElementById("E8").style.display="none";
}
E9.onclick = function() {
	document.getElementById("E9").style.display="none";
}
F0.onclick = function() {
	document.getElementById("F0").style.display="none";
}
F1.onclick = function() {
	document.getElementById("F1").style.display="none";
}
F2.onclick = function() {
	document.getElementById("F2").style.display="none";
}
F3.onclick = function() {
	document.getElementById("F3").style.display="none";
}
F4.onclick = function() {
	document.getElementById("F4").style.display="none";
}
F5.onclick = function() {
	document.getElementById("F5").style.display="none";
}
F6.onclick = function() {
	document.getElementById("F6").style.display="none";
}
F7.onclick = function() {
	document.getElementById("F7").style.display="none";
}
F8.onclick = function() {
	document.getElementById("F8").style.display="none";
}
F9.onclick = function() {
	document.getElementById("F9").style.display="none";
}
G0.onclick = function() {
	document.getElementById("G0").style.display="none";
}
G1.onclick = function() {
	document.getElementById("G1").style.display="none";
}
G2.onclick = function() {
	document.getElementById("G2").style.display="none";
}
G3.onclick = function() {
	document.getElementById("G3").style.display="none";
}
G4.onclick = function() {
	document.getElementById("G4").style.display="none";
}
G5.onclick = function() {
	document.getElementById("G5").style.display="none";
}
G6.onclick = function() {
	document.getElementById("G6").style.display="none";
}
G7.onclick = function() {
	document.getElementById("G7").style.display="none";
}
G8.onclick = function() {
	document.getElementById("G8").style.display="none";
}
G9.onclick = function() {
	document.getElementById("G9").style.display="none";
}
H0.onclick = function() {
	document.getElementById("H0").style.display="none";
}
H1.onclick = function() {
	document.getElementById("H1").style.display="none";
}
H2.onclick = function() {
	document.getElementById("H2").style.display="none";
}
H3.onclick = function() {
	document.getElementById("H3").style.display="none";
}
H4.onclick = function() {
	document.getElementById("H4").style.display="none";
}
H5.onclick = function() {
	document.getElementById("H5").style.display="none";
}
H6.onclick = function() {
	document.getElementById("H6").style.display="none";
}
H7.onclick = function() {
	document.getElementById("H7").style.display="none";
}
H8.onclick = function() {
	document.getElementById("H8").style.display="none";
}
H9.onclick = function() {
	document.getElementById("H9").style.display="none";
}
I0.onclick = function() {
	document.getElementById("I0").style.display="none";
}
I1.onclick = function() {
	document.getElementById("I1").style.display="none";
}
I2.onclick = function() {
	document.getElementById("I2").style.display="none";
}
I3.onclick = function() {
	document.getElementById("I3").style.display="none";
}
I4.onclick = function() {
	document.getElementById("I4").style.display="none";
}
I5.onclick = function() {
	document.getElementById("I5").style.display="none";
}
I6.onclick = function() {
	document.getElementById("I6").style.display="none";
}
I7.onclick = function() {
	document.getElementById("I7").style.display="none";
}
I8.onclick = function() {
	document.getElementById("I8").style.display="none";
}
I9.onclick = function() {
	document.getElementById("I9").style.display="none";
}
J0.onclick = function() {
	document.getElementById("J0").style.display="none";
}
J1.onclick = function() {
	document.getElementById("J1").style.display="none";
}
J2.onclick = function() {
	document.getElementById("J2").style.display="none";
}
J3.onclick = function() {
	document.getElementById("J3").style.display="none";
}
J4.onclick = function() {
	document.getElementById("J4").style.display="none";
}
J5.onclick = function() {
	document.getElementById("J5").style.display="none";
}
J6.onclick = function() {
	document.getElementById("J6").style.display="none";
}
J7.onclick = function() {
	document.getElementById("J7").style.display="none";
}
J8.onclick = function() {
	document.getElementById("J8").style.display="none";
}
J9.onclick = function() {
	document.getElementById("J9").style.display="none";
}
K0.onclick = function() {
	document.getElementById("K0").style.display="none";
}
K1.onclick = function() {
	document.getElementById("K1").style.display="none";
}
K2.onclick = function() {
	document.getElementById("K2").style.display="none";
}
K3.onclick = function() {
	document.getElementById("K3").style.display="none";
}
K4.onclick = function() {
	document.getElementById("K4").style.display="none";
}
K5.onclick = function() {
	document.getElementById("K5").style.display="none";
}
K6.onclick = function() {
	document.getElementById("K6").style.display="none";
}
K7.onclick = function() {
	document.getElementById("K7").style.display="none";
}
K8.onclick = function() {
	document.getElementById("K8").style.display="none";
}
K9.onclick = function() {
	document.getElementById("K9").style.display="none";
}
});