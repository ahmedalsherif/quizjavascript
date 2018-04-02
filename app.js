var questions = [
	{
		question: "what's 2 + 2?",
		answer: 4
	},
	{
		question: "What house was Harry Potter in?",
		answer: "gryffindor"
	},
	{
		question: "What's 10 / 5?",
		answer: 2
	},
	{
		question: "Finish this sentence: winter is ______?",
		answer: "coming"
	},
	{
		question: "Who is the youngest Lannister sibling",
		answer: "tyrion"
	},
	{
		question: "Where does Jorah Mormont's family live?",
		answer: "bear island"
	},
	{
		question: "How many dragons does Daenerys Targaryen have?",
		answer: 3
	},
	{
		question: "How many hands does Jaime Lannister have after book 3?",
		answer: 1
	},
	{
		question: "Did Tyrion commit regicide or patricide?",
		answer: "both"
	},
	{
		question: "How many Direwolves do the starks find?",
		answer: 6
	}
];
var text ="";
 for(var i=0; i<questions.length; i++)
 {
//  	console.log(questions[i].question);
// console.log(questions[i].answer);
 	
 	var a = questions[i].question;
 	var b = questions[i].answer;
 	
 	// console.log(a);
 	//  console.log(b);
 	 document.write('<div id="container">'+'<span id="p1">'+a +'<br>'+'<input id="el">'+'<br>'+'</span>'+'</div>');

 
 }




function problem()
{
 var right =0;
 var wrong =0;
 

for(var i=0; i<questions.length; i++){
	var b = questions[i].answer;
	var x =document.getElementById("el").value;
console.log(b);
if (x==b)
{
	document.getElementById("p1").style.color = "green";
	 // document.getElementById('err').innerHTML = 'correct';

	console.log("correct1");
	right++;


}
else
{
	document.getElementById("p1").style.color = "red";
	 // document.getElementById('err').innerHTML ='wrong';
	console.log("wrong1");
	wrong++;
}}

document.getElementById('err').innerHTML = right;
document.getElementById('err1').innerHTML = wrong;
}
