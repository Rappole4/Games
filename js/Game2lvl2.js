	var life = 20;
	var goals = 2

document.addEventListener("DOMContentLoaded",function(){

		document.querySelectorAll(".red").forEach(function(el){
			el.addEventListener("click",function(){
				life = life - 1
				document.getElementById("help").innerText="AHHHHH!!! It burns, it burns!!!!";
				document.getElementById("life").innerText = life
				if(life == 0){
					alert("Sorry you lose, please try again!")
					location.reload();
				}
				console.log(life)
			});
		});
		document.querySelectorAll(".fight").forEach(function(el){
			el.addEventListener("click",function(){
				life = life - 3
				document.getElementById("help").innerText="Ohhhh! I'm hit!";
				document.getElementById("life").innerText = life
				if(life <= 0){
					alert("Sorry you lose, please try again!")
					location.reload();
				}
				console.log(life)
			});
		});
		document.querySelectorAll(".goal").forEach(function(el){
			el.addEventListener("click",function(){
				goals = goals - 1
				if(goals == 0){
					alert("You Win! Congratulations!!!")
					document.getElementById("grid").style.display="none"
					document.getElementById("background").src = "img/winner2.jpg"
				}
				console.log(goals)
			});
		});

var $follower = $("#hero"),
    mouseX = 0, 
    mouseY = 0;

$(document).click(function(e){
   mouseX = e.pageX-30;
   mouseY = e.pageY-30; 
   $follower.stop().animate({left : mouseX, top: mouseY});
});
// arr = [1,2,3,4,5,6,7,8,9,10];
// arr[ Math.floor(Math.random()*arr.length)]

A.onclick = function() {
	document.getElementById("A").style.display="none";
	document.getElementById("help").innerText="ENTRANCE! Yay you found it, but did you get the treasure?";
}
B.onclick = function() {
		document.getElementById("B").style.display="none";
}
C.onclick = function() {
	document.getElementById("C").style.display="none";
	document.getElementById("help").innerText="";
}
D.onclick = function() {
	document.getElementById("D").style.display="none";
	document.getElementById("help").innerText="";
}
E.onclick = function() {
	document.getElementById("E").style.display="none";
	document.getElementById("help").innerText="";
}
F.onclick = function() {
	document.getElementById("F").style.display="none";
}
G.onclick = function() {
	document.getElementById("G").style.display="none";
}
H.onclick = function() {
	document.getElementById("H").style.display="none";
	document.getElementById("help").innerText="Yay TREASURE! Take that scary voice in my head!";
}
I.onclick = function() {
	document.getElementById("I").style.display="none";
	document.getElementById("help").innerText="";
}
J.onclick = function() {
	document.getElementById("J").style.display="none";
	document.getElementById("help").innerText="";
}
K.onclick = function() {
	document.getElementById("K").style.display="none";
	document.getElementById("help").innerText="";
}
L.onclick = function() {
	document.getElementById("L").style.display="none";
}
M.onclick = function() {
	document.getElementById("M").style.display="none";
	document.getElementById("help").innerText="";
}
N.onclick = function() {
	document.getElementById("N").style.display="none";
}
O.onclick = function() {
	document.getElementById("O").style.display="none";
	document.getElementById("help").innerText="";
}
P.onclick = function() {
	document.getElementById("P").style.display="none";
	document.getElementById("help").innerText="";
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
	document.getElementById("help").innerText="";
}
U.onclick = function() {
	document.getElementById("U").style.display="none";
	document.getElementById("help").innerText="";	
}
V.onclick = function() {
	document.getElementById("V").style.display="none";
}
W.onclick = function() {
	document.getElementById("W").style.display="none";
	document.getElementById("help").innerText="";	
}
X.onclick = function() {
	document.getElementById("X").style.display="none";
	document.getElementById("help").innerText="If you go this way you're on your own, I'm going the other way";
}
Y.onclick = function() {
	document.getElementById("Y").style.display="none";
}
Z.onclick = function() {
	document.getElementById("Z").style.display="none";
	document.getElementById("help").innerText="";
}
AA.onclick = function() {
	document.getElementById("AA").style.display="none";
	document.getElementById("help").innerText="Turn around already, you'll never find the treasure and get out alive!";
}
BB.onclick = function() {
	document.getElementById("BB").style.display="none";
	document.getElementById("help").innerText="";
}
CC.onclick = function() {
	document.getElementById("CC").style.display="none";
	document.getElementById("help").innerText="";
}
DD.onclick = function() {
	document.getElementById("DD").style.display="none";
	document.getElementById("help").innerText="";
}
E0.onclick = function() {
	document.getElementById("E0").style.display="none";
	document.getElementById("help").innerText="";
}
E1.onclick = function() {
	document.getElementById("E1").style.display="none";
}
E2.onclick = function() {
	document.getElementById("E2").style.display="none";
}
E3.onclick = function() {
	document.getElementById("E3").style.display="none";
	document.getElementById("help").innerText="Certain spots, when clicked will give you hints on where to go or at least let you know to stop going the direction you are heading";
}
$(document).ready(function(){
	$("#E3").click();
	});
E4.onclick = function() {
	document.getElementById("E4").style.display="none";
}
E5.onclick = function() {
	document.getElementById("E5").style.display="none";
	document.getElementById("help").innerText="Ummmmm...";
}
E6.onclick = function() {
	document.getElementById("E6").style.display="none";
}
E7.onclick = function() {
	document.getElementById("E7").style.display="none";
	document.getElementById("help").innerText="";
}
E8.onclick = function() {
	document.getElementById("E8").style.display="none";
}
E9.onclick = function() {
	document.getElementById("E9").style.display="none";
}
F0.onclick = function() {
	document.getElementById("F0").style.display="none";
	document.getElementById("help").innerText="";
}
F1.onclick = function() {
	document.getElementById("F1").style.display="none";
}
F2.onclick = function() {
	document.getElementById("F2").style.display="none";
	document.getElementById("help").innerText="Turn Right"
}
F3.onclick = function() {
	document.getElementById("F3").style.display="none";
	document.getElementById("help").innerText="STOP!"
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
	document.getElementById("help").innerText="Is it hot in here or what? My face and left ear feel like they are melting";
}
F8.onclick = function() {
	document.getElementById("F8").style.display="none";
	document.getElementById("help").innerText="Now it is my face and right ear! Huh? What was that sound?";
}
F9.onclick = function() {
	document.getElementById("F9").style.display="none";
}
G0.onclick = function() {
	document.getElementById("G0").style.display="none";
	document.getElementById("help").innerText="";
}
G1.onclick = function() {
	document.getElementById("G1").style.display="none";
}
G2.onclick = function() {
	document.getElementById("G2").style.display="none";
	document.getElementById("help").innerText="";
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
	document.getElementById("help").innerText="Ok I'm done helping, don't expect anymore warnings";
}
H1.onclick = function() {
	document.getElementById("H1").style.display="none";
}
H2.onclick = function() {
	document.getElementById("H2").style.display="none";
	document.getElementById("help").innerText="If you don't like 1st degree burns, don't go any further.";
}
H3.onclick = function() {
	document.getElementById("H3").style.display="none";
	document.getElementById("help").innerText="";
}
H4.onclick = function() {
	document.getElementById("H4").style.display="none";
	document.getElementById("help").innerText="";
}
H5.onclick = function() {
	document.getElementById("H5").style.display="none";
	document.getElementById("help").innerText="";
}
H6.onclick = function() {
	document.getElementById("H6").style.display="none";
	document.getElementById("help").innerText="";
}
H7.onclick = function() {
	document.getElementById("H7").style.display="none";
	document.getElementById("help").innerText="Take one more step, I DARE YOU!";
}
H8.onclick = function() {
	document.getElementById("H8").style.display="none";
}
H9.onclick = function() {
	document.getElementById("H9").style.display="none";
}
I0.onclick = function() {
	document.getElementById("I0").style.display="none";
	document.getElementById("help").innerText="Turn left";
}
I1.onclick = function() {
	document.getElementById("I1").style.display="none";
	document.getElementById("help").innerText="Turn right";
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
	document.getElementById("help").innerText="";
}
I8.onclick = function() {
	document.getElementById("I8").style.display="none";
	document.getElementById("help").innerText="";
}
I9.onclick = function() {
	document.getElementById("I9").style.display="none";
	document.getElementById("help").innerText="I could help, but I don't feel like it at the moment";
}
J0.onclick = function() {
	document.getElementById("J0").style.display="none";
}
J1.onclick = function() {
	document.getElementById("J1").style.display="none";
	document.getElementById("help").innerText="";
}
J2.onclick = function() {
	document.getElementById("J2").style.display="none";
}
J3.onclick = function() {
	document.getElementById("J3").style.display="none";
}
J4.onclick = function() {
	document.getElementById("J4").style.display="none";
	document.getElementById("help").innerText="two of your four options are bad";
}
J5.onclick = function() {
	document.getElementById("J5").style.display="none";
	document.getElementById("help").innerText="";
}
J6.onclick = function() {
	document.getElementById("J6").style.display="none";
	document.getElementById("help").innerText="Maybe keep going, or don't, whatever, all the same to me";
}
J7.onclick = function() {
	document.getElementById("J7").style.display="none";
}
J8.onclick = function() {
	document.getElementById("J8").style.display="none";
}
J9.onclick = function() {
	document.getElementById("J9").style.display="none";
	document.getElementById("help").innerText="";
}
K0.onclick = function() {
	document.getElementById("K0").style.display="none";
}
K1.onclick = function() {
	document.getElementById("K1").style.display="none";
	document.getElementById("help").innerText="I'm watching you, whahahahahahah!";
}
K2.onclick = function() {
	document.getElementById("K2").style.display="none";
	document.getElementById("help").innerText="";
}
K3.onclick = function() {
	document.getElementById("K3").style.display="none";
	document.getElementById("help").innerText="";
}
K4.onclick = function() {
	document.getElementById("K4").style.display="none";
	document.getElementById("help").innerText="";
}
K5.onclick = function() {
	document.getElementById("K5").style.display="none";
}
K6.onclick = function() {
	document.getElementById("K6").style.display="none";
	document.getElementById("help").innerText="";
}
K7.onclick = function() {
	document.getElementById("K7").style.display="none";
	document.getElementById("help").innerText="";
}
K8.onclick = function() {
	document.getElementById("K8").style.display="none";
	document.getElementById("help").innerText="";
}
K9.onclick = function() {
	document.getElementById("K9").style.display="none";
	document.getElementById("help").innerText="";
}
});