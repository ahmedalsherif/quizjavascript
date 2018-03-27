function problem()
{
 var right =0;
 var wrong =0;
var a =document.getElementById("one");
if (a.value=="4")
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
}
var a =document.getElementById("two");
if (a.value=="2")
{
	 document.getElementById("p2").style.color = "green";
	console.log("correct2");
	right++;
}
else
{
	document.getElementById("p2").style.color = "red";
	wrong++;
	
	console.log("wrong2");
}
var a =document.getElementById("three");
if (a.value=="3")
{
	 document.getElementById("p3").style.color = "green";
	console.log("correct3");
	right++;
}
else
{
	document.getElementById("p3").style.color = "red";
	wrong++;
	 
	console.log("wrong3");
}
var a =document.getElementById("four");
if (a.value=="trump")
{
	document.getElementById("p4").style.color = "green";
	right++;
	console.log("correct4");
}
else
{
	document.getElementById("p4").style.color = "red";
	wrong++;
	
	console.log("wrong4");
}
var a =document.getElementById("five");
if (a.value=="january")
{
	document.getElementById("p5").style.color = "green";
	right++; 
	console.log("correct5");
}
else
{
	document.getElementById("p5").style.color = "red";
	wrong++;
	
	console.log("wrong5");
}

// alert (right);
// alert(wrong);
document.getElementById('err').innerHTML = right;
document.getElementById('err1').innerHTML = wrong;
}
