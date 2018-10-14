var q = ['Complete this phrase. As sick as a...</br></br>',
"Which legal document states a person's wishes regarding the disposal of their property after death?</br></br>",
'Complete the title of the James Bond film The Man With The Golden...</br></br>',
'Which of these fruits shares its name with something superior or desirable?</br></br>',
'In which sport do two teams pull at the opposite ends of a rope?</br></br>',
'Where would a cowboy wear his chaps?</br></br>',
'Which of these zodiac signs is not represented by an animal that grows horns?</br></br>',
'Sherpas and Gurkhas are native to which country?</br></br>',
'Prime Minister Tony Blair was born in which country?</br></br>',
'Whose autobiography has the title, "A Long Walk to Freedom"?</br></br>',
'Duffel coats are named after a town in which country?',
"Complete this stage instruction in Shakespeare's 'The Winter's Tale', 'Exit, pursued by a...'?</br></br>",
"The young of which creature is known as a 'squab'?</br></br>",
'Who is the patron saint of Spain?</br></br>',
'Which king was married to Eleanor of Aquitaine?</br></br>'
];
var a1 = ["<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>"];

var a2 = ["<button class=button002 onclick=q1i()>Penguin</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>"];

var a3 = ["<button class=button002 onclick=q1i()>Puffin</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>"];

var a4 = ["<button class=button002 onclick=q1i()>Partridge</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>","<button class=button002 onclick=q1c()>Parrot</button></br></br>",
"<button class=button002 onclick=q1c()>Parrot</button></br></br>"];

var c = ["Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct","Correct"];

var i = ["Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect","Incorrect"];

var n = 0;
n++;
var s = 0;
s++;

function begin001() {

	disappear001.innerHTML = "" ;
	message001.innerHTML = "";
	question001.innerHTML =q[0];
	option001.innerHTML =a1[0];
	option002.innerHTML =a2[0];
	option003.innerHTML =a3[0];
	option004.innerHTML =a4[0];
	number001.innerHTML = n++;
	// body...
}
function q1c() {
	// body...
	answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
	option001.innerHTML = " ";
	option002.innerHTML = "";
	option003.innerHTML = "";
	option004.innerHTML = "";
	next001.innerHTML = "<button class=button002 onclick=new002()>Next</button>"
	score001.innerHTML = s++;
}
function q1i() {
	// body...
	answer001.innerHTML = "<div id=green001>" + i[0] + "</div>";
	option001.innerHTML = " ";
	option002.innerHTML = "";
	option003.innerHTML = "";
	option004.innerHTML = "";
	next001.innerHTML = "<button class=button002 onclick=end001()>End</button>"
	 
}

function new002() {
	// body...
	 quest();
	 ans1();
	 ans2(); 
	 ans3();
     ans4();
    next001.innerHTML = "" ;
    answer001.innerHTML = "";   
    number001.innerHTML = n++; 
}

function end001() {
	// body...
	message001.innerHTML = "Game over";
	question001.innerHTML = "";
	option001.innerHTML ="";
	option002.innerHTML ="";
	option003.innerHTML ="";
	option004.innerHTML ="";
    next001.innerHTML = "<div id=text001>"+ "<button class=button001 onclick=repeat()>Restart</button>" + "</div>";
    answer001.innerHTML = "";   

}

 function quest() {
 	for (var i = 1; i < q.length; i++) {
 		question001.innerHTML = q[i];
 	}
 }

function ans1() {
	for (var i = 1; i < a1.length; i++) {
		option001.innerHTML =a1[i];
	}
}

function ans2() {
	for (var i = 1; i < a1.length; i++) {
		option002.innerHTML =a2[i]; 
	}
}
function ans3() {
	for (var i = 1; i < a1.length; i++) {
		option003.innerHTML =a3[i];
	}
}
function ans4() {
	for (var i = 1; i < a1.length; i++) {
		option004.innerHTML =a4[i];
	}
}


function repeat() {
	// body...
	location.reload();
}

